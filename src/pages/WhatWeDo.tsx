import React from "react";
import wdwdImage from "../assets/images/hawai/fondo2.jpg";
import HeroPage from "../components/Hero/HeroPage";
import ServiceCard from "../components/cards/ServiceCard";
import { BsHouse } from "react-icons/bs";
import { PiHeartbeat, PiHandshake } from "react-icons/pi";
import { CiMedicalClipboard } from "react-icons/ci";
import HowDoItSection from "../containers/HowDoItSection";
import Estaditics from "../containers/Estaditics";
import DonateSection from "../containers/DonateSection";
import useScrollToTop from "../hooks/useScrollToTop";

const WhatWeDo = () => {
  useScrollToTop();
  return (
    <div>
      <HeroPage
        imagen={wdwdImage}
        page="MAKING A DIFFERENCE"
        description="Empowering families, building futures: Join us in making homelessness a thing of the past."
        Breadcrumb={[{ link: "/", nombre: "Home" }]}
      />
      <div className="container mt-100 mt-60">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="section-title mb-4 pb-2">
              <h4 className="title mb-4">
                Our <span className="text-primary fw-bold">Services</span>
              </h4>
              <p className="text-muted para-desc mb-0 mx-auto">
                At Corazon Hawaii, we provide comprehensive support to homeless
                families and individuals, helping them achieve stability and
                rebuild their lives with dignity and hope. Our dedicated team
                ensures that each person receives the care and assistance they
                need for lasting change.
              </p>
            </div>
          </div>
        </div>
        <div className="row flex-row justify-content-center">
          <ServiceCard
            Icon={BsHouse}
            service="Housing Navigation"
            descripcion="Assisting homeless
            families in finding stable
            and secure housing
            options"
            link="/services/1"
          />
          <ServiceCard
            Icon={PiHeartbeat}
            service="Housing Retention"
            descripcion="Housing Retention provides ongoing support to help households maintain stability and prevent future homelessness"
            link="/services/2"
          />
          <ServiceCard
            Icon={CiMedicalClipboard}
            service="Rapid Rehousing and Homeless Prevention"
            descripcion="This service assists families in quickly securing stable housing and preventing homelessness through tailored support and resource coordination"
            link="/services/3"
          />
        </div>
      </div>
      <section className="section">
        <HowDoItSection />
      </section>
      <section className="section">
        <Estaditics />
      </section>
      <DonateSection />
    </div>
  );
};

export default WhatWeDo;
