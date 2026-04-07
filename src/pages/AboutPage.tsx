import HeroPage from "../components/Hero/HeroPage";
import aboutUsImage from "../assets/images/hawai/About.png";
import AboutSection from "../containers/AboutSection";
import TeamSection, { profile } from "../containers/TeamSection";
import unamed from "../assets/images/logo.png";
import imgAlexa from "../assets/images/team/alexa.jpeg";
import imgBrittany from "../assets/images/team/britany.jpeg";
import imgChristopher from "../assets/images/team/christopher.jpeg";
import imgMia from "../assets/images/team/mia.jpeg";
import imgPatricia from "../assets/images/team/patricia.jpeg";
import imgPearl from "../assets/images/team/pearl.jpeg";
import imgRobert from "../assets/images/team/robert.jpeg";
import imgRubelyn from "../assets/images/team/rubelyn.jpeg";
import imgSara from "../assets/images/team/sara.jpeg";
import imgSayleen from "../assets/images/team/sayleen.jpeg";
import StrategicSection from "../containers/StrategicSection";
import useScrollToTop from "../hooks/useScrollToTop";

const team: profile[] = [
  {
    imagen: imgAlexa,
    nombre: "Alexa",
    puesto: "-",
  },
  {
    imagen: imgBrittany,
    nombre: "Brittany",
    puesto: "-",
  },
  {
    imagen: imgChristopher,
    nombre: "Christoper",
    puesto: "-",
  },
  {
    imagen: imgMia,
    nombre: "Mia",
    puesto: "-",
  },
  {
    imagen: imgPatricia,
    nombre: "Patricia",
    puesto: "-",
  },
  {
    imagen: imgPearl,
    nombre: "Pearl",
    puesto: "-",
  },
  {
    imagen: imgRobert,
    nombre: "Robert",
    puesto: "-",
  },
  {
    imagen: imgRubelyn,
    nombre: "Rubelyn",
    puesto: "-",
  },
  {
    imagen: imgSara,
    nombre: "Sara",
    puesto: "-",
  },
  {
    imagen: imgSayleen,
    nombre: "Sayleen",
    puesto: "-",
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
