import { useEffect, useState } from "react";
import { getRatingGameList } from "../services/ratinggamelist.service";

export const RatingGame = () => {
  const [byRating, setByRating] = useState([]);

  useEffect(() => {
    const GetData = async () => {
      const data = localStorage.getItem("dataByRating");

      if (data) {
        const dataByRating = JSON.parse(data);
        if (
          !dataByRating.timeStamp ||
          Date.now() - dataByRating.timeStamp > 3600000
        ) {
          localStorage.removeItem("dataByRating");
        } else {
          setByRating(dataByRating.data);
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
