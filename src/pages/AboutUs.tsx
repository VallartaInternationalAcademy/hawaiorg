import HeroSection from "../containers/HeroSection";
import background from "../assets/images/banner3.png";
import banner from "../assets/images/Foto1.png";
import perfil from "../assets/images/cards/perfil.jpg";
import perfil1 from "../assets/images/cards/perfil1.jpg";
import perfil2 from "../assets/images/cards/perfil2.jpg";
import perfil3 from "../assets/images/cards/perfil3.jpg";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import TeamMemberCard from "../components/Cards/TeamMemberCard";
import Parallax from "../components/Parrallax/Parallax";
import Banner from "../assets/images/heroBackground.jpg";
import ContactForm from "../containers/ContactForm";

interface memebers {
  image?: string;
  name: string;
  title: string;
  color?: string;
  direction: "left" | "right" | "down";
  additionalInfo?: string;
  isImage: boolean;
}

const teamMembers: memebers[] = [
  {
    name: "Rufus Stewart",
    title: "MARKETING",
    color: "azul",
    direction: "right",
    additionalInfo:
      "Marketing expert Rufus Stewart has brought numerous campaigns to success.",
    isImage: false,
  },
  {
    image: perfil,
    name: "Samira Hadid",
    title: "CEO",
    color: "teal-500",
    direction: "right",
    additionalInfo: "",
    isImage: true,
  },
  {
    name: "Rufus Stewart",
    title: "MARKETING",
    color: "verde",
    direction: "down",
    additionalInfo:
      "Marketing expert Rufus Stewart has brought numerous campaigns to success.",
    isImage: false,
  },
  {
    image: perfil1,
    name: "Olivia Wilson",
    title: "CEE",
    color: "green-500",
    direction: "down",
    additionalInfo: "",
    isImage: true,
  },
  {
    name: "Rufus Stewart",
    title: "MARKETING",
    color: "azul",
    direction: "left",
    additionalInfo:
      "Marketing expert Rufus Stewart has brought numerous campaigns to success.",
    isImage: false,
  },
  {
    image: perfil3,
    name: "Olivia Wilson",
    title: "CEE",
    color: "green-500",
    direction: "down",
    additionalInfo: "",
    isImage: true,
  },
  {
    name: "Richard Sanchez",
    title: "DISEÑADOR",
    color: "rojo",
    direction: "left",
    additionalInfo:
      "Designer Richard Sanchez creates stunning visuals and experiences.",
    isImage: false,
  },
  {
    image: perfil3,
    name: "Olivia Wilson",
    title: "CEE",
    color: "green-500",
    direction: "right",
    additionalInfo: "",
    isImage: true,
  },
  {
    name: "Aaron Loeb",
    title: "RRHH",
    color: "morado",
    direction: "right",
    additionalInfo:
      "HR specialist Aaron Loeb ensures our team remains motivated and productive.",
    isImage: false,
  },
  {
    image: perfil,
    name: "John Doe",
    title: "DEVELOPER",
    color: "yellow-500",
    direction: "down",
    additionalInfo: "",
    isImage: true,
  },
];

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <HeroSection
        background={background}
        title="TOGETHER FOR"
        tittle_highlight="CHANGE"
        descripcion="Empowering families, building futures: Join us in making homelessness a thing of the past"
        section="ABOUT US"
        height="h-96"
      />
      <div className="mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center text-center">
          <div className="flex justify-center items-center">
            <img
              src={banner}
              className="h-[60%] w-[60%] md:h-[70%] md:w-[70%] lg:h-[90%] lg:w-[90%] md:pl-8 lg:pl-32"
            />
          </div>
          <div className="px-8 md:px-12 lg:pr-24 text-sm md:text-lg lg:text-xl">
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold block mb-4 uppercase">
              ABOUT <span className="text-main">US</span>
            </span>
            <span className="block mb-4 text-justify">
              At Corazon Hawaii, our mission is to empower homeless families to
              rebuild their lives and reconnect with their community. Through
              comprehensive housing services and advocacy, we provide essential
              support to break down barriers to housing and foster lasting
              change. <br />
              <br />
              Our vision guides us towards a future where everyone has a safe,
              dignified home, and homelessness is eradicated. We envision a
              society where every individual can live with dignity, security,
              and opportunity, supported by a united community.
              <br />
              <br />
              With dedication and compassion, we strive to make this vision a
              reality. Join us in creating a brighter future where homelessness
              is a thing of the past, and every family can thrive. Together, we
              can build a community where everyone has the chance to flourish
              and contribute to a better tomorrow. MEET OUR TEAM CEO Samira
              Hadid CEE Olivia Wilso
            </span>
          </div>
        </div>
      </div>
      <div className="mt-12" data-aos="fade-up">
        <span className="flex justify-content-start text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold p-12">
          GET TO KNOW <span className="text-main ml-5">US</span>
        </span>
        <div className="flex flex-wrap p-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
      <div className="mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center p-4">
              <h2 className="text-xl font-bold mb-2">Advocacy</h2>
              <p className="text-center">hgjkl</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <h2 className="text-xl font-bold mb-2">Wellbeing</h2>
              <p className="text-center">hgjkl</p>
            </div>
          </div>
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

export default AboutUs;
