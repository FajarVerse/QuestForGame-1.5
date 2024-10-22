import { Link, useParams } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import DetailGame from "../hooks/detailGame";
import AuthLayout from "../components/layouts/AuthLayout";
import Header from "../components/elements/Header";
import CardLayout from "../components/layouts/CardLayout";
import ToggleScrollX from "../components/fragments/ToggleScrollX";
import Description from "../components/elements/Description";
import image from "../assets/Image/bg.jpg";
import Button from "../components/elements/Button";
import ScreenShootDetail from "../components/fragments/DetailGames/ScreenShotDetail";
import DescriptionDetail from "../components/fragments/DetailGames/DescriptionDetail";
import MoreDetail from "../components/fragments/DetailGames/MoreDetail";
import StoreDetail from "../components/fragments/DetailGames/StoreDetail";

const DetailGames = () => {
  const { id } = useParams();
  const dataDetail = DetailGame(id);
  console.log(dataDetail);

  return (
    <>
      <Navbar />
      <AuthLayout
        key={dataDetail.id}
        background="bg-dark"
        backgroundImage={dataDetail.background_image}
        className="pt-32 pb-16 relative backdrop-bg hero"
      >
        <div className="relative w-full px-5 z-20">
          <Header className="text-primary">{dataDetail.name}</Header>
        </div>
      </AuthLayout>
      <AuthLayout background="bg-dark" className="pt-0">
        <div className="w-full px-7 md:px-10 lg:px-14 xl:px-20">
          <ScreenShootDetail
            key={dataDetail.id}
            publisher={dataDetail.publishers}
          />
          <ToggleScrollX />
        </div>
        <div className="w-full px-7 my-3 md:px-10 lg:px-14 lg:my-5 xl:px-20">
          <DescriptionDetail
            key={dataDetail.id}
            tags={dataDetail.tags}
            description={dataDetail.description_raw}
          />
        </div>
        <div className="w-full px-7 mt-5 block md:px-10 lg:px-14 lg:flex lg:gap-6 xl:gap-8 xl:px-20">
          <MoreDetail
            key={dataDetail.id}
            rating={dataDetail.rating}
            count={
              dataDetail.added_by_status ? dataDetail.added_by_status.owned : 0
            }
            genres={dataDetail.genres}
            releaseDate={dataDetail.released}
          />
          <StoreDetail />
        </div>
      </AuthLayout>
    </>
  );
};

export default DetailGames;
