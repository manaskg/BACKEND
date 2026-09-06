import Post from "../components/Post.jsx";
import Follow from "../components/Follow.jsx";
import "../style/feed.scss";
import { usePost } from "../hook/usePost.js";
import { useFollow } from "../hook/useFollow.js";
import { useEffect } from "react";
import Nav from "../../shared/components/Nav.jsx";

const Feed = () => {
  const { feed, handleGetFeed, loading, handleLike, handleUnLike } = usePost();

  const {
    follow,
    followList,
    count,
    handleGetFollowers,
    followingList,
    followingCount,
    handleGetFollowings,
    suggestionsList,
    handleGetSuggestions,
  } = useFollow();

  useEffect(() => {
    handleGetFeed();
    handleGetFollowers();
    handleGetFollowings();
    handleGetSuggestions();
  }, []);

  if (loading || !feed) {
    return (
      <main>
        <h1>Feed is loading</h1>
      </main>
    );
  }

  // console.log(feed);
  // console.log(followList);
  // console.log('following list',followingList);
  console.log('suggestion List', suggestionsList)


  return (
    <main className="feed-page">
      <Nav />
      <section className="feed-container">
        <Follow
          followers={followList}
          followCount={count}
          followings={followingList}
          followingCount={followingCount}
          suggestionsList = {suggestionsList}
        />
        <div className="feed">
          <div className="posts">
            {feed.map((post) => {
              return (
                <Post
                  user={post.user}
                  post={post}
                  loading={loading}
                  handleLike={handleLike}
                  handleUnLike={handleUnLike}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Feed;
