import { createContext, useState } from "react";

export const FollowContext = createContext();

export const FollowContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [follow, setFollow] = useState(null);
  const [followList, setFollowList] = useState(null);
  const [count, setCount] = useState('0');

  return (
    <FollowContext.Provider
      value={{ loading, setLoading, follow, setFollow, followList, setFollowList, count, setCount }}
    >
      {children}
    </FollowContext.Provider>
  );
};
