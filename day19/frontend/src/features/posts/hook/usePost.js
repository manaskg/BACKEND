import {
  createPost,
  getFeed,
  likePost,
  unLikePost,
} from "../services/post.api.js";
import { useContext, useEffect } from "react";
import { PostContext } from "../post.context.jsx";

export const usePost = () => {
  const context = useContext(PostContext);
  const { loading, setLoading, post, setPost, feed, setFeed } = context;

  const handleGetFeed = async () => {
    setLoading(true);
    const data = await getFeed();

    //here we can also sort

    // we took the data from api layer and then making reverse to show in forntend

    setFeed(data.posts.reverse());
    setLoading(false);
  };

  useEffect(() => {
    handleGetFeed();
  }, []);

  const handleCreatePost = async (imageFile, caption) => {
    setLoading(true);
    const data = await createPost(imageFile, caption);
    setFeed([data.post, ...feed]);
    setLoading(false);
  };

  const handleLike = async (post) => {

    const data = await likePost(post);
    await handleGetFeed()

  };

  const handleUnLike = async (post) => {

    const data = await unLikePost(post);
    await handleGetFeed();
 
  };






  return { loading, feed, post, handleGetFeed, handleCreatePost , handleLike, handleUnLike};
};
