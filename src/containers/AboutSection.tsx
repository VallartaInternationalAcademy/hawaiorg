import React from "react";
import image from "../assets/images/hawai/about us 2.jpg";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center" id="counter">
          <div className="col-md-6">
            <img src={image} className="img-fluid" alt="" />
          </div>

          <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="ms-lg-4">
              <div className="section-title">
                <h4 className="title mb-4">
                  ABOUT <span className="text-primary">US</span>
                </h4>
                <p className="text-muted">
                  At{" "}
                  <span className="text-primary fw-bold">Corazon Hawaii</span>,
                  our mission is to empower homeless households to rebuild their
                  lives and reconnect with their community. Through
                  comprehensive housing services and advocacy, we provide
                  essential support to break down barriers to housing and foster
                  lasting change. Our vision guides us towards a future where
                  everyone has a safe, dignified home, and homelessness is
                  eradicated. We envision a society where every individual can
                  live with dignity, security, and opportunity, supported by a
                  united community. With dedication and compassion, we strive to
                  make this vision a reality. Join us in creating a brighter
                  future where homelessness is a thing of the past, and every
                  household can thrive. Together, we can build a community where
                  everyone has the chance to flourish and contribute to a better
                  tomorrow
                </p>
                <Link to={"/donation"} className="btn btn-primary mt-3">
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
