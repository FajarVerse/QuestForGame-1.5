import { Link } from "react-router-dom";
import Description from "../components/elements/Description";
import Header from "../components/elements/Header";
import SubHeader from "../components/elements/SubHeader";
import AuthLayout from "../components/layouts/AuthLayout";
import Navbar from "../components/layouts/Navbar";

const Movies = () => {
  return (
    <>
      <Navbar />
      <AuthLayout background="bg-dark" className="min-h-screen pt-40 pb-20">
        <div className="w-full px-7 mb-5">
          <Header className="font-bold text-second">
            Coming <span className="text-primary">Soon</span>
          </Header>
          <Description className="mt-4">
            We're excited to bring you an amazing new feature! Stay tuned for
            updates as we work on delivering an enhanced experience. Coming
            soon, something worth the wait!
          </Description>
        </div>
        <div className="w-full px-7">
          <Description className="text-sm">
            Stay Tuned !
          </Description>
          <div className="w-full flex">
            <Link className="px-4 py-4 bg-second rounded-full">
            
            </Link>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default Movies;
