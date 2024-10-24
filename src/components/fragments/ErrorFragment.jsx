import { useRouteError } from "react-router-dom";
import Button from "../elements/Button";
import Description from "../elements/Description";
import Header from "../elements/Header";
import SubHeader from "../elements/SubHeader";
import AuthLayout from "../layouts/AuthLayout";
import Navbar from "../layouts/Navbar";
import background from "../../assets/Image/last_home_bg.jpg"


const ErrorFragment = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <AuthLayout
        backgroundImage={background}
        className="min-h-screen backdrop-bg pt-32"
      >
        <div className="w-full relative px-7 z-20">
          <div className="w-full mx-auto">
            <Header className="text-9xl text-center text-second opacity-25 md:text-[9rem] lg:text-[9.5rem] xl:text-[10rem]">
              {error.status}
            </Header>
          </div>
          <div className="w-full mx-auto">
            <SubHeader className="text-center text-second mb-2">
              {error.statusText}
            </SubHeader>
            <Description className="text-center mb-5">
              Oops, the page you are looking for is not available
            </Description>
            <Button className="mx-auto" link={"/home"}>
              Back To Home
            </Button>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default ErrorFragment
