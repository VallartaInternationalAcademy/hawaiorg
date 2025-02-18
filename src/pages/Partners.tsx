import HeroPage from "../components/Hero/HeroPage";
import partnerLogo1 from "../assets/images/hawai/partners/kids_hurt_too_hawaii.png";
import partnerLogo2 from "../assets/images/hawai/partners/HuioHauula.png";
import partnersImage from "../assets/images/hawai/fondo2.jpg";
import useScrollToTop from "../hooks/useScrollToTop";
import PartnersSection, {partner} from "../containers/PartnersSection";

const partners: partner[] = [
  {
    logo: partnerLogo1,
    name: "Kids Hurt Too Hawaii",
    description: "Providing free support for children and youth (3-19) facing grief and trauma. Through mentorship, crisis care, and peer groups, they help families heal and rebuild.",
  },
  {
    logo: partnerLogo2,
    name: "HUI O HAU‘ULA",
    description: "A community-driven collective uniting local businesses, organizations, and outreach programs to empower keiki, ‘ohana, and kūpuna. As a Partnership Hub, they expand access to essential services like health, education, food security, and cultural preservation.",
  },
];

const PartnersPage = () => {
  useScrollToTop();
  return (
    <div>
      <HeroPage
        imagen={partnersImage}
        page="Stronger Together: Our Partners"
        description='At Corazón Hawaii, we believe in the power of collaboration. By working alongside dedicated organizations, we expand our impact, providing essential resources, housing solutions, and community support.'
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
