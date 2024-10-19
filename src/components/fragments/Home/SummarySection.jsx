import { Fragment, useRef } from "react";
import Header from "../../elements/Header";
import AuthLayout from "../../layouts/AuthLayout";
// import { getNewGameList } from "../../../services/newgamelist.service";
import valo1 from "../../../assets/Image/valo_character/valo_char_1.png";
import valo2 from "../../../assets/Image/valo_character/valo_char_2.png";
import valo3 from "../../../assets/Image/valo_character/valo_char_5.png";
import { NewGame } from "../../../hooks/newGame";
import Description from "../../elements/Description";
import CardLayout from "../../layouts/CardLayout";
import GameCards from "../GameCard";
import ToggleScrollX from "../ToggleScrollX";
import SubHeader from "../../elements/SubHeader";

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
          <div className="w-full py-3 block lg:flex lg:items-center lg:gap-5">
            <div className="w-full py-3 mb-3 relative lg:w-[45%]">
              <img
                src={valo3}
                alt=""
                className="w-1/2 relative mx-auto z-50 md:w-1/3 lg:w-3/5 xl:w-[45%]"
              />
              <img
                src={valo2}
                alt=""
                className="w-1/2 absolute top-1/2 left-40 -translate-y-1/2 z-40 md:w-1/3 lg:w-3/5 lg:left-44 xl:left-64 xl:w-[45%]"
              />
              <img
                src={valo1}
                alt=""
                className="w-1/2 absolute top-1/2 right-40 -translate-y-1/2 z-40 md:w-1/3 lg:w-3/5 lg:right-44 xl:right-60 xl:w-[45%]"
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
                <GameCards link={"games"}>
                  <h5 className="font-montserrat font-bold text-base text-second self-center">
                    More Game..
                  </h5>
                </GameCards>
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
