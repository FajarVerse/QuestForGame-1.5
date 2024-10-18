import { useEffect } from "react";
import { useNewGame, useNewGameDispatch } from "../context/NewGameContext";
import { getNewGameList } from "../services/newgamelist.service";

export const NewGame = () => {
  const dispatch = useNewGameDispatch();
  const {game} = useNewGame();

  useEffect(() => {
    const getData = async () => {
      const data = localStorage.getItem("dataNewGame");

      if (data) {
        const dataGame = JSON.parse(data);
        if (!dataGame.timeStamp || Date.now() - data.timeStamp > 3600000) {
          localStorage.removeItem("dataNewGame");
          return;
        } else {
          dispatch({
            type: "GETDATA",
            payload: {
              game: dataGame.data,
            },
          });
          return;
        }
      } else {
        const newGame = await getNewGameList();

        dispatch({
          type: "GETDATA",
          payload: {
            game: newGame.data,
          },
        });
        return;
      }
    };

    getData();
  }, [dispatch]);

  return game;
};
