import { useEffect } from "react";
import { useNewGame, useNewGameDispatch } from "../context/NewGameContext";
import { getNewGameList } from "../services/newgamelist.service";

export const NewGame = () => {
  const dispatch = useNewGameDispatch();
  const newDataGame = useNewGame();

  useEffect(() => {
    const getData = async () => {
      const data = localStorage.getItem("dataGame");

      if (data) {
        const dataGame = JSON.parse(data);
        if (dataGame.timeStamp && Date.now() - dataGame.timeStamp < 3600000) {
          dispatch({
            type: "GETDATA",
            payload: {
              game: dataGame.data.results,
            },
          });
        }
      } else {
        const newGame = await getNewGameList();

        dispatch({
          type: "GETDATA",
          payload: {
            game: newGame.results,
          },
        });
      }
    };

    getData();
  }, [dispatch]);

  return newDataGame;
};
