import FaceExpression from "../../Expression/components/FaceExpression.jsx";
import Player from "../components/Player.jsx";
import { useSong } from "../hooks/useSong.js";

const Home = () => {
  const { handleGetSong } = useSong();
  return (
    <main>
      <FaceExpression
        onClick={(expression) => {
          handleGetSong({ mood: expression });
        }}
      />
      <Player />
    </main>
  );
};

export default Home;
