import { createContext } from "react";
import { useState } from "react";

export const SongContext = createContext();

export const SongContextProvider = ({ children }) => {
  const [song, setSong] = useState({
    url: "https://ik.imagekit.io/hidemkg/cohort-2/moodify/songs/Phir_Bhi_Tumko_Chaahunga_r6YWkEUJ_.mp3",
    posterUrl:
      "https://ik.imagekit.io/hidemkg/cohort-2/moodify/posters/Phir_Bhi_Tumko_Chaahunga_begJGaIvG.jpeg",
    title: "Phir Bhi Tumko Chaahunga",
    mood: "sad",
  });

  const [loading, setLoading] = useState(false);

  return (
    <SongContext.Provider value={{ loading, setLoading, song, setSong }}>
      {children}
    </SongContext.Provider>
  );
};
