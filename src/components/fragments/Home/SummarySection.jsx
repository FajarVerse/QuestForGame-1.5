import { Fragment, useRef } from "react";
import consoleImage from "../../../assets/Image/console_game.png";
import { NewGame } from "../../../hooks/newGame";
import Description from "../../elements/Description";
import SubHeader from "../../elements/SubHeader";
import AuthLayout from "../../layouts/AuthLayout";
import CardLayout from "../../layouts/CardLayout";
import GameCards from "../GameCard";
import ToggleScrollX from "../ToggleScrollX";

const SummarySection = () => {
  const dataNewGame = NewGame();
  const dataGame = dataNewGame.slice(0, 10);
  const cardContentRef = useRef(null);

  return (
    <Fragment>
      <AuthLayout background="bg-dark">
        <div className="w-full mx-auto px-5 flex flex-wrap md:px-10 xl:px-14">
          <div className="w-full">
            <SubHeader className="text-white text-center ">
              Jelajahi Rilisan{" "}
              <span className="text-primary">Game Terupdate</span>
            </SubHeader>
          </div>
          <div className="w-full py-3 block lg:flex lg:items-center lg:gap-5 xl:gap-10">
            <div className="w-full py-3 relative">
              <img
                src={consoleImage}
                alt="console_game"
                className="w-4/5 mx-auto md:w-3/5 lg:w-5/6 xl:w-[90%]"
              />
            </div>
            <div className="w-full lg:w-[55%]">
              <Description className="text-center lg:text-left">
                Temukan game-game terupdate yang sedang hype di dunia gaming!
                Lengkap dengan rating dan tanggal rilisnya.
              </Description>
              <CardLayout cardContentRef={cardContentRef}>
                {dataGame.length > 0 &&
                  dataGame.map((game) => (
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
          </div>
        </div>
      </AuthLayout>
    </Fragment>
  );
};
export default SummarySection;
