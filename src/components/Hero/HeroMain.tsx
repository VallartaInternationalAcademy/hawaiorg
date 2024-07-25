import React from "react";
import bgImage from "../../assets/images/charity/Y2meta.app-UNICEF-_-for-every-child-_1080p_.gif";
import { Link } from "react-router-dom";

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
                CORAZON HAWAII
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
                <Link
                  to={"page_no_found/"}
                  className="btn btn-lg btn-primary rounded-pill mt-1 me-2"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
