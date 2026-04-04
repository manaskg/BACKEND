const express = require("express");
const postController = require("../controllers/post.controller.js");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const postRouter = express.Router();
/**
 * POST: api/posts/ [protected]
 */

postRouter.post(
  "/",
  upload.single("image"),
  postController.createPostController,
);

module.exports = postRouter;
