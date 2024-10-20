import { useEffect, useState } from "react";
import { getDetailGame } from "../services/detailgame.service";

const DetailGame = (idGame) => {
  const [dataByGenre, setDataByGenre] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = localStorage.getItem(`dataGameId-${idGame}`);

      if (data) {
        const dataDetailGame = JSON.parse(data);

        if (!dataDetailGame && Date.now() - data.timeStamp > 3600000) {
          localStorage.removeItem(`dataGameId-${idGame}`);
        } else {
          setDataByGenre(dataDetailGame);
        }
      } else {
        const dataDetailGame = await getDetailGame(idGame);
        setDataByGenre(dataDetailGame);
      }
    };
    getData();
  }, [idGame]);
  return dataByGenre;
};

export default DetailGame;
