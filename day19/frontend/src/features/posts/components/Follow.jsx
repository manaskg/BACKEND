// import React from 'react'
// import { useEffect } from "react";

const Follow = ({followers, followCount}) => {
  return (
    <div className="follow-container">
      <h3>Followers ({followCount})</h3>

      {followers.map((follower)=>{
        return (
          <div className="user-tablet">
            <img
              src={follower.profileImage}
              alt=""
            />
            <p>{follower.username}</p>
            {/* <button className="button primary-button">Follow</button> */}
          </div>
        );
      })}

      
    </div>
  );
}

export default Follow
