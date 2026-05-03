const followModel = require("../models/follow.model.js");
const userModel = require("../models/user.model.js");

// Send a follow request (status: pending)
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

  // Check if already following or pending
  const isAlreadyFollowing = await followModel.findOne({
    follower: followerUsername,
    following: followingUsername,
  });

  if (isAlreadyFollowing) {
    if (isAlreadyFollowing.status === "pending") {
      return res.status(200).json({
        message: "you have already sent follow request to this user",
        status: "pending",
      });
    } else if (isAlreadyFollowing.status === "accepted") {
      return res.status(200).json({
        message: "You are already following this user",
        status: isAlreadyFollowing.status,
      });
    }
  }

  // Create follow request with status: pending
  const followRecord = await followModel.create({
    follower: followerUsername,
    following: followingUsername,
    status: "pending",
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
    status: "accepted",
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

// Get all pending follow request SENT by user
async function getSentFollowRequests(req, res) {
  const user = req.user.username;

  const sentRequests = await followModel
    .find({
      follower: user,
      status: "pending",
    })
    .select("following status createdAt");

  res.status(200).json({
    message: "Sent follow requests",
    count: sentRequests.length,
    requests: sentRequests,
  });
}

// Get all pending follow requests RECEIVED by user
async function getReceivedFollowRequests(req, res) {
  const user = req.user.username;

  const receivedRequests = await followModel
    .find({
      following: user,
      status: "pending",
    })
    .select("follower status createdAt");

  res.status(200).json({
    message: "Received follow requests",
    count: receivedRequests.length,
    requests: receivedRequests,
  });
}

async function acceptFollowRequests(req, res) {
  const user = req.user.username;
  const follower = req.params.followerUsername;

  const followRecord = await followModel.findOne({
    follower: follower,
    following: user,
    status: "pending",
  });

  if (!followRecord) {
    return res.status(404).json({
      message: `there is no pending follow request by the user: ${follower} `,
    });
  }

  followModel.status = "accepted";
  await followModel.save();

  res.status(200).json({
    message: `You accepted follow request from ${follower}`,
    follow: followModel,
  });
}

async function rejectFollowRequests(req, res) {
  const user = req.user.username;
  const follower = req.params.followerUsername;

  const followRecord = await followModel.findOne({
    follower: follower,
    following: user,
    status: "pending",
  });

  if (!followRecord) {
    return res.status(404).json({
      message: `there is no pending follow request by the user: ${follower} `,
    });
  }

  followModel.status = "rejected";
  await followModel.save();

  res.status(200).json({
    message: `You rejected follow request from ${follower}`,
    follow: followModel,
  });
}

module.exports = {
  followUserController,
  unfollowUserController,
  getSentFollowRequests,
  getReceivedFollowRequests,
  acceptFollowRequests,
  rejectFollowRequests,
};
