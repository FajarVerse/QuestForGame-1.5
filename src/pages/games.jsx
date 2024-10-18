import Description from "../components/elements/Description";
import Header from "../components/elements/Header";
import GenreGamesCard from "../components/fragments/Games/GenreGamesCard";
import NewGamesCard from "../components/fragments/Games/NewGamesCard";
import PlayedGamesCard from "../components/fragments/Games/PlayedGamesCard";
import RatingGamesCard from "../components/fragments/Games/RatingGamesCard";
import AuthLayout from "../components/layouts/AuthLayout";
import Navbar from "../components/layouts/Navbar";

const Games = () => {
  return (
    <>
      <Navbar />
      <AuthLayout background={"bg-dark"}>
        <div className="w-full px-5 py-5 lg:px-10 xl:px-14">
          <div className="w-full mb-10">
            <Header className="font-bebas-neue text-5xl text-white text-center tracking-wider lg:text-7xl xl:text-9xl">
              Games
            </Header>
            <Description className="text-center lg:text-xl">
              Temukan game yang kamu cari disini!!
            </Description>
          </div>
          <div>
            <NewGamesCard />
            <PlayedGamesCard />
            <RatingGamesCard />
            <GenreGamesCard />
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default Games;
