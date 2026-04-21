const followModel = require("../models/follow.model.js");
const userModel = require("../models/user.model.js");

async function followUserController(req, res) {
  const followerUsername = req.user.username;
  const followingUsername = req.params.username;

  const isUserExists = await userModel.findOne({
    username: followingUsername,
  });

  if (!isUserExists) {
    return res.status(404).json({
      message: "User you are trying to follow does not exists",
    });
  }

  if (followerUsername === followingUsername) {
    return res.status(400).json({
      message: "You cannot follow yourself",
    });
  }

  const isAlreadyFollowing = await followModel.findOne({
    follower: followerUsername,
    following: followingUsername,
  });

  if (isAlreadyFollowing) {
    return res.status(200).json({
      message: "You are already following this user",
    });
  }

  const followRecord = await followModel.create({
    follower: followerUsername,
    following: followingUsername,
  });

  res.status(201).json({
    message: `You are now following ${followingUsername}`,
    follow: followRecord,
  });
}

async function unfollowUserController(req, res) {
  const followerUsername = req.user.username;
  const followingUsername = req.params.username;

  const isUserFollowing = await followModel.findOne({
    follower: followerUsername,
    following: followingUsername,
  });

  if (!isUserFollowing) {
    return res.status(200).json({
      message: `You are not following ${followingUsername}`,
    });
  }

  await followModel.findOneAndDelete(isUserFollowing._id);

  res.status(200).json({
    message: `You have unfollowed ${followingUsername}`,
  });
}

module.exports = { followUserController, unfollowUserController };
