// import React from 'react'
// import { useEffect } from "react";

const Follow = ({
  followers,
  followCount,
  followings,
  followingCount,
  suggestionsList,
  handleFollowUser,
}) => {
  // console.log("following list", followings);
  // console.log("following count:", followingCount);



  return (
    <div className="follow-section">
      <div className="user-container followers-container">
        <h3>Followers ({followCount})</h3>

        {followers.map((follower) => {
          return (
            <div className="user-tablet">
              <img src={follower.profileImage} alt="" />
              <p>{follower.username}</p>
              <button className="button primary-button">Follow back</button>
            </div>
          );
        })}
      </div>

      <div className="user-container following-container">
        <h3>Followings ({followingCount})</h3>

        {followings.map((follower) => {
          return (
            <div className="user-tablet">
              <img src={follower.profileImage} alt="" />
              <p>{follower.username}</p>
              <button className="button primary-button">Unfollow</button>
            </div>
          );
        })}
      </div>

      <div className="user-container suggestions-container">
        <h3>You may follow</h3>

        {suggestionsList.map((suggestion) => {
          return (
            <div className="user-tablet">
              <img src={suggestion.profileImage} alt="" />
              <p>{suggestion.username}</p>
              <button
                className="button primary-button"
                onClick={() => {
                  handleFollowUser(suggestion.username);
                }}
              >
                Follow
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Follow;
