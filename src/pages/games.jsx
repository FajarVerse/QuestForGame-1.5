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
      <AuthLayout background={"bg-dark"} className={"pt-32"}>
        <div className="w-full px-5 py-5 lg:px-10 xl:px-14">
          <div className="w-full mb-20 md:px-14">
            <Header className="font-montserrat text-4xl text-white text-center md:text-4xl lg:text-6xl xl:text-7xl">
              Level Up Your{" "}
              <span className="text-primary">Gaming Experiences</span>
            </Header>
            <Description className="text-center  lg:text-xl xl:mt-7">
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
