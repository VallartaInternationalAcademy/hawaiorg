import HeroPage from "../components/Hero/HeroPage";
import aboutUsImage from "../assets/images/hawai/About.png";
import AboutSection from "../containers/AboutSection";
import TeamSection, { profile } from "../containers/TeamSection";
import unamed from "../assets/images/logo.png";
import StrategicSection from "../containers/StrategicSection";
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
  {
    imagen: unamed,
    nombre: "Brian Trigueros",
    puesto: "Program Manager",
  },
  {
    imagen: unamed,
    nombre: "Deedee Teisina",
    puesto: "Housing Retention Specialist",
  },
  {
    imagen: unamed,
    nombre: "Christopher Fortiz",
    puesto: "Operations Manager",
  },
  {
    imagen: unamed,
    nombre: "Patricia K. Cornett",
    puesto: "Retention Specialist",
  },
];

const AboutPage = () => {
  useScrollToTop();
  return (
    <div>
      <HeroPage
        imagen={aboutUsImage}
        page="ABOUT US"
        description='Our name, "Corazon," translates to "heart" in Spanish, reflecting the deep compassion and unwavering commitment that drives our efforts to support and uplift our community. Choosing the name "Corazon" was a deliberate and meaningful decision. It symbolizes the heart and soul we put into our work, the love and care we extend to each family we serve, and the belief that a community united by compassion can achieve great things.
'
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
