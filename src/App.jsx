import heroBg from "./assets/Image/hero_image.jpg";
import aboutImg from "./assets/Image/about_image.png";
import Description from "./components/elements/Description";
import Header from "./components/elements/Header";
import Navbar from "./components/layouts/Navbar";
import AuthLayout from "./components/layouts/AuthLayout";
import { useEffect, useRef, useState } from "react";
import { getNewGameList } from "./services/newgamelist.service";
import GameCards from "./components/fragments/GameCard";
import Button from "./components/elements/Button";
import valo1 from "./assets/Image/valo_character/valo_char_1.png";
import valo2 from "./assets/Image/valo_character/valo_char_2.png";
import valo3 from "./assets/Image/valo_character/valo_char_5.png";

function App() {
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
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-40 relative pb-32 bg-dark min-h-screen bg-center bg-cover bg-no-repeat backdrop-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container max-w-full">
          <div className="relative z-20">
            <div className="w-full px-5 mx-auto">
              <div className="text-center">
                <Header className="font-comic-neue font-bold text-2xl text-primary xl:text-6xl">
                  Welcome To
                </Header>
                <h1 className="font-bebas-neue font-extrabold text-6xl text-second tracking-wider mb-2 md:text-8xl lg:text-9xl xl:text-[10rem]">
                  Quest<span className="text-primary">ForGame</span>
                </h1>
                <p className="font-comic-neue font-semibold text-sm text-description md:text-lg xl:text-xl">
                  Jelajahi dunia games, dan temukan game impian mu
                </p>
              </div>
              <div className="flex justify-center">
                <Button className="text-xl mt-5 gap-3 lg:text-2xl">
                  Start
                  <span>
                    <svg className="lg:w-7 lg:h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#ffffff"
                    >
                      <path d="M189-160q-60 0-102.5-43T42-307q0-9 1-18t3-18l84-336q14-54 57-87.5t98-33.5h390q55 0 98 33.5t57 87.5l84 336q2 9 3.5 18.5T919-306q0 61-43.5 103.5T771-160q-42 0-78-22t-54-60l-28-58q-5-10-15-15t-21-5H385q-11 0-21 5t-15 15l-28 58q-18 38-54 60t-78 22Zm3-80q19 0 34.5-10t23.5-27l28-57q15-31 44-48.5t63-17.5h190q34 0 63 18t45 48l28 57q8 17 23.5 27t34.5 10q28 0 48-18.5t21-46.5q0 1-2-19l-84-335q-7-27-28-44t-49-17H285q-28 0-49.5 17T208-659l-84 335q-2 6-2 18 0 28 20.5 47t49.5 19Zm348-280q17 0 28.5-11.5T580-560q0-17-11.5-28.5T540-600q-17 0-28.5 11.5T500-560q0 17 11.5 28.5T540-520Zm80-80q17 0 28.5-11.5T660-640q0-17-11.5-28.5T620-680q-17 0-28.5 11.5T580-640q0 17 11.5 28.5T620-600Zm0 160q17 0 28.5-11.5T660-480q0-17-11.5-28.5T620-520q-17 0-28.5 11.5T580-480q0 17 11.5 28.5T620-440Zm80-80q17 0 28.5-11.5T740-560q0-17-11.5-28.5T700-600q-17 0-28.5 11.5T660-560q0 17 11.5 28.5T700-520Zm-360 60q13 0 21.5-8.5T370-490v-40h40q13 0 21.5-8.5T440-560q0-13-8.5-21.5T410-590h-40v-40q0-13-8.5-21.5T340-660q-13 0-21.5 8.5T310-630v40h-40q-13 0-21.5 8.5T240-560q0 13 8.5 21.5T270-530h40v40q0 13 8.5 21.5T340-460Zm140-20Z" />
                    </svg>
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuthLayout background="bg-dark">
        <div className="w-full mx-auto flex flex-wrap  lg:items-center xl:px-10">
          <div className="w-full mx-auto px-5 md:px-10 lg:w-1/2 xl:w-[60%] xl:pr-10">
            <Header className="font-bebas-neue text-4xl text-second lg:text-left">
              Apa itu Quest<span className="text-primary">ForGame</span> ??
            </Header>
            <Description>
              <span className="font-bebas-neue font-semibold text-second tracking-wider">
                Quest<span className="text-primary">ForGame </span>
              </span>
              merupakan platfrom digital yang dibangun dengan berfokus kepada
              panduan dan informasi terkini tentang berbagai games terupdate.
              Website ini bertujuan untuk membantu para gamers menemukan game
              yang sesuai untuk mereka dengan menyediakan game dengan berbagai
              macam kategori, mulai dari genre populer, game indie, hingga
              judul-judul terpopuler.
            </Description>
            <Description>
              Kami mengambil semua data game yang ada melalui API yang
              disediakan oleh{" "}
              <a
                href="https://rawg.io/apidocs"
                className="font-semibold italic cursor-pointer"
              >
                RAWG
              </a>
              , sehingga dapat terjamin keamanannya.
            </Description>
            <Description>
              Singkatnya,{" "}
              <span className="font-bebas-neue font-semibold text-second tracking-wider">
                Quest<span className="text-primary">ForGame </span>
              </span>
              adalah tempat yang ideal bagi para gamer untuk menemukan dan
              menjelajahi dunia game secara mendalam.
            </Description>
          </div>
          <div className="w-full px-5 mt-3 lg:w-1/2 xl:w-2/5">
            <img
              src={aboutImg}
              alt="marvel-spiderman-2"
              className="w-full mx-auto object-cover drop-shadow-custom md:w-3/4 lg:w-[90%] xl:w-full"
            />
          </div>
        </div>
      </AuthLayout>

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
                className="w-1/2 relative mx-auto z-[99] md:w-1/3 lg:w-3/5 xl:w-[45%]"
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
                <a href="#">
                  <GameCards>
                    <h5 className="font-bebas-neue text-xl tracking-wider self-center">
                      More Game..
                    </h5>
                  </GameCards>
                </a>
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
    </>
  );
}

export default App;
