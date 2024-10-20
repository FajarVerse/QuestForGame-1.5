import { useEffect, useState } from "react";
import { getGenreGameList } from "../services/genregamelist.service";

const GenreGame = (genre) => {
  const [genreGame, setGenreGame] = useState({});

  useEffect(() => {
    const GetData = async () => {
      const data = localStorage.getItem(`dataByGenre-${genre}`);

      if (data) {
        const dataGenreGame = JSON.parse(data);
        if (!data.expTime || Date.now() - dataGenreGame.expTime > 3600000) {
          localStorage.removeItem("dataByGenre");
        } else {
          setGenreGame(dataGenreGame.data);
        }
      } else {
        const dataGenreGame = await getGenreGameList(genre);
        setGenreGame(dataGenreGame);
      }
    };

    GetData();
  }, [genre]);

  return genreGame;
};

export default GenreGame;
