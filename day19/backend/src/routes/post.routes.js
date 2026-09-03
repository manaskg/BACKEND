const express = require("express");
const postController = require("../controllers/post.controller.js");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const identifyUser = require("../middlewares/auth.middleware.js");

const postRouter = express.Router();
/**
 * POST: api/posts/ [protected]
 * - req.body = {caption, image-file}
 */

postRouter.post(
  "/",
  upload.single("image"),
  identifyUser,
  postController.createPostController,
);

/**
 * GET: api/posts/
 */

postRouter.get("/", identifyUser, postController.getPostController);

/**
 * GET: api/posts/details/:postId
 * - return the detail about specific post with the id. also check whether the post belong to the user that the request come from
 */

postRouter.get(
  "/details/:postId",
  identifyUser,
  postController.getPostDetailsController,
);

/**
 * POST: api/posts/like/:postId
 */

postRouter.post(
  "/like/:postId",
  identifyUser,
  postController.likePostController,
);


/**
 * @route GET /api/posts/feed
 * @description get all the post created in the db
 * @access private
 */

postRouter.get('/feed', identifyUser, postController.getFeedController)











module.exports = postRouter;
