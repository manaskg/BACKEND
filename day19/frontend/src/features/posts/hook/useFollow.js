import { getfollowers } from "../services/follow.api";
import { useContext, useEffect } from "react";
import { FollowContext } from "../follow.context.jsx";

export const useFollow = () => {
  const context = useContext(FollowContext);
  const { loading, setLoading, follow, setFollow, followList, setFollowList, count, setCount } =
    context;

  const handleGetFollowers = async () => {
    setLoading(true);
    const data = await getfollowers();

    setFollowList(data.followers);
    setCount(data.count);
    setLoading(false);
  };

  useEffect(() => {
    handleGetFollowers();
  }, []);

  return { loading, follow, followList, count, handleGetFollowers };
};
