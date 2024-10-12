import heroBg from "./assets/Image/hero_image.jpg";
import aboutImg from "./assets/Image/about_image.png";
import Description from "./components/elements/Description";
import Header from "./components/elements/Header";
import Navbar from "./components/layouts/Navbar";
import AuthLayout from "./components/layouts/AuthLayout";
import { useEffect, useRef, useState } from "react";
import { getNewGameList } from "./services/newgamelist.service";
import GameCards from "./components/fragments/GameCard";

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
                <a className="block font-comic-neue font-semibold text-xl text-second px-6 py-1 bg-primary m-5 rounded-full group hover:opacity-70 transition duration-300 ease-in-out cursor-pointer md:px-7 md:text-xl xl:px-8 xl:py-1.5 xl:text-2xl">
                  Start!!{" "}
                  <span className="inline-block ml-0.5 rotate-[30deg] group-hover:-rotate-1 transition-all duration-300 ease-out">
                    🚀
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="pt-20 pb-14 bg-dark">
        <div className="container">
          <div className="flex flex-wrap w-full lg:flex-row-reverse lg:items-center">
            <div className="w-full px-5 lg:w-1/2 xl:w-[60%] xl:pr-10">
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
                className="w-full mx-auto object-cover drop-shadow md:w-3/4 lg:w-[90%] xl:w-full"
              />
            </div>
          </div>
        </div>
      </section> */}
      <AuthLayout background="bg-dark">
        <div className="flex flex-wrap w-full lg:flex-row-reverse lg:items-center">
          <div className="w-full px-5 lg:w-1/2 xl:w-[60%] xl:pr-10">
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
        <div className="w-full px-5 flex flex-wrap">
          <div className="w-full">
            <Header className="font-bebas-neue text-white text-4xl">
              Jelajahi Rilisan{" "}
              <span className="text-primary">Game Terupdate</span>
            </Header>
          </div>
          <div className="w-full py-3 flex flex-wrap">
            <div className="w-full">
              <img src={""} alt="" />
            </div>
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
            <div className="w-full px-1 flex justify-between">
              <button
                className="px-2 py-1 bg-sunset font-comic-neue font-bold text-base text-second border-2 border-lightSunset btn-shadow flex items-center"
                onClick={() => onScrollLeft()}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="25px"
                    viewBox="0 -960 960 960"
                    width="25px"
                    fill="#ffffff"
                  >
                    <path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" />
                  </svg>
                </span>
                Previous
              </button>
              <button
                className="px-5 py-1 bg-sunset font-comic-neue font-bold text-base text-second border-2 border-lightSunset btn-shadow flex items-center"
                onClick={() => onScrollRight()}
              >
                Next
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="25px"
                    viewBox="0 -960 960 960"
                    width="25px"
                    fill="#ffffff"
                  >
                    <path d="M401.67-480.67 208.67-674l46.66-46.67 240 240-240 240-46.66-46.66 193-193.34Zm256.66 0L465.33-674 512-720.67l240 240-240 240-46.67-46.66 193-193.34Z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}

export default App;
