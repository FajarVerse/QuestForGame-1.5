import { Fragment, useEffect, useRef, useState } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import Header from "../../elements/Header";
import { getNewGameList } from "../../../services/newgamelist.service";
import Description from "../../elements/Description";
import GameCards from "../GameCard";
import Button from "../../elements/Button";
import valo1 from "../../../assets/Image/valo_character/valo_char_1.png";
import valo2 from "../../../assets/Image/valo_character/valo_char_2.png";
import valo3 from "../../../assets/Image/valo_character/valo_char_5.png";
import { Link } from "react-router-dom";

const SummarySection = () => {
  const [newGameList, setNewGameList] = useState([]);
  const newGame = newGameList.slice(1, 11);

  useEffect(() => {
    getNewGameList((data) => {
      setNewGameList(data.results);
    });
  }, []);

  const cardContentRef = useRef(null);

  const onScrollLeft = () => {
    if (cardContentRef.current) {
      cardContentRef.current.scrollBy(-350, 0);
    }
  };

  const onScrollRight = () => {
    if (cardContentRef.current) {
      cardContentRef.current.scrollBy(350, 0);
    }
  };

  return (
    <Fragment>
      <AuthLayout background="bg-dark">
        <div className="w-full mx-auto px-5 flex flex-wrap md:px-10 xl:px-14">
          <div className="w-full">
            <Header className="font-bebas-neue text-white text-4xl">
              Jelajahi Rilisan{" "}
              <span className="text-primary">Game Terupdate</span>
            </Header>
          </div>
          <div className="w-full py-3 block lg:flex lg:items-center">
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
              <div
                className="w-full py-5 flex overflow-hidden gap-5 mb-2 scroll-smooth"
                ref={cardContentRef}
              >
                {newGame.length > 0 &&
                  newGame.map((game) => (
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
                <Link to={"/games"}>
                  <GameCards>
                    <h5 className="font-bebas-neue text-xl tracking-wider self-center">
                      More Game..
                    </h5>
                  </GameCards>
                </Link>
              </div>
              <div className="w-full px-1 flex justify-between lg:px-3">
                <Button onClick={() => onScrollLeft()}>
                  <span>
                    <svg
                      className="lg:w-8 lg:h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      height="25px"
                      viewBox="0 -960 960 960"
                      width="25px"
                      fill="#ffffff"
                    >
                      <path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" />
                    </svg>
                  </span>
                  Previos
                </Button>
                <Button onClick={() => onScrollRight()}>
                  Next
                  <span>
                    <svg
                      className="lg:w-8 lg:h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      height="25px"
                      viewBox="0 -960 960 960"
                      width="25px"
                      fill="#ffffff"
                    >
                      <path d="M401.67-480.67 208.67-674l46.66-46.67 240 240-240 240-46.66-46.66 193-193.34Zm256.66 0L465.33-674 512-720.67l240 240-240 240-46.67-46.66 193-193.34Z" />
                    </svg>
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AuthLayout>
    </Fragment>
  );
};
export default SummarySection;
