import React from "react";
import { IconType } from "react-icons";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosPulse } from "react-icons/io";
import { FaHeartPulse, FaHouseMedical } from "react-icons/fa6";
import PersonImg from "../assets/images/charity/person1.png";

interface Detail {
  Icon: IconType;
  Tittle: string;
  number: string;
}

const EstatdictisDetail: Detail[] = [
  {
    Icon: MdOutlineFamilyRestroom,
    Tittle: "Families Housed",
    number: "2102+",
  },
  {
    Icon: GiHealthNormal,
    Tittle: "Healthcare Provided",
    number: "50+",
  },
  {
    Icon: AiOutlineHome,
    Tittle: "Shelter Nights Provided",
    number: "55.76k",
  },
  {
    Icon: IoIosPulse,
    Tittle: "Supported in Medical Respite",
    number: "2102+",
  },
  {
    Icon: FaHeartPulse,
    Tittle: "Unique Individuals Served",
    number: "50+",
  },
  {
    Icon: FaHouseMedical,
    Tittle: "Individuals Housed",
    number: "55.76k",
  },
];

const Estaditics = () => {
  const EstadisticCard = ({ Icon, Tittle, number }: Detail) => {
    return (
      <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
        <div className="features feature-primary text-center pt-3 pb-3">
          <Icon className="h2 color" />
          <div className="content text-muted mt-3">
            <h5>{Tittle}</h5>
            <span className="text-primary fs-3 fw-bold">{number}</span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <div className="ms-lg-4">
            <div className="section-title">
              <span className="text-primary">OUR IMPACT</span>
              <h4 className="title mb-4">
                TRANSFORMING LIVES <br />
                <span className="text-primary">ONE FAMILY AT A TIME</span>
              </h4>
              <p className="text-muted">
                Through our dedicated efforts and community support, we've made
                a significant difference in the lives of homeless families. See
                the impact of our work in numbers.
              </p>
            </div>
            <div className="row">
              {EstatdictisDetail.map((d, index) => (
                <EstadisticCard
                  key={index}
                  Icon={d.Icon}
                  Tittle={d.Tittle}
                  number={d.number}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src={PersonImg} className="img-fluid" alt="Impact Image" />
        </div>
      </div>
    </div>
  );
};

export default Estaditics;
