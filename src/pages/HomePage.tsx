import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero/HeroMain";
import FeatureCard from "../components/cards/FeatureCard";
import { PiTargetDuotone } from "react-icons/pi";
import { BsEye } from "react-icons/bs";
import { RiHandHeartLine } from "react-icons/ri";
import aboutUs from "../assets/images/charity/about.png";
import Gallery from "../containers/Gallery";
import Histories from "../containers/Histories";
import DonateSection from "../containers/DonateSection";
import { Link } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";
import g1 from "../assets/images/charity/g1.jpg";
import g2 from "../assets/images/charity/g2.jpg";
import g3 from "../assets/images/charity/g3.jpg";
import g4 from "../assets/images/charity/g4.jpg";
import g5 from "../assets/images/charity/g5.jpg";
import g6 from "../assets/images/charity/g6.jpg";
import g7 from "../assets/images/charity/g7.jpg";

const HomePage: React.FC = () => {
  const images = [g1, g2, g3, g4, g5, g6, g7, g1, g2];
  useScrollToTop();
  return (
    <div>
      <Hero />
      {/* Resto del contenido */}
      <div className="container">
        <div className="row">
          <FeatureCard
            icon={PiTargetDuotone}
            title="Our Vision"
            text="Our mission is to
            empower homeless
            families to rebuild their
            lives and reconnect with
            their community. We
            provide comprehensive
            support through housing
            services and advocacy
            to foster lasting change
            and remove barriers to
            housing.."
          />
          <FeatureCard
            icon={BsEye}
            title="Our Mission"
            text="Our vision is a future
            where everyone has a
            safe, dignified home and
            homelessness is
            eradicated. We aspire to
            a society where every
            individual can live with
            dignity, security, and
            opportunity, supported
            by a united community."
          />
          <FeatureCard
            icon={RiHandHeartLine}
            title="Our Goal"
            text="Our objective is to create
            a sustainable system
            that ensures all homeless
            individuals can access
            safe, stable housing.
            Through accessible
            housing programs,
            personalized services,
            and strategic
            partnerships"
          />
        </div>
      </div>
      {/* ABOUT US */}
      <section className="section">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="me-lg-5">
                <img src={aboutUs} className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="section-title">
                <h6 className="fw-normal text-primary">ABOUT US</h6>
                <h4 className="title mb-4">
                  Our Highest Ambition <br /> is to Help People
                </h4>

                <p className="text-muted mb-0">
                  Corazon Hawaii is a nonprofit organization that helps
                  toempower homeless households to rebuild their lives,
                  rediscover their identities, and reconnect with their
                  community. <br /> <br />
                  Corazon Hawaii will walk alongside homeless households on
                  their journey toward well-being a word defined as the state of
                  being happy, healthy, or prosperous which is aligned with the
                  State of Hawaii Department of Human Services Ohana Nui. Ohana
                  Nui is a proven approach that capitalizes on Hawaii’sunique
                  multigenerational family structure and provides a framework
                  for human service delivery that positions whole families for a
                  chance at greater well-being. Translated as extended or large
                  family, Ohana Nui is an adaptation of the national
                  two-generation approach. Corazon Hawaii will help homeless
                  households focus on theirfuture, through housing navigation,
                  housing retention, and housing stabilization. We connect
                  households with housingwhile providing wraparound services to
                  increase their opportunities to build the skills and
                  confidence to change their circumstances for good. <br />{" "}
                  <br />
                  We believe in community that allows all people an equal chance
                  to live a full life and until that happens, Corazon Hawaii
                  will continue to be their voice for systemic change. Through
                  ourservices, active advocacy, fundraising initiatives, and our
                  culture of ingrained respect, we will bring an end to
                  homelessness in our community.
                </p>

                <div className="mt-4">
                  <Link to="about" className="btn btn-pills btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End ABOUT US */}
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title fw-semibold mb-4">Capturing Compassion</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  A Glimpse into Our Efforts to Empower and Uplift Our Community
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Gallery */}
        <div className="container">
          <Gallery images={images} />
        </div>
      </section>

      {/* Donate Banner */}
      <section className="section">
        <DonateSection />
      </section>

      {/* HISTORIES */}
      <div className="mb-5">
        <Histories />
      </div>
    </div>
  );
};

export default HomePage;
