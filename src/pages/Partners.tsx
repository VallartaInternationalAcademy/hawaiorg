import HeroPage from "../components/Hero/HeroPage";
import partnerLogo1 from "../assets/images/hawai/partners/kids_hurt_too_hawaii.png";
import partnerLogo2 from "../assets/images/hawai/partners/HuioHauula.png";
import partnersImage from "../assets/images/hawai/fondo2.jpg";
import partnerLogo3 from "../assets/images/hawai/partners/HMHB_Horiz_Logo.png";
import partnerLogo4 from "../assets/images/hawai/partners/HL-50Logo.png";
import useScrollToTop from "../hooks/useScrollToTop";
import PartnersSection, {partner} from "../containers/PartnersSection";

const partners: partner[] = [
  {
    logo: partnerLogo2,
    name: "HUI O HAU‘ULA",
    description: "A community-driven collective uniting local businesses, organizations, and outreach programs to empower keiki, \"ohana, and kupuna\". As a Partnership Hub, they expand access to essential services like health, education, food security, and cultural preservation.",
    urlLink: "https://huiohauula.org/"
  },
  {
    logo: partnerLogo1,
    name: "Kids Hurt Too Hawaii",
    description: "Providing free support for children and youth (3-19) facing grief and trauma. Through mentorship, crisis care, and peer groups, they help families heal and rebuild.",
    urlLink: "https://www.kidshurttoo.org/"
  },
  {
    logo: partnerLogo3,
    name: "Healthy Mothers Healthy Babies",
    description: "For over thirty years, Healthy Mothers Healthy Babies has been dedicated to health equity in Hawaiʻi. We are a support system for individuals and families, offering accessible and compassionate care from reproductive health through pregnancy and postpartum care, as well as primary care. At every stage of your health journey, we are here to offer assistance and support to you and your ʻohana.",
    urlLink: "https://www.hmhb-hawaii.org/about"
  },
  {
    logo: partnerLogo4,
    name: "Hawaii Literacy",
    description: "Founded in 1971, Hawaii Literacy's five free programs - Adult Literacy, Bookmobile, English Language Learner, Family Literacy Libraries, and Digital Literacy focus on those with the lowest literacy skills and help underserved children prepare for and succeed in school, give adults a second chance to learn to read and write, and train hundreds of literacy volunteers to teach in our communities. We provide books, mentors, literacy promotion, and the skills needed to achieve life goals.",
    urlLink: "https://www.hawaiiliteracy.org/"
  },
];

const PartnersPage = () => {
  useScrollToTop();
  return (
    <div>
      <HeroPage
        imagen={partnersImage}
        page="Stronger Together: Our Partners"
        description='At Corazon Hawaii, we believe in the power of collaboration. By working alongside dedicated organizations, we expand our impact, providing essential resources, housing solutions, and community support.'
        Breadcrumb={[{ link: "/", nombre: "Home" }]}
      />
      <section className="section">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title mb-4 pb-2">
              <h4 className="title">
                MEET OUR <span className="text-primary fw-bold">PARTNERS</span>{" "}
              </h4>
            </div>
          </div>
        </div>
        <PartnersSection partners={partners} />
      </section>
    </div>
  );
};

export default PartnersPage;
