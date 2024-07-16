import HeroPage from "../components/Hero/HeroPage";
import aboutUsImage from "../assets/images/company/aboutus.jpg";
import AboutSection from "../containers/AboutSection";
import TeamSection, { profile } from "../containers/TeamSection";
import team1 from "../assets/images/client/01.jpg";
import team2 from "../assets/images/client/02.jpg";
import team3 from "../assets/images/client/03.jpg";
import team4 from "../assets/images/client/04.jpg";
import team5 from "../assets/images/client/05.jpg";
import team6 from "../assets/images/client/06.jpg";
import StrategicSection from "../containers/StrategicSection";
import DonateSection from "../containers/DonateSection";

const team: profile[] = [
  {
    imagen: team1,
    nombre: "Mildred Garza",
    puesto: "CEO",
  },
  {
    imagen: team2,
    nombre: "Gavin Lynch",
    puesto: "CEO",
  },
  {
    imagen: team3,
    nombre: "Barbara Kelley",
    puesto: "CEO",
  },
  {
    imagen: team5,
    nombre: "Howard Roberson",
    puesto: "CEO",
  },
  {
    imagen: team6,
    nombre: "Jayden Peterson",
    puesto: "CEO",
  },
  {
    imagen: team4,
    nombre: "Billy Vega",
    puesto: "CEO",
  },
];

const AboutPage = () => {
  return (
    <div>
      <HeroPage
        imagen={aboutUsImage}
        page="About Us"
        description="Empowering families, building futures: Join us in making homelessness a thing of the past."
        Breadcrumb={[
          { link: "/", nombre: "Home" },
          { link: "about", nombre: "About Us" },
        ]}
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
