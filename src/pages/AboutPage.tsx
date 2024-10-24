import HeroPage from "../components/Hero/HeroPage";
import aboutUsImage from "../assets/images/hawai/Home-About us.png";
import AboutSection from "../containers/AboutSection";
import TeamSection, { profile } from "../containers/TeamSection";
import unamed from "../assets/images/logo.png";
import StrategicSection from "../containers/StrategicSection";
import DonateSection from "../containers/DonateSection";
import useScrollToTop from "../hooks/useScrollToTop";

const team: profile[] = [
  {
    imagen: unamed,
    nombre: "Sonia Davalos",
    puesto: "Executive Director",
  },
  {
    imagen: unamed,
    nombre: "Robert Zuckerman",
    puesto: "Associate Director ",
  },
  {
    imagen: unamed,
    nombre: "Sara Villanueva",
    puesto: "Staff Accountant",
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
    </div>
  );
};

export default AboutPage;
