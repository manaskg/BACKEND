const postModel = require("../models/post.model.js");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");
const { post } = require("../app.js");
const likeModel = require("../models/like.model.js");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  console.log(req.body);
  console.log(req.file);

  console.log(req.user);

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder: "cohor-2-insta-posts",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: "post created successfully",
    post: post,
  });
}

async function getPostController(req, res) {
  const posts = await postModel.find({
    user: req.user.id,
  });

  res.status(200).json({
    message: "Posts fetched successfully",
    posts,
  });
}

async function getPostDetailsController(req, res) {
  const userId = req.user.id;
  const postId = req.params.postId;

  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  const isValidUser = post.user.toString() === userId;

  if (!isValidUser) {
    return res.status(403).json({
      message: "forbidden content",
    });
  }

  res.status(200).json({
    message: "post fetched successfully",
    post,
  });
}

async function likePostController(req, res) {
  const postId = req.params.postId;
  const username = req.user.username;

  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({
      message: "post not found.",
    });
  }

  const like = await likeModel.create({
    post: postId,
    user: username,
  });

  res.status(201).json({
    message: "Successfully liked the post",
  });
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
  likePostController,
};
