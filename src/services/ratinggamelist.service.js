import axios from "axios";

export const getRatingGameList = () => {
  axios
    .get()
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
