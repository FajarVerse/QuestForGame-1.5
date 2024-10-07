import { useRef } from "react";

function App() {
  const HamburgerToggleRef = useRef(null);
  const Navbar = useRef(null);
  const toggleClick = () => {
    Navbar.current.classList.toggle("hidden");
    HamburgerToggleRef.current.classList.toggle("hamburger-active");
  };

  const HeaderRef = useRef(null);

  window.onscroll = function () {
    const fixNav = HeaderRef.current.offsetTop;

    if (window.scrollY > fixNav) {
      HeaderRef.current.classList.add("header-fixed");
      console.log("ok");
    } else {
      HeaderRef.current.classList.remove("header-fixed");
    }
  };

  return (
    <>
      <header
        ref={HeaderRef}
        className="absolute top-0 left-0 w-full px-4 py-5 flex items-center lg:py-1"
      >
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a href="" className="block font-bold text-xl">
                QuestForGame
              </a>
            </div>
            <div className="px-4 flex items-center relative lg:hidden">
              <button
                id="hamburger"
                name="hamburger"
                ref={HamburgerToggleRef}
                className="block absolute right-4"
                onClick={() => toggleClick()}
              >
                <span className="hamburger-line origin-top-left"></span>
                <span className="hamburger-line "></span>
                <span className="hamburger-line origin-bottom-left"></span>
              </button>
            </div>
            <nav
              ref={Navbar}
              className="hidden absolute py-5 bg-white shadow-lg rounded-md max-w-[250px] right-4 top-7 lg:block lg:static lg:top-0 lg:max-w-max lg:bg-transparent lg:shadow-none"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#"
                    className="text-base text-slate-700 py-2 mx-8 flex"
                  >
                    Home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="text-base text-slate-700 py-2 mx-8 flex"
                  >
                    Games
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="text-base text-slate-700 py-2 mx-8 flex"
                  >
                    Movies
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="text-base text-slate-700 py-2 mx-8 flex"
                  >
                    News
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section className=""></section>
    </>
  );
}

export default App;
