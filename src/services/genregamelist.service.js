import axios from "axios";

export const getGenreGameList = () => {
  axios
    .get("")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
