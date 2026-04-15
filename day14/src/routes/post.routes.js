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

/**
 * GET: api/posts/
 */

postRouter.get("/", postController.getPostController);

/**
 * GET: api/posts/details/:postid
 * - return the detail about specific post with the id. also check whether the post belong to the user that the request come from
 */

postRouter.get("/details/:postId", postController.getPostDetailsController);

module.exports = postRouter;
