import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MenuHeader from "../components/MenuHeader";

const Home = () => {
  return (
    <div>
      <MenuHeader />
      <HeroSection />
      <span className="flex justify-content-center text-5xl font-bold py-12">
        Lorem ipsum dolor sit amet.
      </span>
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
