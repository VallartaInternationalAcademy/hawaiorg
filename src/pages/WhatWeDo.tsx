import React from "react";
import wdwdImage from "../assets/images/charity/cta.jpg";
import HeroPage from "../components/Hero/HeroPage";
import ServiceCard from "../components/cards/ServiceCard";
import { BsHouse } from "react-icons/bs";
import { PiHeartbeat, PiHandshake } from "react-icons/pi";
import { CiMedicalClipboard } from "react-icons/ci";
import HowDoItSection from "../containers/HowDoItSection";
import Estaditics from "../containers/Estaditics";
import DonateSection from "../containers/DonateSection";

const WhatWeDo = () => {
  return (
    <div>
      <HeroPage
        imagen={wdwdImage}
        page="MAKING A DIFFERENCE"
        description="mpowering families, building futures: Join us in making homelessness a thing of the past."
        Breadcrumb={[
          { link: "/", nombre: "Home" },
          { link: "what-do-we-do", nombre: "What do we do" },
        ]}
      />
      <div className="container mt-100 mt-60">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="section-title mb-4 pb-2">
              <h4 className="title mb-4">
                Our <span className="text-primary fw-bold">Services</span>
              </h4>
              <p className="text-muted para-desc mb-0 mx-auto">
                Start working with Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Enim, minima error voluptas facilis voluptates
                tenetur accusantium laboriosam, pariatur non, veniam veritatis?
                Laudantium, repudiandae perferendis?
              </p>
            </div>
          </div>
        </div>
        <div className="row">
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
            service="Healthcare"
            descripcion="Providing access to
            essential healthcare
            services to ensure the
            well-being of individuals
            and families."
            link="/services/2"
          />
          <ServiceCard
            Icon={CiMedicalClipboard}
            service="Medical Respite and Recuperative Care"
            descripcion="Offering a safe place for
            homeless individuals to
            recover and receive medical
            care after hospital discharge."
            link="/services/3"
          />
          <ServiceCard
            Icon={PiHandshake}
            service="Shelter and Support"
            descripcion="Providing temporary shelter and
            comprehensive support to help
            families transition from
            homelessness to permanent
            housing."
            link="/services/4"
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
