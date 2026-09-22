const songModel = require("../models/songs.model.js");

async function uploadSong(req, res) {
  console.log(req.file);
}

module.exports = { uploadSong };
