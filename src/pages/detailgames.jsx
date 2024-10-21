import { Link, useParams } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import DetailGame from "../hooks/detailGame";
import AuthLayout from "../components/layouts/AuthLayout";
import Header from "../components/elements/Header";
import CardLayout from "../components/layouts/CardLayout";
import ToggleScrollX from "../components/fragments/ToggleScrollX";
import Description from "../components/elements/Description";

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
        <div className="w-full px-7 md:px-10 lg:px-14">
          <div className="relative w-full py-3.5 flex overflow-x-scroll gap-3 mb-2 scroll-smooth card-scroll-bar lg:gap-4">
            <div className="w-4/5 h-44 bg-sunset box-shadow border-4 border-lightSunset flex-shrink-0 mr-2 md:w-3/5 md:h-56 lg:w-1/2 lg:h-64"></div>
            <div className="w-4/5 h-44 bg-sunset box-shadow border-4 border-lightSunset flex-shrink-0 mr-2 md:w-3/5 md:h-56 lg:w-1/2 lg:h-64"></div>
            <div className="w-4/5 h-44 bg-sunset box-shadow border-4 border-lightSunset flex-shrink-0 mr-2 md:w-3/5 md:h-56 lg:w-1/2 lg:h-64"></div>
            <div className="w-4/5 h-44 bg-sunset box-shadow border-4 border-lightSunset flex-shrink-0 mr-2 md:w-3/5 md:h-56 lg:w-1/2 lg:h-64"></div>
          </div>
          <ToggleScrollX />
        </div>
        <div className="w-full px-7 my-7 md:px-10 lg:px-14">
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            excepturi! Porro consectetur nihil corrupti praesentium, sapiente
            quisquam possimus voluptatibus architecto excepturi sunt commodi
            quos delectus accusamus eveniet explicabo perferendis incidunt.
          </Description>
        </div>
        <div className="w-full px-7 mt-5 block md:px-10 lg:px-14 lg:flex lg:gap-6 xl:gap-8">
          <div className="w-full px-3 py-2 flex justify-around bg-sunset box-shadow border-[3px] border-lightSunset mb-5 md:px-14 md:py-3 lg:w-1/2 lg:px-8">
            {/* Rating */}
            <Link className="icon-detail">
              <span>
                <svg
                  className="md:w-8 md:h-8 xl:w-9 xl:h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#ffffff"
                >
                  <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                </svg>
              </span>
              4.7
            </Link>

            {/* Count Donwload */}
            <Link className="icon-detail">
              <span>
                <svg
                  className="md:w-8 md:h-8 xl:w-9 xl:h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#ffffff"
                >
                  <path d="M160-80v-80h640v80H160Zm320-160L200-600h160v-280h240v280h160L480-240Zm0-130 116-150h-76v-280h-80v280h-76l116 150Zm0-150Z" />
                </svg>
              </span>
              236
            </Link>

            {/* Game Genre */}
            <Link className="icon-detail">
              <span>
                <svg
                  className="md:w-8 md:h-8 xl:w-9 xl:h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#ffffff"
                >
                  <path d="M160-240q-33 0-56.5-23.5T80-320v-320q0-33 23.5-56.5T160-720h640q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H160Zm0-80h640v-320H160v320Zm120-40h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Zm300 0q25 0 42.5-17.5T640-420q0-25-17.5-42.5T580-480q-25 0-42.5 17.5T520-420q0 25 17.5 42.5T580-360Zm120-120q25 0 42.5-17.5T760-540q0-25-17.5-42.5T700-600q-25 0-42.5 17.5T640-540q0 25 17.5 42.5T700-480ZM160-320v-320 320Z" />
                </svg>
              </span>
              Action
            </Link>

            {/* Date Realease */}
            <Link className="icon-detail">
              <span>
                <svg
                  className="md:w-8 md:h-8 xl:w-9 xl:h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#ffffff"
                >
                  <path d="M320-400q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm160 0q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm160 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
                </svg>
              </span>
              10-10-2002
            </Link>
          </div>
          <div className="w-full px-5 py-3 bg-sunset box-shadow border-[3px] border-lightSunset mb-5 md:px-14 lg:w-1/2 lg:px-10"></div>
        </div>
      </AuthLayout>
    </>
  );
};

export default DetailGames;
