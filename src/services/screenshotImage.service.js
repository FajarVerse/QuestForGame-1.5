import axios from "axios";

export const getScreenshotImage = async (idGame) => {
  try {
    if (idGame !== "") {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("imageGame-")) {
          localStorage.removeItem(key);
        }
      });

      const response = await axios.get(
        `https://api.rawg.io/api/games/${idGame}/screenshots?key=69dce11161584a0ab6592137c5091871`
      );

      const data = response.data;
      const timeStamp = Date.now();
      localStorage.setItem(
        `imageGame-${idGame}`,
        JSON.stringify({ idGame, data, timeStamp })
      );
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};
