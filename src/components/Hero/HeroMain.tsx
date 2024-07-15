import React from "react";
import bgImage from "../../assets/images/charity/bg.jpg";
import overlayImage from "../../assets/images/overlay.png";

const Hero: React.FC = () => {
  return (
    <section
      className="bg-half-260 d-table w-100 position-relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center center",
      }}
    >
      <div
        className="position-absolute w-100 h-100"
        style={{ zIndex: 1 }}
      ></div>
      <div
        className="bg-overlay bg-linear-gradient-3 position-absolute w-100 h-100"
        style={{ opacity: 0.9, zIndex: 2 }}
      ></div>
      <div className="container position-relative" style={{ zIndex: 3 }}>
        <div className="row mt-5 mt-md-4">
          <div className="col-12">
            <div className="title-heading">
              <h5 className="fw-bold text-white title-dark">
                <i className="mdi mdi-heart text-danger align-middle"></i>{" "}
                CORAZON HAWAI
              </h5>
              <h4 className="display-3 my-4 fw-bold text-white title-dark">
                REBUILDING LIVES, RESTORING DIGNITY: YOUR PARTNER IN ENDING
                HOMELESSNES
              </h4>
              <p className="para-desc text-white-50">
                Help us make a difference. Donate today to provide safe housing
                and support services
              </p>
              <div className="mt-4">
                <a
                  href="/"
                  className="btn btn-lg btn-primary rounded-pill mt-1 me-2"
                >
                  Donate Now
                </a>
                <a
                  href="/"
                  className="btn btn-lg btn-outline-primary rounded-pill mt-1"
                >
                  View Causes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
