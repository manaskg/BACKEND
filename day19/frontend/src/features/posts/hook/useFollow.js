import { getfollowers, getfollowings } from "../services/follow.api";
import { useContext, useEffect } from "react";
import { FollowContext } from "../follow.context.jsx";

export const useFollow = () => {
  const context = useContext(FollowContext);
  const {
    loading,
    setLoading,
    follow,
    setFollow,
    followList,
    setFollowList,
    count,
    setCount,
    followingList,
    setFollowingList,
    followingCount,
    setFollowingCount,
  } = context;

  const handleGetFollowers = async () => {
    setLoading(true);
    const data = await getfollowers();

    setFollowList(data.followers);
    setCount(data.count);
    setLoading(false);
  };



  const handleGetFollowings = async () => {
    setLoading(true);
    const data = await getfollowings();

    setFollowingList(data.followings);
    setFollowingCount(data.count);
    setLoading(false);
  }; 

    useEffect(() => {
      handleGetFollowers();
      handleGetFollowings();
    }, []);


  return {
    loading,
    follow,
    followList,
    count,
    handleGetFollowers,
    followingList,
    followingCount,
    handleGetFollowings,
  };
};
