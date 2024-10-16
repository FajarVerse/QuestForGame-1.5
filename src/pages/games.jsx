import Description from "../components/elements/Description";
import Header from "../components/elements/Header";
import GameCards from "../components/fragments/GameCard";
import ToggleScrollX from "../components/fragments/ToggleScrollX";
import AuthLayout from "../components/layouts/AuthLayout";
import CardLayout from "../components/layouts/CardLayout";
import Navbar from "../components/layouts/Navbar";

const Games = () => {
  return (
    <>
      <Navbar />
      <AuthLayout background={"bg-dark"}>
        <div className="w-full px-5 py-5">
          <div className="w-full mb-10">
            <Header className="font-bebas-neue text-5xl text-white text-center tracking-wider">
              Games
            </Header>
            <Description className="text-center">
              Temukan game yang kamu cari disini!!
            </Description>
          </div>
          <div className="w-full mb-5">
            <Header className="font-bebas-neue text-2xl text-white ">
              Rilis Game Baru
            </Header>
            <hr />
            <CardLayout>
              <GameCards>
                <GameCards.CardFill>Game terbaru</GameCards.CardFill>
              </GameCards>
            </CardLayout>
            <ToggleScrollX />
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default Games;
