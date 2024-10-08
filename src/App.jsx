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
          className="w-full mx-auto px-3 py-2  transition duration-500 ease-in-out rounded-[0]"
          ref={HeaderRef}
        >
          <div className="container">
            <div className="flex items-center justify-between relative">
              <div className="px-4">
                <a href="" className="block font-bold text-xl lg:text-2xl">
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
                      className="text-base text-slate-700 py-2 mx-8 flex lg:text-lg"
                    >
                      Home
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="text-base text-slate-700 py-2 mx-8 flex lg:text-lg"
                    >
                      Games
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="text-base text-slate-700 py-2 mx-8 flex lg:text-lg"
                    >
                      Movies
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="text-base text-slate-700 py-2 mx-8 flex lg:text-lg"
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

      <section className="min-h-[1000px]"></section>
    </>
  );
}

export default App;
