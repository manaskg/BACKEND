import { getfollowers, getfollowings, getSuggestions,followUser } from "../services/follow.api";
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
    suggestionsList,
    setSuggestionsList,
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
  
  
  const handleGetSuggestions = async () => {
    setLoading(true);
    const data = await getSuggestions();

    setSuggestionsList(data.suggestions);
    setLoading(false);
  };

    useEffect(() => {
      handleGetFollowers();
      handleGetFollowings();
      handleGetSuggestions();
    }, []);


    const handleFollowUser = async(user) => {
      const data = await followUser(user);
      await handleGetFollowings();
      await handleGetSuggestions();
      await handleGetFollowers();
    }


  return {
    loading,
    follow,
    followList,
    count,
    handleGetFollowers,
    followingList,
    followingCount,
    handleGetFollowings,
    suggestionsList,
    handleGetSuggestions,
    handleFollowUser
  };
};
