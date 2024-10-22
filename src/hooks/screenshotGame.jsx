import { useEffect, useState } from "react";
import { getScreenshotImage } from "../services/screenshotImage.service";

const ScreenshotGame = (idGame) => {
  const [imageGame, setImageGame] = useState({});

  console.log(idGame);
  useEffect(() => {
    const getData = async () => {
      const data = localStorage.getItem(`imageGame-${idGame}`);

      if (data) {
        const imageData = JSON.parse(data);
        if (
          !imageData.timeStamp &&
          Date.now() - imageData.timeStamp > 3600000
        ) {
          localStorage.removeItem(`imageGame-${idGame}`);
          return;
        } else {
          setImageGame(imageData.data);
          return;
        }
      } else {
        const imageData = await getScreenshotImage(idGame);
        setImageGame(imageData);
      }
    };

    getData();
  }, [idGame]);

  return imageGame;
};

export default ScreenshotGame;
