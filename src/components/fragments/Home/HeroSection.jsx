import { Fragment } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import Header from "../../elements/Header";
import Description from "../../elements/Description";
import Button from "../../elements/Button";
import heroBg from "../../../assets/Image/hero_image.jpg";

const HeroSection = () => {
  return (
    <Fragment>
      <AuthLayout
        className="pt-40 relative pb-32 bg-dark min-h-screen bg-center bg-cover bg-no-repeat backdrop-bg hero"
        backgroundImage={heroBg}
      >
        <div className="container max-w-full">
          <div className="relative z-20">
            <div className="w-full px-5 mx-auto">
              <div className="text-center">
                <Header className="font-comic-neue font-bold text-2xl text-primary xl:text-6xl">
                  Welcome To
                </Header>
                <Header className="font-bebas-neue text-6xl text-second tracking-wider  md:text-8xl lg:text-9xl xl:text-[10rem]">
                  Quest<span className="text-primary">ForGame</span>
                </Header>
                <Description className="font-comic-neue -mb-2 font-semibold md:text-lg xl:text-xl">
                  Jelajahi dunia games, dan temukan game impian mu
                </Description>
              </div>
              <div className="flex justify-center">
                <Button className="text-xl mt-5 gap-3 lg:text-2xl xl:text-3xl xl:px-5">
                  Start
                  <span>
                    <svg
                      className="lg:w-7 lg:h-7 xl:w-9 xl:h-9"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#ffffff"
                    >
                      <path d="M189-160q-60 0-102.5-43T42-307q0-9 1-18t3-18l84-336q14-54 57-87.5t98-33.5h390q55 0 98 33.5t57 87.5l84 336q2 9 3.5 18.5T919-306q0 61-43.5 103.5T771-160q-42 0-78-22t-54-60l-28-58q-5-10-15-15t-21-5H385q-11 0-21 5t-15 15l-28 58q-18 38-54 60t-78 22Zm3-80q19 0 34.5-10t23.5-27l28-57q15-31 44-48.5t63-17.5h190q34 0 63 18t45 48l28 57q8 17 23.5 27t34.5 10q28 0 48-18.5t21-46.5q0 1-2-19l-84-335q-7-27-28-44t-49-17H285q-28 0-49.5 17T208-659l-84 335q-2 6-2 18 0 28 20.5 47t49.5 19Zm348-280q17 0 28.5-11.5T580-560q0-17-11.5-28.5T540-600q-17 0-28.5 11.5T500-560q0 17 11.5 28.5T540-520Zm80-80q17 0 28.5-11.5T660-640q0-17-11.5-28.5T620-680q-17 0-28.5 11.5T580-640q0 17 11.5 28.5T620-600Zm0 160q17 0 28.5-11.5T660-480q0-17-11.5-28.5T620-520q-17 0-28.5 11.5T580-480q0 17 11.5 28.5T620-440Zm80-80q17 0 28.5-11.5T740-560q0-17-11.5-28.5T700-600q-17 0-28.5 11.5T660-560q0 17 11.5 28.5T700-520Zm-360 60q13 0 21.5-8.5T370-490v-40h40q13 0 21.5-8.5T440-560q0-13-8.5-21.5T410-590h-40v-40q0-13-8.5-21.5T340-660q-13 0-21.5 8.5T310-630v40h-40q-13 0-21.5 8.5T240-560q0 13 8.5 21.5T270-530h40v40q0 13 8.5 21.5T340-460Zm140-20Z" />
                    </svg>
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AuthLayout>
    </Fragment>
  );
};

export default HeroSection;
