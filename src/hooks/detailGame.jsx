import { useEffect, useState } from "react";
import { getDetailGame } from "../services/detailgame.service";

const DetailGame = (idGame) => {
  const [dataDetail, setDataDetail] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = localStorage.getItem(`dataGameId-${idGame}`);

      if (data) {
        const dataDetailGame = JSON.parse(data);
        if (
          !dataDetailGame.timeStamp &&
          Date.now() - dataDetailGame.timeStamp > 3600000
        ) {
          localStorage.removeItem(`dataGameId-${idGame}`);
        } else {
          setDataDetail(dataDetailGame.data);
        }
      } else {
        const dataDetailGame = await getDetailGame(idGame);
        setDataDetail(dataDetailGame);
      }
    };
    getData();
  }, [idGame]);
  return dataDetail;
};

export default DetailGame;
