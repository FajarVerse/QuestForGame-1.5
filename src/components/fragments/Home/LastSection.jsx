import { Fragment } from "react"
import AuthLayout from "../../layouts/AuthLayout";
import Description from "../../elements/Description";
import Button from "../../elements/Button";
import LastBgHome from "../../../assets/Image/last_home_bg.jpg";

const LastSection = () => {

  return (
    <Fragment>
      <AuthLayout
        backgroundImage={LastBgHome}
        className="relative backdrop-bg md:bg-top"
      >
        <div className="relative z-20">
          <div className="w-full px-5 py-5 md:px-10 lg:px-32">
            <Description className="font-extrabold text-lg text-center mb-5 lg:text-[1.5rem] lg:font-extrabold lg:mb-7 xl:text-[1.8rem]">
              Siap untuk tantangan? Ayo mulai petualanganmu dan temukan game
              terbaikmu sekarang!
            </Description>
            <Button className="mx-auto text-lg px-5 xl:text-xl xl:py-1.5" link={"/games"}>
              Let's Start Your Adventure{" "}
              <span>
                <svg
                  className="xl:w-9 xl:h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#ffffff"
                >
                  <path d="M440-440q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440ZM280-120v-80l240-40v-445q0-15-9-27t-23-14l-208-34v-80l220 36q44 8 72 41t28 77v512l-320 54Zm-160 0v-80h80v-560q0-34 23.5-57t56.5-23h400q34 0 57 23t23 57v560h80v80H120Zm160-80h400v-560H280v560Z" />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </AuthLayout>
    </Fragment>
  );
}

export default LastSection