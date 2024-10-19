import { useRef, useState } from "react";
import GenreGame from "../../../hooks/GenreGame";
import { NewGame } from "../../../hooks/newGame";
import Header from "../../elements/Header";
import CardLayout from "../../layouts/CardLayout";
import GameCards from "../GameCard";
import ToggleScrollX from "../ToggleScrollX";
import GenreOption from "./GenreOption";

const GenreGamesCard = () => {
  const dataNewGame = NewGame();
  const [genre, setGenre] = useState("");
  const genreGame = GenreGame(genre);
  const cardContentRef = useRef(null)

  return (
    <>
      <div className="w-full mb-10">
        <Header className="font-bebas-neue text-2xl text-white tracking-wider">
          By <span className="text-primary">Genre</span>
        </Header>
        <hr />
        <GenreOption genreGames={setGenre} />
        <CardLayout cardContentRef={cardContentRef}>
          {genre === ""
            ? dataNewGame.map((game) => (
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
        <ToggleScrollX cardContent={cardContentRef}/>
      </div>
    </>
  );
};

export default GenreGamesCard;
