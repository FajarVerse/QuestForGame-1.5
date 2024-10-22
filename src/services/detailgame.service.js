import axios from "axios";

export const getDetailGame = async (idGame) => {
  try {
    if (idGame !== "") {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("dataGameId-")) {
          localStorage.removeItem(key);
        }
      });

      const response = await axios.get(
        `https://api.rawg.io/api/games/${idGame}?key=69dce11161584a0ab6592137c5091871`
      );

      const data = response.data;
      const timeStamp = Date.now();
      localStorage.setItem(
        `dataGameId-${idGame}`,
        JSON.stringify({ idGame, data, timeStamp })
      );
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
