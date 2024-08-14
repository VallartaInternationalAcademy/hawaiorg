import { IconType } from "react-icons";
import MainImage1 from "../assets/images/hawai/Services/HousingNavigation.png";
import MainImage2 from "../assets/images/hawai/Services/HousingRetention.png";
import MainImage3 from "../assets/images/hawai/Services/RAPID_REHOUSING_AND_HOMELESS_PREVENTION.png";
import subImage1 from "../assets/images/hawai/Services/HousingNavigation2.png";
import subImage2 from "../assets/images/hawai/Services/HousingRetention2.png";
import subImage3 from "../assets/images/hawai/Services/RapidRehousing2.png";
import { FaUsersViewfinder, FaHandshakeSimple } from "react-icons/fa6";
import { GoLaw } from "react-icons/go";
import { FaNetworkWired, FaHandshake } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import {
  MdCrisisAlert,
  MdOutlineAssessment,
  MdOutlineAutoFixHigh,
} from "react-icons/md";
import { RiUserFollowLine } from "react-icons/ri";
import { BsHouses, BsHouseCheck } from "react-icons/bs";

import serviceImage2 from "../assets/images/hawai/Services/HousingRetention3.png";
import serviceImage3 from "../assets/images/hawai/Services/RapidRehousing3.png";
import serviceImage4 from "../assets/images/hawai/Services/HousingNavigation3.png";

export interface cardInfo {
  title: string;
  Icon: IconType;
  description: string;
}

interface ServiceType {
  id: string;
  MainImage: string;
  Tittle: string;
  MainDescripcion: string;
  Service: string;
  text: string;
  subImage: string;
  serviceImage: string;
  services: cardInfo[];
  benefits?: string[];
}

const Services: ServiceType[] = [
  {
    id: "1",
    MainImage: MainImage1,
    Tittle: "Find Your Way Home",
    MainDescripcion:
      "We provide homeless families with comprehensive guidance throughout the housing search process, ensuring they find stable and secure housing. Our team offers personalized support, from identifying opportunities to negotiating leases, making the transition to permanent housing smoother and more successful.",
    Service: "HOUSING \n *NAVIGATION*",
    text: "We guide homeless families every step of the way to secure stable and safe housing. Through personalized support, we connect them with the resources they need, helping them overcome barriers and transition from homelessness to permanent housing. Our approach ensures that each family finds a place they can call home, with less stress and more confidence in their future.",
    benefits: [
      "Expand Your Options",
      "Tailored Guidance",
      "Stress-Free Process",
    ],
    subImage: subImage1,
    serviceImage: serviceImage4,
    services: [
      {
        title: "Knowledge of Housing Resources:",
        description:
          "Understanding available housing options and programs to connect families with safe, affordable housing.",
        Icon: FaUsersViewfinder,
      },
      {
        title: "Advocacy Skills:",
        description:
          "Advocating for clients, negotiating with landlords, and overcoming barriers like discrimination or eviction.",
        Icon: GoLaw,
      },
      {
        title: "Networking:",
        description:
          "Building relationships with landlords and agencies to increase housing opportunities for families.",
        Icon: FaNetworkWired,
      },
      {
        title: "Documentation and Record-Keeping:",
        description:
          "Maintaining accurate records of housing searches, applications, and client interactions for tracking progress.",
        Icon: IoDocumentTextOutline,
      },
    ],
  },
  {
    id: "2",
    MainImage: MainImage2,
    Tittle: "Stay Secure, Stay Safe",
    MainDescripcion:
      "We offer ongoing, tailored support to help families maintain their housing stability and avoid future homelessness. By providing resources and assistance to address challenges, we ensure that families can remain securely housed and continue building a stable, independent future.",
    Service: "HOUSING \n *RETENTION*",
    text: "Our Housing Retention service is dedicated to keeping families securely housed, providing continuous support to maintain stability. We work closely with families to address any issues that may threaten their housing, offering crisis intervention when needed, and empowering them with the skills necessary for long-term independence. Our goal is to ensure that once families find housing, they can stay there, living securely and safely.",
    benefits: ["Ensure Stability", "Crisis Response", "Build Independence"],
    subImage: subImage2,
    serviceImage: serviceImage2,
    services: [
      {
        title: "Supportive Services:",
        description:
          "Offering ongoing assistance with budgeting, resource access, and conflict resolution to maintain housing stability.",
        Icon: FaHandshake,
      },
      {
        title: "Crisis Intervention:",
        description:
          "Responding swiftly to crises like job loss or emergencies to prevent housing instability.",
        Icon: MdCrisisAlert,
      },
      {
        title: "Follow-Up and Monitoring:",
        description:
          "Regular check-ins to assess housing situations, resolve issues, and prevent housing loss.",
        Icon: RiUserFollowLine,
      },
      {
        title: "Empowerment and Skill-Building:",
        description:
          "Helping households develop skills and resources for long-term housing stability and independence.",
        Icon: BsHouses,
      },
    ],
  },
  {
    id: "3",
    MainImage: MainImage3,
    Tittle: "Prevent Homelessness, Fast",
    MainDescripcion:
      "We quickly intervene to help families secure safe, stable housing and prevent homelessness. Through personalized plans and coordinated resources, we ensure that families not only find housing but also maintain long-term stability, avoiding future crises.",
    Service: "RAPID REHOUSING AND HOMELESS *PREVENTION*",
    text: "Rapid Rehousing and Homeless Prevention services are designed to quickly address the housing needs of families facing homelessness. By providing fast, tailored interventions, we help families secure stable housing and prevent them from falling into homelessness. We also focus on long-term solutions, ensuring that families can maintain their housing and avoid future crises.",
    subImage: subImage3,
    serviceImage: serviceImage3,
    benefits: ["Quick Solutions", "Personalized Plans", "Lasting Stability"],
    services: [
      {
        title: "Assessment and Case Management:",
        description:
          "Developing personalized housing plans and ongoing case management to secure and maintain stability.",
        Icon: MdOutlineAssessment,
      },
      {
        title: "Housing Navigation:",
        description:
          "Using knowledge of resources to help households find safe, affordable housing options.",
        Icon: BsHouseCheck,
      },
      {
        title: "Resource Coordination:",
        description:
          "Coordinating with providers to meet clients’ needs in healthcare, mental health, and employment.",
        Icon: FaHandshakeSimple,
      },
      {
        title: "Problem-Solving:",
        description:
          "Overcoming barriers to housing stability with creative, effective solutions.",
        Icon: MdOutlineAutoFixHigh,
      },
    ],
  },
];

export const getDataByid = (id: string): ServiceType | undefined => {
  return Services.find((item) => item.id == id);
};
