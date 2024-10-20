import { useParams } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import DetailGame from "../hooks/detailGame";
import AuthLayout from "../components/layouts/AuthLayout";
import Header from "../components/elements/Header";
import CardLayout from "../components/layouts/CardLayout";
import ToggleScrollX from "../components/fragments/ToggleScrollX";

const DetailGames = () => {
  const { id } = useParams();
  const dataDetail = DetailGame(id);

  console.log(dataDetail);

  return (
    <>
      <Navbar />
      <AuthLayout background="bg-dark" className="pt-32 pb-16">
        <div className="w-full px-5">
          <Header className="text-primary">Nama Game</Header>
        </div>
      </AuthLayout>
      <AuthLayout background="bg-dark" className="pt-10">
        <div className="w-full px-7 lg:px-14">
          <div className="relative w-full py-3.5 flex overflow-x-scroll gap-3 mb-2 scroll-smooth card-scroll-bar lg:gap-4">
            <div className="w-4/5 h-44 bg-sunset box-shadow border-4 border-lightSunset flex-shrink-0 mr-2 md:w-3/5 md:h-56 lg:w-1/2 lg:h-64"></div>
            <div className="w-4/5 h-44 bg-sunset box-shadow border-4 border-lightSunset flex-shrink-0 mr-2 md:w-3/5 md:h-56 lg:w-1/2 lg:h-64"></div>
            <div className="w-4/5 h-44 bg-sunset box-shadow border-4 border-lightSunset flex-shrink-0 mr-2 md:w-3/5 md:h-56 lg:w-1/2 lg:h-64"></div>
            <div className="w-4/5 h-44 bg-sunset box-shadow border-4 border-lightSunset flex-shrink-0 mr-2 md:w-3/5 md:h-56 lg:w-1/2 lg:h-64"></div>
          </div>
          <ToggleScrollX />
        </div>
      </AuthLayout>
    </>
  );
};

export default DetailGames;
