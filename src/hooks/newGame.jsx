import { useEffect, useState } from "react";
import { getNewGameList } from "../services/newgamelist.service";

export const NewGame = () => {
  // const dispatch = useNewGameDispatch();
  const [newGame, setNewGame] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = localStorage.getItem("dataNewGame");

  //     if (data) {
  //       const dataGame = JSON.parse(data);
  //       if (!dataGame.timeStamp || Date.now() - data.timeStamp > 3600000) {
  //         localStorage.removeItem("dataNewGame");
  //         return;
  //       } else {
  //         dispatch({
  //           type: "GETDATA",
  //           payload: {
  //             game: dataGame.data,
  //           },
  //         });
  //         return;
  //       }
  //     } else {
  //       const newGame = await getNewGameList();

  //       dispatch({
  //         type: "GETDATA",
  //         payload: {
  //           game: newGame.data,
  //         },
  //       });
  //       // console.log(newGame);
  //       setNewGameData(newGame);
  //       return;
  //     }
  //   };

  //   getData();
  // }, [dispatch]);

  useEffect(() => {
    const getData = async () => {
      const data = localStorage.getItem("dataNewGame");
      if (data) {
        const dataNewGame = JSON.parse(data);
        if (
          !dataNewGame.timeStamp ||
          Date.now - dataNewGame.timeStamp > 3600000
        ) {
          localStorage.removeItem("dataNewGame");
        } else {
          setNewGame(dataNewGame.data);
        }
      } else {
        const dataNewGame = await getNewGameList();
        setNewGame(dataNewGame);
      }
    };
    getData();
  }, []);

  return newGame;
};
