import { Fragment } from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../../assets/Image/about_image.png";
import Description from "../../elements/Description";
import SubHeader from "../../elements/SubHeader";
import AuthLayout from "../../layouts/AuthLayout";
const AboutSection = () => {
  return (
    <Fragment>
      <AuthLayout background="bg-dark">
        <div className="w-full mx-auto flex flex-wrap lg:items-center xl:px-10">
          <div className="w-full mx-auto px-5 md:px-10 lg:w-1/2 xl:w-[60%] xl:pr-10">
            <SubHeader className="text-second text-center lg:text-left">
              What is Quest<span className="text-primary">ForGame</span> ??
            </SubHeader>
          </div>
          <div className="w-full block lg:flex lg:flex-row-reverse lg:items-center">
            <div className="w-full px-5 mt-3 lg:w-1/2">
              <img
                src={aboutImg}
                alt="marvel-spiderman-2"
                className="w-11/12 mx-auto object-cover drop-shadow-custom md:w-3/5 lg:w-11/12 lg:-ml-5"
              />
            </div>
            <div className="w-full mx-auto px-5 md:px-10 lg:w-1/2 xl:w-[60%] xl:pr-10">
              <Description>
                <span className="font-montserrat font-semibold text-second tracking-wider">
                  Quest<span className="text-primary">ForGame </span>
                </span>
                is a digital platform built with a focus on The latest guides
                and information about various updated games. This website aims
                to help gamers find games that suits them by providing games
                with a variety various categories, ranging from popular genres,
                indie games, to most popular titles.
              </Description>
              <Description>
                We retrieve all existing game data via the API provided by{" "}
                <Link
                  to={"/https://rawg.io/apidocs"}
                  className="font-semibold italic cursor-pointer"
                >
                  RAWG
                </Link>
                , so that security can be guaranteed.
              </Description>
              <Description>
                In short,{" "}
                <span className="font-montserrat font-semibold text-second tracking-wider">
                  Quest<span className="text-primary">ForGame </span>
                </span>
                is the ideal place for gamers to find and explore the game world
                in depth
              </Description>
            </div>
          </div>
        </div>
      </AuthLayout>
    </Fragment>
  );
};

export default AboutSection;
