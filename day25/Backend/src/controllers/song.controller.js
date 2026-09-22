const songModel = require("../models/songs.model.js");
const id3 = require("node-id3");
const storageService = require("../services/storage.service.js");

async function uploadSong(req, res) {
  // console.log(req.file);

  const songBuffer = req.file.buffer;
  const tags = id3.read(songBuffer);
  const { mood } = req.body;

  // console.log(tags);

  const songFile = await storageService.uploadFile({
    buffer: songBuffer,
    filename: tags.title + ".mp3",
    folder: "/cohort-2/moodify/songs",
  });

  const posterFile = await storageService.uploadFile({
    buffer: tags.image.imageBuffer,
    filename: tags.title + ".jpeg",
    folder: "/cohort-2/moodify/posters",
  });

  const song = await songModel.create({
    title: tags.title,
    url: songFile.url,
    posterUrl: posterFile.url,
    mood,
  });

  res.status(201).json({
    message: "song created successfully",
    song,
  });
}

module.exports = { uploadSong };
