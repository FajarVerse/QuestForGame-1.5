import Navbar from "../../layouts/Navbar";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import LastSection from "./LastSection";
import SummarySection from "./SummarySection";

const HomeFragment = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SummarySection />
      <LastSection />
    </>
  );
};

export default HomeFragment;
