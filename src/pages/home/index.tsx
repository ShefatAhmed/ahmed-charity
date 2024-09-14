import AboutUs from "./AboutUs";
import DonationPost from "./DonationPost";
import ExtraFirst from "./ExtraFirst";
import ExtraSecond from "./ExtraSecond";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import Testomonial from "./Testomonial";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <DonationPost />
      <Testomonial />
      <GallerySection />
      <AboutUs />
      <ExtraFirst />
      <ExtraSecond />
    </div>
  );
};

export default Home;
