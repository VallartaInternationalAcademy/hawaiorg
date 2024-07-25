import React from "react";
import image from "../assets/images/charity/cause01.jpg";

const AboutSection = () => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center" id="counter">
          <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="ms-lg-4">
              <div className="section-title">
                <h4 className="title mb-4">
                  HOW DO <span className="text-primary">WE DO IT?</span>
                </h4>
                <p className="text-muted">
                  At{" "}
                  <span className="text-primary fw-bold">Corazon Hawaii</span> ,
                  we utilize a comprehensive approach that addresses the diverse
                  needs of homeless families, providing support in key areas
                  such as housing, health, and education. We work closely with
                  other organizations, government agencies, and the broader
                  community to create a robust support network that offers
                  resources and opportunities to families. We develop
                  personalized action plans for each family, tailoring our
                  services to meet their specific needs and helping them achieve
                  long-term stability. We are committed to advocating for
                  policies and practices that eliminate structural barriers to
                  housing and improve access to essential resources for homeless
                  families. We promote independence and self-sufficiency through
                  educational and skill development programs, helping families
                  acquire the necessary tools to rebuild their lives.
                  Additionally, we implement a continuous monitoring and
                  evaluation system to measure the impact of our programs and
                  continually improve our services
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={image} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
