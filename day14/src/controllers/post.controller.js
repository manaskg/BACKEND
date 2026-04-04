const postModel = require("../models/post.model.js");
const imagekit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

async function createPostController(req, res) {
  //   console.log(req.body);
  //   console.log(req.file);

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
  });

  res.send(file);
}

module.exports = { createPostController };
