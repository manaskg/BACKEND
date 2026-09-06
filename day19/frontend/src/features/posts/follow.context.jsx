import { createContext, useState } from "react";

export const FollowContext = createContext();

export const FollowContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [follow, setFollow] = useState(null);
  const [followList, setFollowList] = useState(null);
  const [count, setCount] = useState("0");
  const [followingList, setFollowingList] = useState(null);
  const [followingCount, setFollowingCount] = useState("0");
  const [suggestionsList, setSuggestionsList] = useState(null);

  return (
    <FollowContext.Provider
      value={{
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
      }}
    >
      {children}
    </FollowContext.Provider>
  );
};
