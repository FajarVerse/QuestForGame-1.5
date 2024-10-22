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
          <div className="relative w-full py-3.5 flex overflow-x-scroll gap-3 mb-2 scroll-smooth card-scroll-bar lg:gap-4 xl:gap-5">
            <div className="w-4/5 h-44 bg-sunset box-shadow border-4 border-lightSunset flex-shrink-0 overflow-hidden mr-2 md:w-3/5 md:h-56 lg:w-1/2 lg:h-64 xl:h-72">
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-4/5 h-44 bg-sunset box-shadow border-4 border-lightSunset flex-shrink-0 overflow-hidden mr-2 md:w-3/5 md:h-56 lg:w-1/2 lg:h-64 xl:h-72">
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-4/5 h-44 bg-sunset box-shadow border-4 border-lightSunset flex-shrink-0 overflow-hidden mr-2 md:w-3/5 md:h-56 lg:w-1/2 lg:h-64 xl:h-72">
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-4/5 h-44 bg-sunset box-shadow border-4 border-lightSunset flex-shrink-0 overflow-hidden mr-2 md:w-3/5 md:h-56 lg:w-1/2 lg:h-64 xl:h-72">
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <ToggleScrollX />
        </div>
        <div className="w-full px-7 my-3 md:px-10 lg:px-14 lg:my-5">
          <div className="w-full py-3 mb-2 flex gap-3">
            <Button>
              Dev:
            </Button>
            <Button>
              MultiPlayer
            </Button>
          </div>
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            excepturi! Porro consectetur nihil corrupti praesentium, sapiente
            quisquam possimus voluptatibus architecto excepturi sunt commodi
            quos delectus accusamus eveniet explicabo perferendis incidunt.
          </Description>
        </div>
        <div className="w-full px-7 mt-5 block md:px-10 lg:px-14 lg:flex lg:gap-6 xl:gap-8">
          <div className="detail-icon-layout">
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
          <div className="detail-icon-layout md:w-4/5 md:mx-auto lg:w-1/2">
            <Link className="fill-white hover:fill-[#000000] transition duration-300 ease-in-out">
              <svg
                className="md:w-11 md:h-11 lg:w-10 lg:h-10 xl:w-11 xl:h-11"
                width={32}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Steam</title>
                <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" />
              </svg>
            </Link>
            <Link className="fill-white hover:fill-[#0070D1] transition duration-300 ease-in-out">
              <svg
                className="md:w-11 md:h-11 lg:w-10 lg:h-10 xl:w-11 xl:h-11"
                width={33}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>PlayStation</title>
                <path d="M8.984 2.596v17.547l3.915 1.261V6.688c0-.69.304-1.151.794-.991.636.18.76.814.76 1.505v5.875c2.441 1.193 4.362-.002 4.362-3.152 0-3.237-1.126-4.675-4.438-5.827-1.307-.448-3.728-1.186-5.39-1.502zm4.656 16.241l6.296-2.275c.715-.258.826-.625.246-.818-.586-.192-1.637-.139-2.357.123l-4.205 1.5V14.98l.24-.085s1.201-.42 2.913-.615c1.696-.18 3.785.03 5.437.661 1.848.601 2.04 1.472 1.576 2.072-.465.6-1.622 1.036-1.622 1.036l-8.544 3.107V18.86zM1.807 18.6c-1.9-.545-2.214-1.668-1.352-2.32.801-.586 2.16-1.052 2.16-1.052l5.615-2.013v2.313L4.205 17c-.705.271-.825.632-.239.826.586.195 1.637.15 2.343-.12L8.247 17v2.074c-.12.03-.256.044-.39.073-1.939.331-3.996.196-6.038-.479z" />
              </svg>
            </Link>
            <Link className="fill-white hover:fill-[#313131] transition duration-300 ease-in-out">
              <svg
                className="md:w-11 md:h-11 lg:w-10 lg:h-10 xl:w-11 xl:h-11"
                width={32}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Epic Games</title>
                <path d="M3.537 0C2.165 0 1.66.506 1.66 1.879V18.44a4.262 4.262 0 00.02.433c.031.3.037.59.316.92.027.033.311.245.311.245.153.075.258.13.43.2l8.335 3.491c.433.199.614.276.928.27h.002c.314.006.495-.071.928-.27l8.335-3.492c.172-.07.277-.124.43-.2 0 0 .284-.211.311-.243.28-.33.285-.621.316-.92a4.261 4.261 0 00.02-.434V1.879c0-1.373-.506-1.88-1.878-1.88zm13.366 3.11h.68c1.138 0 1.688.553 1.688 1.696v1.88h-1.374v-1.8c0-.369-.17-.54-.523-.54h-.235c-.367 0-.537.17-.537.539v5.81c0 .369.17.54.537.54h.262c.353 0 .523-.171.523-.54V8.619h1.373v2.143c0 1.144-.562 1.71-1.7 1.71h-.694c-1.138 0-1.7-.566-1.7-1.71V4.82c0-1.144.562-1.709 1.7-1.709zm-12.186.08h3.114v1.274H6.117v2.603h1.648v1.275H6.117v2.774h1.74v1.275h-3.14zm3.816 0h2.198c1.138 0 1.7.564 1.7 1.708v2.445c0 1.144-.562 1.71-1.7 1.71h-.799v3.338h-1.4zm4.53 0h1.4v9.201h-1.4zm-3.13 1.235v3.392h.575c.354 0 .523-.171.523-.54V4.965c0-.368-.17-.54-.523-.54zm-3.74 10.147a1.708 1.708 0 01.591.108 1.745 1.745 0 01.49.299l-.452.546a1.247 1.247 0 00-.308-.195.91.91 0 00-.363-.068.658.658 0 00-.28.06.703.703 0 00-.224.163.783.783 0 00-.151.243.799.799 0 00-.056.299v.008a.852.852 0 00.056.31.7.7 0 00.157.245.736.736 0 00.238.16.774.774 0 00.303.058.79.79 0 00.445-.116v-.339h-.548v-.565H7.37v1.255a2.019 2.019 0 01-.524.307 1.789 1.789 0 01-.683.123 1.642 1.642 0 01-.602-.107 1.46 1.46 0 01-.478-.3 1.371 1.371 0 01-.318-.455 1.438 1.438 0 01-.115-.58v-.008a1.426 1.426 0 01.113-.57 1.449 1.449 0 01.312-.46 1.418 1.418 0 01.474-.309 1.58 1.58 0 01.598-.111 1.708 1.708 0 01.045 0zm11.963.008a2.006 2.006 0 01.612.094 1.61 1.61 0 01.507.277l-.386.546a1.562 1.562 0 00-.39-.205 1.178 1.178 0 00-.388-.07.347.347 0 00-.208.052.154.154 0 00-.07.127v.008a.158.158 0 00.022.084.198.198 0 00.076.066.831.831 0 00.147.06c.062.02.14.04.236.061a3.389 3.389 0 01.43.122 1.292 1.292 0 01.328.17.678.678 0 01.207.24.739.739 0 01.071.337v.008a.865.865 0 01-.081.382.82.82 0 01-.229.285 1.032 1.032 0 01-.353.18 1.606 1.606 0 01-.46.061 2.16 2.16 0 01-.71-.116 1.718 1.718 0 01-.593-.346l.43-.514c.277.223.578.335.9.335a.457.457 0 00.236-.05.157.157 0 00.082-.142v-.008a.15.15 0 00-.02-.077.204.204 0 00-.073-.066.753.753 0 00-.143-.062 2.45 2.45 0 00-.233-.062 5.036 5.036 0 01-.413-.113 1.26 1.26 0 01-.331-.16.72.72 0 01-.222-.243.73.73 0 01-.082-.36v-.008a.863.863 0 01.074-.359.794.794 0 01.214-.283 1.007 1.007 0 01.34-.185 1.423 1.423 0 01.448-.066 2.006 2.006 0 01.025 0zm-9.358.025h.742l1.183 2.81h-.825l-.203-.499H8.623l-.198.498h-.81zm2.197.02h.814l.663 1.08.663-1.08h.814v2.79h-.766v-1.602l-.711 1.091h-.016l-.707-1.083v1.593h-.754zm3.469 0h2.235v.658h-1.473v.422h1.334v.61h-1.334v.442h1.493v.658h-2.255zm-5.3.897l-.315.793h.624zm-1.145 5.19h8.014l-4.09 1.348z" />
              </svg>
            </Link>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default DetailGames;
