import { useRef } from "react";
import heroBg from "./assets/Image/hero_image.jpg";
import aboutImg from "./assets/Image/about_image.png";

function App() {
  const HamburgerToggleRef = useRef(null);
  const Navbar = useRef(null);
  const toggleClick = () => {
    Navbar.current.classList.toggle("hidden");
    HamburgerToggleRef.current.classList.toggle("hamburger-active");
  };

  const HeaderRef = useRef(null);
  const HeaderFixedRef = useRef(null);

  window.onscroll = function () {
    const fixNav = HeaderRef.current.offsetTop;

    if (window.scrollY > fixNav) {
      HeaderRef.current.classList.add("header-transition");
      HeaderFixedRef.current.classList.add("header-fixed");
    } else {
      HeaderRef.current.classList.remove("header-transition");
      HeaderFixedRef.current.classLista.remove("header-fixed");
    }
  };

  return (
    <>
      <header ref={HeaderFixedRef} className="absolute top-0 w-full h3 z-50">
        <div
          className="w-full bg-transparent mx-auto px-5 py-4 transition duration-500 ease-in-out rounded-[0] lg:px-10"
          ref={HeaderRef}
        >
          <div className="container">
            <div className="flex items-center justify-between relative">
              <div className="px-1">
                <a
                  href=""
                  className="block font-bebas-neue font-bold text-2xl text-second tracking-wide md:text-2xl lg:text-3xl"
                >
                  Quest<span className="text-primary">ForGame</span>
                </a>
              </div>
              <div className="flex items-center relative lg:hidden">
                <button
                  id="hamburger"
                  name="hamburger"
                  ref={HamburgerToggleRef}
                  className="block absolute right-4"
                  onClick={() => toggleClick()}
                >
                  <span className="hamburger-line origin-top-left"></span>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line origin-bottom-left"></span>
                </button>
              </div>
              <nav
                ref={Navbar}
                className="hidden absolute bg-white shadow-lg rounded-md max-w-[250px] right-4 top-11 lg:block lg:static lg:top-0 lg:max-w-max lg:bg-transparent lg:shadow-none"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#"
                      className="font-comic-neue font-semibold text-base text-dark py-2 mx-8 flex lg:text-xl lg:text-white"
                    >
                      Home
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="font-comic-neue font-semibold text-base text-dark py-2 mx-8 flex lg:text-xl lg:text-white"
                    >
                      Games
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="font-comic-neue font-semibold text-base text-dark py-2 mx-8 flex lg:text-xl lg:text-white"
                    >
                      Movies
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="font-comic-neue font-semibold text-base text-dark py-2 mx-8 flex lg:text-xl lg:text-white"
                    >
                      News
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="pt-40 relative pb-32 bg-dark min-h-screen bg-center bg-cover bg-no-repeat backdrop-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container max-w-full">
          <div className="relative z-20">
            <div className="w-full px-5 mx-auto">
              <div className="text-center">
                <h4 className="font-comic-neue font-bold text-2xl text-primary mb-2 md:text-3xl lg:text-5xl xl:text-6xl">
                  Welcome To
                </h4>
                <h2 className="font-bebas-neue font-extrabold text-6xl text-second tracking-wider mb-2 md:text-8xl lg:text-9xl xl:text-[10rem]">
                  Quest<span className="text-primary">ForGame</span>
                </h2>
                <p className="font-comic-neue font-semibold text-sm text-description md:text-lg xl:text-xl">
                  Jelajahi dunia games, dan temukan game impian mu
                </p>
              </div>
              <div className="flex justify-center">
                <a className="block font-comic-neue font-semibold text-xl text-second px-6 py-1 bg-primary m-5 rounded-full group hover:opacity-70 transition duration-300 ease-in-out md:px-7 md:text-xl xl:px-8">
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

      <section className="pt-20 pb-14 bg-dark">
        <div className="container">
          <div className="flex flex-wrap w-full lg:flex-row-reverse lg:items-center">
            <div className="w-full px-5 lg:w-1/2 xl:w-[60%] xl:pr-10">
              <h2 className="font-bebas-neue font-bold text-4xl text-second text-center tracking-wide mb-3 md:text-5xl lg:text-4xl lg:text-left xl:text-5xl">
                Apa itu Quest<span className="text-primary">ForGame</span>??
              </h2>
              <p className="font-comic-neue font-medium text-base text-description mb-2 md:text-lg lg:text-base lg:mb-3 xl:text-xl">
                <span className="font-semibold text-second">
                  Quest<span className="text-primary">ForGame </span>
                </span>
                merupakan platfrom digital yang dibangun dengan berfokus kepada
                panduan dan informasi terkini tentang berbagai games terupdate.
                Website ini bertujuan untuk membantu para gamers menemukan game
                yang sesuai untuk mereka dengan menyediakan game dengan berbagai
                macam kategori, mulai dari genre populer, game indie, hingga
                judul-judul terpopuler.
              </p>
              <p className="font-comic-neue font-medium text-base text-description mb-2 md:text-lg lg:text-base lg:mb-3 xl:text-xl">
                Kami mengambil semua data game yang ada melalui API yang
                disediakan oleh{" "}
                <a
                  href="https://rawg.io/apidocs"
                  className="font-semibold italic cursor-pointer"
                >
                  RAWG
                </a>
                , sehingga dapat terjamin keamanannya.
              </p>
              <p className="font-comic-neue font-medium text-base text-description mb-2 md:text-lg lg:text-base lg:mb-3 xl:text-xl">
                Singkatnya,{" "}
                <span className="font-semibold text-second">
                  Quest<span className="text-primary">ForGame </span>
                </span>
                adalah tempat yang ideal bagi para gamer untuk menemukan dan
                menjelajahi dunia game secara mendalam.
              </p>
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
      </section>
    </>
  );
}

export default App;
