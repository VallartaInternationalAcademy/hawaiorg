import AboutUs from "../containers/AboutUs";
import HeroSection from "../containers/HeroSection";
import History from "../containers/History";
import Gallery from "../components/Gallery";
import Banner from "../assets/images/heroBackground.jpg";
import Parallax from "../components/Parrallax/Parallax";
import ContactForm from "../containers/ContactForm";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Carousel from "../components/carousel/carousel1";
import cardImage from "../assets/images/cards/cardImge.jpg";
import background from "../assets/images/banner3.png";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const items = [
    {
      title: "LOREM IPSUM DOLOR LOREM",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: cardImage,
    },
    {
      title: "LOREM IPSUM DOLOR LOREM",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: cardImage,
    },
    {
      title: "LOREM IPSUM DOLOR LOREM",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: cardImage,
    },
  ];
  return (
    <div>
      <HeroSection
        background={background}
        title="REBUILDING LIVES, RESTORING DIGNITY: YOUR PARTNER IN"
        tittle_highlight="ENDING HOMELESSNESS"
        descripcion="Help us make a difference. Donate today to provide safe housing and support services"
        main
      />
      <div data-aos="fade-up">
        <span className="flex justify-content-start text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold p-12">
          GET TO KNOW <span className="text-main ml-5">US</span>
        </span>
      </div>
      <AboutUs />
      <div data-aos="fade-left" className="mt-24">
        <History />
      </div>
      <div data-aos="fade-up" className="mt-24 ">
        <span className="flex justify-content-start text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold p-12">
          NUESTRO EQUIPO EN <span className="text-main ml-5">ACCION</span>
        </span>
        <div className="px-12">
          <Gallery />
        </div>
      </div>
      <div>
        <span className="flex justify-content-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold py-12">
          CASOS DE <span className="text-main ml-5">EXITO</span>
        </span>
        <div className="flex items-center justify-center">
          <Carousel items={items} />
        </div>
      </div>

      <div className="mt-24">
        <Parallax
          img={Banner}
          text="Your donation can make a real difference. Help homeless households rebuild their lives,
          rediscover their identities, and reconnect with their community. Join us in creating lasting
          change."
          title="TRANSFORM LIVES WITH YOUR GENEROSITY"
        />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
