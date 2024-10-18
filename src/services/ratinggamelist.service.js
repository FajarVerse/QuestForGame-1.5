import axios from "axios";
import { json } from "react-router-dom";

export const getRatingGameList = async () => {
  try {
    const response = await axios.get(
      "https://api.rawg.io/api/games?ordering=-rating&page_size=50&key=69dce11161584a0ab6592137c5091871"
    );

    const data = response.data;
    const timeStamp = Date.now();
    localStorage.setItem("dataByRating", JSON.stringify({ data, timeStamp }));
    return data;
  } catch (error) {
    console.log(error);
  }
};
