import { useEffect, useState } from "react";
import { getMostPlayedGames } from "../services/mostplayedlist.service";

export const MostPlayedGame = () => {
  const [mostPlayed, setMostPlayed] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = localStorage.getItem("dataMostPlayed");

      if (data) {
        const dataMostPlayed = JSON.parse(data);
        if (
          dataMostPlayed.timeStamp &&
          Date.now() - dataMostPlayed.timeStamp < 3600000
        ) {
          setMostPlayed(dataMostPlayed.data.results);
          return;
        }
      } else {
        const dataMostPlayed = await getMostPlayedGames();
        setMostPlayed(dataMostPlayed.results);
        return;
      }
    };
    getData();
  }, []);

  return mostPlayed;
};
