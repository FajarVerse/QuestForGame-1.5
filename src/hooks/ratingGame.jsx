import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import { getRatingGameList } from "../services/ratinggamelist.service";

export const RatingGame = () => {
  const [byRating, setByRating] = useState([]);

  useEffect(() => {
    const GetData = async () => {
      const data = localStorage.getItem("dataByRating");

      if (data) {
        const dataByRating = JSON.parse(data);

        if (
          dataByRating.timeStamp &&
          Date.now() - dataByRating.timeStamp < 3600000
        ) {
          setByRating(dataByRating.data.results);
          return;
        }
      } else {
        const dataByRating = await getRatingGameList();
        setByRating(dataByRating);
        return;
      }
    };

    GetData();
  }, []);

  return byRating;
};
