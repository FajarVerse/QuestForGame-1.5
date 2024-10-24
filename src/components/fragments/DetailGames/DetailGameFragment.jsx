import { useRef } from "react";
import { useParams } from "react-router-dom";
import DetailGame from "../../../hooks/detailGame";
import ScreenshotGame from "../../../hooks/screenshotGame";
import Button from "../../elements/Button";
import Header from "../../elements/Header";
import AuthLayout from "../../layouts/AuthLayout";
import Navbar from "../../layouts/Navbar";
import ToggleScrollX from "../ToggleScrollX";
import DescriptionDetail from "./DescriptionDetail";
import MoreDetail from "./MoreDetail";
import ScreenShootDetail from "./ScreenShotDetail";
import StoreDetail from "./StoreDetail";

const DetailGameFragment = () => {
  const { id } = useParams();
  const dataDetail = DetailGame(id);
  const imageGame = ScreenshotGame(id);
  const ImageContentRef = useRef(null);

  return (
    <>
      <Navbar />

      <AuthLayout
        key={dataDetail.id}
        background="bg-dark"
        backgroundImage={dataDetail.background_image}
        className="pt-32 pb-16 relative backdrop-bg hero lg:pb-32"
      >
        <div className="relative w-full px-5 z-20">
          <Header className="text-second text-center">{dataDetail.name}</Header>
        </div>
      </AuthLayout>
      <AuthLayout background="bg-dark" className="pt-0">
        <div className="w-full px-7 md:px-10 lg:px-14 xl:px-20">
          <ScreenShootDetail
            key={dataDetail.id}
            publisher={dataDetail.publishers}
            image={imageGame.results}
            imageContentRef={ImageContentRef}
          />
          <ToggleScrollX cardContent={ImageContentRef} />
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
        <div className="w-full px-7 mt-5 block">
          <Button
            className="py-1 mx-auto mt-7 text-lg lg:py-2 lg:px-3 lg:text-[1.55rem]"
            link={"/games"}
          >
            Back
            <span>
              <svg
                className="lg:w-7 lg:h-7"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ffffff"
              >
                <path d="M120-120v-80h80v-560q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v560h80v80H120Zm160-80h400v-560H280v560Zm120-240q17 0 28.5-11.5T440-480q0-17-11.5-28.5T400-520q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440ZM280-760v560-560Z" />
              </svg>
            </span>
          </Button>
        </div>
      </AuthLayout>
    </>
  );
};

export default DetailGameFragment;
