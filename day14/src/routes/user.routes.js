const express = require("express");
const userController = require("../controllers/user.controller.js");
const identifyUser = require("../middlewares/auth.middleware.js");

const userRouter = express.Router();

/**
 * @route POST /api/users/follow/:username
 * @description Send a follow request (creates pending follow)
 * @access Private
 */

userRouter.post(
  "/follow/:username",
  identifyUser,
  userController.followUserController,
);

/**
 * @route POST /api/users/unfollow/:username
 * @description Unfollow a user (delete accepted follow)
 * @access Private
 */

userRouter.post(
  "/unfollow/:username",
  identifyUser,
  userController.unfollowUserController,
);

userRouter.get("/follow-requests/sent", identifyUser, userController.getSentFollowRequests)

userRouter.get('/follow-requests/received', identifyUser, userController.getReceivedFollowRequests)

userRouter.patch('/follow-requests/:')


module.exports = userRouter;
