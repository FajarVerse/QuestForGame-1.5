import Description from "../../elements/Description";
import Header from "../../elements/Header";
import AuthLayout from "../../layouts/AuthLayout";
import Navbar from "../../layouts/Navbar";
import GenreGamesCard from "./GenreGamesCard";
import NewGamesCard from "./NewGamesCard";
import PlayedGamesCard from "./PlayedGamesCard";
import RatingGamesCard from "./RatingGamesCard";

const GamesFragment = () => {
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
              Find the game you are looking for here!!
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

export default GamesFragment;
