import axios from "axios";

export const getGenreGameList = async (genre) => {
  try {
    if (genre !== "") {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("dataByGenre-")) {
          localStorage.removeItem(key);
        }
      });

      const response = await axios.get(
        `https://api.rawg.io/api/games?genres=${genre}&key=69dce11161584a0ab6592137c5091871`
      );

      const data = response.data.results;
      const expTime = Date.now();
      localStorage.setItem(
        `dataByGenre-${genre}`,
        JSON.stringify({ genre, data, expTime })
      );
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
