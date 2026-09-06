// import React from 'react'
// import { useEffect } from "react";

const Follow = ({ followers, followCount, followings, followingCount }) => {

    console.log("following list", followings);
    console.log("following count:", followingCount);

  return (
    <div className="follow-section">
      <div className="user-container">
        <h3>Followers ({followCount})</h3>

        {followers.map((follower) => {
          return (
            <div className="user-tablet">
              <img src={follower.profileImage} alt="" />
              <p>{follower.username}</p>
              {/* <button className="button primary-button">Follow</button> */}
            </div>
          );
        })}
      </div>

      <div className="user-container">
        <h3>Followings ({followingCount})</h3>

        {followings.map((follower) => {
          return (
            <div className="user-tablet">
              <img src={follower.profileImage} alt="" />
              <p>{follower.username}</p>
              {/* <button className="button primary-button">Follow</button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Follow;
