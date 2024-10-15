import { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
    <header ref={HeaderFixedRef} className="absolute top-0 w-full h3 z-[99]">
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
                className="block absolute right-2.5"
                onClick={() => toggleClick()}
              >
                <span className="hamburger-line origin-top-left"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line origin-bottom-left"></span>
              </button>
            </div>
            <nav
              ref={Navbar}
              className="hidden absolute bg-sunset border-[2.5px] border-lightSunset box-shadow max-w-[250px] right-4 top-9 lg:block lg:static lg:top-0 lg:max-w-max lg:bg-transparent lg:shadow-none lg:border-none"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <Link
                    to={"/home"}
                    className="nav-link"
                  >
                    Home
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to={"/games"}
                    className="nav-link"
                  >
                    Games
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to={"/movies"}
                    className="nav-link"
                  >
                    Movies
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to={"/news"}
                    className="nav-link"
                  >
                    News
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
