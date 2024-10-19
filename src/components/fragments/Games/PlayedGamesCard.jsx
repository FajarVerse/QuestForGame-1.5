import { useRef } from "react";
import { MostPlayedGame } from "../../../hooks/mostPlayedGame";
import Header from "../../elements/Header";
import CardLayout from "../../layouts/CardLayout";
import GameCards from "../GameCard";
import ToggleScrollX from "../ToggleScrollX";

const PlayedGamesCard = () => {
  const dataMostPlayed = MostPlayedGame();
  const cardContentRef = useRef(null);

  return (
    <>
      <div className="w-full mb-10">
        <Header className="font-bebas-neue text-2xl text-white tracking-wider">
          Most <span className="text-primary">Played</span>
        </Header>
        <hr />
        <CardLayout cardContentRef={cardContentRef}>
          {dataMostPlayed.length > 0 &&
            dataMostPlayed.map((game) => (
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

export default PlayedGamesCard;
