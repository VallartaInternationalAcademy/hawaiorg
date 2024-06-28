import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MenuHeader from "../components/MenuHeader";
import History from "../components/History";
import Gallery from "../components/Gallery";
import Banner from "../assets/images/heroBackground.jpg";
import Parallax from "../components/Parrallax/Parallax";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <div>
      <MenuHeader />
      <HeroSection />
      <span className="flex justify-content-center text-4xl font-bold py-12">
        Lorem ipsum dolor sit amet.
      </span>
      <AboutUs />
      <div className="mt-24">
        <History />
      </div>
      <div className="mt-24 px-12">
        <Gallery />
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
