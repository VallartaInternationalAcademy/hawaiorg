import React from "react";
import Hero from "../components/Hero/HeroMain";
import FeatureCard from "../components/cards/FeatureCard";
import { PiTargetDuotone } from "react-icons/pi";
import { BsEye } from "react-icons/bs";
import { RiHandHeartLine } from "react-icons/ri";
import aboutUs from "../assets/images/hawai/About3.png";
import Gallery from "../containers/Gallery";
import Histories from "../containers/Histories";
import { Link } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";
import g2 from "../assets/images/hawai/gallery/galery1.jpg";
import g3 from "../assets/images/charity/g3.jpg";
import g4 from "../assets/images/hawai/gallery/galery8.png";
import g5 from "../assets/images/hawai/gallery/galery2.jpg";
import g6 from "../assets/images/hawai/gallery/galery3.jpg";
import g7 from "../assets/images/hawai/gallery/galery4.jpg";
import g8 from "../assets/images/hawai/gallery/galery5.jpg";
import g9 from "../assets/images/hawai/gallery/galery6.jpg";
import g10 from "../assets/images/hawai/gallery/galery7.jpg";

const HomePage: React.FC = () => {
  const images = [g2, g3, g4, g5, g6, g7, g8, g9, g10];

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
            icon={BsEye}
            title="Our Mission"
            text="Our mission is to
            empower homeless
            households to rebuild their
            lives and reconnect with
            their community. We
            provide comprehensive
            support through housing
            services and advocacy
            to foster lasting change
            and remove barriers to
            housing."
          />

          <FeatureCard
            icon={RiHandHeartLine}
            title="Our Goal"
            text="Our goal is to develop a sustainable system that guarantees safe, stable housing for all households experiencing homelessness. This will be achieved through accessible housing programs, tailored support services, and collaborative partnerships."
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
                  Corazon Hawaii is a nonprofit organization that helps to
                  empower homeless households to rebuild their lives, rediscover
                  their identities, and reconnect with their community.
                  <br /> <br />
                  Corazon Hawaii will walk alongside homeless households on
                  their journey toward well-being, a word defined as the state
                  of being happy, healthy, or prosperous which is aligned with
                  the State of Hawaii Department of Human Services Ohana Nui.
                  Ohana Nui is a proven approach that capitalizes on Hawaii’s
                  unique multigenerational family structure and provides a
                  framework for human service delivery that positions whole
                  families for a chance at greater well-being. Translated as
                  extended or large family, Ohana Nui is an adaptation of the
                  national two-generation approach.
                  <br />
                  <br />
                  Corazon Hawaii will help homeless households focus on their
                  future, through housing navigation, housing retention, and
                  housing stabilization. We connect households with housing
                  while providing wraparound services to increase their
                  opportunities to build the skills and confidence to change
                  their circumstances for good.
                  <br />
                  <br />
                  We believe in community that allows all people an equal chance
                  to live a full life and until that happens, Corazon Hawaii
                  will continue to be their voice for systemic change. Through
                  our services, active advocacy, fundraising initiatives, and
                  our culture of ingrained respect, we will bring an end to
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
      {/* <section className="section">
        <DonateSection />
      </section>    */}

      {/* HISTORIES */}
      <div className="mb-5">
        <Histories />
      </div>
    </div>
  );
};

export default HomePage;
