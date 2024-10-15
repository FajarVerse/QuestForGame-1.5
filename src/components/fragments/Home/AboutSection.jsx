import { Fragment } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import Header from "../../elements/Header";
import Description from "../../elements/Description";
import aboutImg from "../../../assets/Image/about_image.png";
import { Link } from "react-router-dom";
const AboutSection = () => {
  return (
    <Fragment>
      <AuthLayout background="bg-dark">
        <div className="w-full mx-auto flex flex-wrap  lg:items-center xl:px-10">
          <div className="w-full mx-auto px-5 md:px-10 lg:w-1/2 xl:w-[60%] xl:pr-10">
            <Header className="font-bebas-neue text-4xl text-second lg:text-left">
              Apa itu Quest<span className="text-primary">ForGame</span> ??
            </Header>
            <Description>
              <span className="font-bebas-neue font-semibold text-second tracking-wider">
                Quest<span className="text-primary">ForGame </span>
              </span>
              merupakan platfrom digital yang dibangun dengan berfokus kepada
              panduan dan informasi terkini tentang berbagai games terupdate.
              Website ini bertujuan untuk membantu para gamers menemukan game
              yang sesuai untuk mereka dengan menyediakan game dengan berbagai
              macam kategori, mulai dari genre populer, game indie, hingga
              judul-judul terpopuler.
            </Description>
            <Description>
              Kami mengambil semua data game yang ada melalui API yang
              disediakan oleh{" "}
              <Link
                to={"/https://rawg.io/apidocs"}
                className="font-semibold italic cursor-pointer"
              >
                RAWG
              </Link>
              , sehingga dapat terjamin keamanannya.
            </Description>
            <Description>
              Singkatnya,{" "}
              <span className="font-bebas-neue font-semibold text-second tracking-wider">
                Quest<span className="text-primary">ForGame </span>
              </span>
              adalah tempat yang ideal bagi para gamer untuk menemukan dan
              menjelajahi dunia game secara mendalam.
            </Description>
          </div>
          <div className="w-full px-5 mt-3 lg:w-1/2 xl:w-2/5">
            <img
              src={aboutImg}
              alt="marvel-spiderman-2"
              className="w-full mx-auto object-cover drop-shadow-custom md:w-3/4 lg:w-[90%] xl:w-full"
            />
          </div>
        </div>
      </AuthLayout>
    </Fragment>
  );
};

export default AboutSection;
