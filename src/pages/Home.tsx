import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MenuHeader from "../components/MenuHeader";
import History from "../components/History";
import Gallery from "../components/Gallery";
import Banner from "../assets/images/heroBackground.jpg";
import Parallax from "../components/Parrallax/Parallax";
import ContactForm from "../components/ContactForm";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Selction4 from "../components/Section4";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <MenuHeader />
      <HeroSection />
      <div data-aos="fade-up">
        <span className="flex justify-content-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold py-12">
          ABOUT US
        </span>
      </div>
      <AboutUs />
      <div data-aos="fade-left" className="mt-24">
        <History />
      </div>
      <div data-aos="fade-up" className="mt-24 px-12">
        <Gallery />
      </div>
      <div data-aos="fade-down-right" className="mt-24">
        <Selction4 />
      </div>
      <div className="mt-24">
        <Parallax
          img={Banner}
          text="totam dicta eius quidem soluta, minus ullam. Rem dolorum illum dolor debitis consectetur possimus."
          title="Lorem ipsum dolor sit amet"
        />
      </div>
      <div>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
