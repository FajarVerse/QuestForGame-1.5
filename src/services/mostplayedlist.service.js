import axios from "axios";

export const getMostPlayedGames = () => {
  axios
    .get(``)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
