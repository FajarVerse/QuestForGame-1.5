import { useRef } from "react";

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
      <header ref={HeaderFixedRef} className="absolute top-0 w-full h3">
        <div
          className="w-full bg-transparent mx-auto px-5 py-4 transition duration-500 ease-in-out rounded-[0] lg:px-10"
          ref={HeaderRef}
        >
          <div className="container">
            <div className="flex items-center justify-between relative">
              <div className="px-1">
                <a
                  href=""
                  className="block font-bold text-xl text-second md:text-2xl lg:text-3xl"
                >
                  QuestForGame
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
                      className="text-base text-dark py-2 mx-8 flex lg:text-lg lg:text-white"
                    >
                      Home
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="text-base text-dark py-2 mx-8 flex lg:text-lg lg:text-white"
                    >
                      Games
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="text-base text-dark py-2 mx-8 flex lg:text-lg lg:text-white"
                    >
                      Movies
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="text-base text-dark py-2 mx-8 flex lg:text-lg lg:text-white"
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
      <section className="pt-40 pb-32 bg-dark min-h-screen">
        <div className="container max-w-full">
          <div className="">
            <div className="w-full px-5 mx-auto">
              <div className="text-center">
                <h4 className="font-bold text-2xl text-primary mb-1 md:text-3xl lg:text-5xl">
                  Welcome To
                </h4>
                <h2 className="font-extrabold text-4xl text-second mb-3 md:text-5xl lg:text-7xl">
                  QuestForGame
                </h2>
                <p className="font-medium text-base text-description md:text-lg xl:text-xl">
                  Jelajahi dunia games, dan temukan game impian mu
                </p>
              </div>
              <div className="flex justify-center">
                <a className="block font-medium text-lg text-second px-5 py-2 bg-primary m-5 rounded-full group hover:opacity-70 transition duration-300 ease-in-out md:px-7 md:text-xl xl:px-8">
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
    </>
  );
}

export default App;
