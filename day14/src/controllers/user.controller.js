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

async function acceptFollowRequest(req, res) {
  try {
    const followId = req.params.followId;
    const followingUsername = req.user.username;

    const followRequest = await followModel.findById(followId);

    if (!followRequest) {
      return res.status(404).json({
        message: "Follow request not found",
      });
    }

    // Verify that the current user is the one receiving the request
    if (followRequest.following !== followingUsername) {
      return res.status(403).json({
        message: "You can only accept follow requests sent to you",
      });
    }

    // Update status to accepted
    followRequest.status = "accepted";
    await followRequest.save();

    res.status(200).json({
      message: `You accepted follow request from ${followRequest.follower}`,
      follow: followRequest,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error accepting follow request",
      error: error.message,
    });
  }
}

module.exports = { followUserController, unfollowUserController };
