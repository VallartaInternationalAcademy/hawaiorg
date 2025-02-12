import HeroPage from "../components/Hero/HeroPage";
import partnerLogo1 from "../assets/images/hawai/partners/kids_hurt_too_hawaii.png";
import partnersImage from "../assets/images/hawai/fondo2.jpg";
import useScrollToTop from "../hooks/useScrollToTop";
import PartnersSection, {partner} from "../containers/PartnersSection";

const partners: partner[] = [
  {
    logo: partnerLogo1,
    name: " Kids Hurt Too Hawaii",
    description: "Providing free support for children and youth (3-19) facing grief and trauma. Through mentorship, crisis care, and peer groups, they help families heal and rebuild.",
  },
];

const PartnersPage = () => {
  useScrollToTop();
  return (
    <div>
      <HeroPage
        imagen={partnersImage}
        page="PARTNERS"
        description='Our name, "Corazon," translates to "heart" in Spanish, reflecting the deep compassion and unwavering commitment that drives our efforts to support and uplift our community. Choosing the name "Corazon" was a deliberate and meaningful decision. It symbolizes the heart and soul we put into our work, the love and care we extend to each family we serve, and the belief that a community united by compassion can achieve great things.
'
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
