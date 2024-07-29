import HeroPage from "../components/Hero/HeroPage";
import aboutUsImage from "../assets/images/hawai/Home-About us.png";
import AboutSection from "../containers/AboutSection";
import TeamSection, { profile } from "../containers/TeamSection";
import unamed from "../assets/images/hawai/unnamed.png";
import StrategicSection from "../containers/StrategicSection";
import DonateSection from "../containers/DonateSection";
import useScrollToTop from "../hooks/useScrollToTop";

const team: profile[] = [
  {
    imagen: unamed,
    nombre: "Mildred Garza",
    puesto: "CEO",
  },
  {
    imagen: unamed,
    nombre: "Gavin Lynch",
    puesto: "CEO",
  },
  {
    imagen: unamed,
    nombre: "Barbara Kelley",
    puesto: "CEO",
  },
  {
    imagen: unamed,
    nombre: "Howard Roberson",
    puesto: "CEO",
  },
  {
    imagen: unamed,
    nombre: "Jayden Peterson",
    puesto: "CEO",
  },
  {
    imagen: unamed,
    nombre: "Billy Vega",
    puesto: "CEO",
  },
];

const AboutPage = () => {
  useScrollToTop();
  return (
    <div>
      <HeroPage
        imagen={aboutUsImage}
        page="ABOUT US"
        description="Empowering families, building futures: Join us in making homelessness a thing of the past."
        Breadcrumb={[{ link: "/", nombre: "Home" }]}
      />
      <section className="section">
        <AboutSection />
      </section>
      <section className="section">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title mb-4 pb-2">
              <h4 className="title">
                MEET OUR <span className="text-primary fw-bold">TEAM</span>{" "}
              </h4>
            </div>
          </div>
        </div>
        <TeamSection Team={team} />
        <section className="section">
          <StrategicSection />
        </section>
      </section>
      <DonateSection />
    </div>
  );
};

export default AboutPage;
