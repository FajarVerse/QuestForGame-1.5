import { useRef } from "react";
import { RatingGame } from "../../../hooks/ratingGame";
import Header from "../../elements/Header";
import CardLayout from "../../layouts/CardLayout";
import GameCards from "../GameCard";
import ToggleScrollX from "../ToggleScrollX";

const RatingGamesCard = () => {
  const dataByRating = RatingGame();
  const cardContentRef = useRef(null);

  return (
    <>
      <div className="w-full mb-10">
        <Header className="font-bebas-neue text-2xl text-white tracking-wider">
          Best Rating <span className="text-primary">Games</span>
        </Header>
        <hr />
        <CardLayout cardContentRef={cardContentRef}>
          {dataByRating.length > 0 &&
            dataByRating.map((game) => (
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

export default RatingGamesCard;
