import { useRef } from "react";
import { NewGame } from "../../../hooks/newGame";
import Header from "../../elements/Header";
import CardLayout from "../../layouts/CardLayout";
import GameCards from "../GameCard";
import ToggleScrollX from "../ToggleScrollX";
import SubHeader from "../../elements/SubHeader";

const NewGamesCard = () => {
  const dataNewGame = NewGame();
  const cardContentRef = useRef(null);

  return (
    <>
      <div className="w-full mb-10">
        <SubHeader className="text-white">
          New Games <span className="text-primary">Release</span>
        </SubHeader>
        <hr />
        <CardLayout cardContentRef={cardContentRef}>
          {dataNewGame.length > 0 &&
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
            ))}
        </CardLayout>
        <ToggleScrollX cardContent={cardContentRef} />
      </div>
    </>
  );
};

export default NewGamesCard;
