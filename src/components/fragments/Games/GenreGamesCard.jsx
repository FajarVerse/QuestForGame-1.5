import { useRef, useState } from "react";
import GenreGame from "../../../hooks/GenreGame";
import { NewGame } from "../../../hooks/newGame";
import SubHeader from "../../elements/SubHeader";
import CardLayout from "../../layouts/CardLayout";
import GameCards from "../GameCard";
import ToggleScrollX from "../ToggleScrollX";
import GenreOption from "./GenreOption";

const GenreGamesCard = () => {
  const dataNewGame = NewGame();
  const [genre, setGenre] = useState("");
  const genreGame = GenreGame(genre);
  const cardContentRef = useRef(null);

  return (
    <>
      <div className="w-full mb-10">
        <SubHeader className="text-white">
          By <span className="text-primary">Genre</span>
        </SubHeader>
        <hr />
        <GenreOption genreGames={setGenre} />
        <CardLayout cardContentRef={cardContentRef}>
          {genre === ""
            ? Array.isArray(dataNewGame) &&
              dataNewGame.length > 0 &&
              dataNewGame.map((game) => (
                <GameCards key={game.id}>
                  <GameCards.CardImage
                    image={game.background_image}
                    titleImage={game.name}
                  />
                  <GameCards.CardFill
                    title={game.name}
                    date={game.released}
                    rating={game.rating}
                  />
                </GameCards>
              ))
            : Array.isArray(genreGame) &&
              genreGame.length > 0 &&
              genreGame.map((game) => (
                <GameCards key={game.id}>
                  <GameCards.CardImage
                    image={game.background_image}
                    titleImage={game.name}
                  />
                  <GameCards.CardFill
                    title={game.name}
                    date={game.released}
                    rating={game.rating}
                  />
                </GameCards>
              ))}
        </CardLayout>
        <ToggleScrollX cardContent={cardContentRef} />
      </div>
    </>
  );
};

export default GenreGamesCard;
