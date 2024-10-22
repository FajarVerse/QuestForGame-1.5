import { useRef } from "react";
import { RatingGame } from "../../../hooks/ratingGame";
import Header from "../../elements/Header";
import CardLayout from "../../layouts/CardLayout";
import GameCards from "../GameCard";
import ToggleScrollX from "../ToggleScrollX";
import SubHeader from "../../elements/SubHeader";

const RatingGamesCard = () => {
  const dataByRating = RatingGame();
  const cardContentRef = useRef(null);

  return (
    <>
      <div className="w-full mb-10">
        <SubHeader className="text-white">
          Best Rating <span className="text-primary">Games</span>
        </SubHeader>
        <hr />
        <CardLayout cardContentRef={cardContentRef}>
          {dataByRating.length > 0 &&
            dataByRating.map((game) => (
              <GameCards key={game.id} id={game.id}>
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
