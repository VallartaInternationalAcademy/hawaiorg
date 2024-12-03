import { IconType } from "react-icons";
import MainImage1 from "../assets/images/hawai/Services/HousingNavigation.png";
import MainImage2 from "../assets/images/hawai/Services/HR1.png";
import MainImage3 from "../assets/images/hawai/Services/RP1.png";
import MainImage4 from "../assets/images/hawai/Services/fac.png";
import subImage1 from "../assets/images/hawai/Services/HousingNavigation2.png";
import subImage2 from "../assets/images/hawai/Services/HR2.png";
import subImage3 from "../assets/images/hawai/Services/RP2.png";
import { FaUsersViewfinder, FaHandshakeSimple } from "react-icons/fa6";
import { GoLaw } from "react-icons/go";
import { FaNetworkWired, FaHandshake } from "react-icons/fa";
import {
  MdCrisisAlert,
  MdOutlineAssessment,
  MdOutlineAutoFixHigh,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { RiCommunityLine, RiUserFollowLine } from "react-icons/ri";
import { BsHouses, BsHouseCheck } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";

import serviceImage2 from "../assets/images/hawai/Services/HR3.png";
import serviceImage3 from "../assets/images/hawai/Services/fac1.png";
import ServiceCard4 from "../assets/images/hawai/Services/RP3.png";
import serviceImage4 from "../assets/images/hawai/Services/HousingNavigation3.png";
import serviceImage5 from "../assets/images/hawai/Services/fac2.png";
import { AiOutlineFileSearch } from "react-icons/ai";

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
      "We provide homeless households with comprehensive guidance throughout the housing search process, ensuring they find stable and secure housing. Our team offers personalized support, from identifying opportunities to negotiating leases, making the transition to permanent housing smoother and more successful.",
    Service: "HOUSING \n *NAVIGATION*",
    text: "We guide homeless households every step of the way to secure stable and safe housing. Through personalized support, we connect them with the resources they need, helping them overcome barriers and transition from homelessness to permanent housing. Our approach ensures that each family finds a place they can call home, with less stress and more confidence in their future.",
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
          "Understanding available housing options and programs to connect households with safe, affordable housing.",
        Icon: FaUsersViewfinder,
      },
      {
        title: "Advocacy Skills:",
        description:
          "Advocating for households, negotiating with landlords, and overcoming barriers like discrimination or eviction.",
        Icon: GoLaw,
      },
      {
        title: "Networking:",
        description:
          "Building relationships with landlords and agencies to increase housing opportunities for households.",
        Icon: FaNetworkWired,
      },
    ],
  },
  {
    id: "2",
    MainImage: MainImage2,
    Tittle: "Stay Secure, Stay Safe",
    MainDescripcion:
      "We offer ongoing, tailored support to help households maintain their housing stability and avoid future homelessness. By providing resources and assistance to address challenges, we ensure that households can remain securely housed and continue building a stable, independent future.",
    Service: "HOUSING \n *RETENTION*",
    text: "Our Housing Retention service is dedicated to keeping households securely housed, providing continuous support to maintain stability. We work closely with households to address any issues that may threaten their housing, offering crisis intervention when needed, and empowering them with the skills necessary for long-term independence. Our goal is to ensure that once households find housing, they can stay there, living securely and safely.",
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
      "We quickly intervene to help households secure safe, stable housing and prevent homelessness. Through personalized housing plans and coordinated resources, we ensure that households not only find housing but also maintain long-term stability, avoiding future crises.",
    Service: "RAPID REHOUSING AND HOMELESS *PREVENTION*",
    text: "Rapid Rehousing and Homeless Prevention services are designed to quickly address the housing needs of households facing homelessness. By providing fast, tailored interventions, we help households secure stable housing and prevent them from falling into homelessness. We also focus on long-term solutions, ensuring that households can maintain their housing and avoid future crises.",
    subImage: subImage3,
    serviceImage: ServiceCard4,
    benefits: [
      "Quick Solutions",
      "Personalized Housing Plans",
      "Lasting Stability",
    ],
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
          "Coordinating with providers to meet households needs with healthcare, mental health, and employment.",
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
  {
    id: "4",
    MainImage: MainImage4,
    Tittle:
      "Family Assessment Center: Stability and Support for Your Household",
    MainDescripcion:
      "At the Family Assessment Center, we are dedicated to providing personalized and ongoing support to help families maintain housing stability and avoid the risks of homelessness. Our tailored approach focuses on understanding your unique needs and challenges, connecting you to vital resources, and empowering you to build a stable, independent future.",
    Service: "Family Assessment Center",
    text: "The Family Assessment Center (FAC) uses a Housing First (HF) approach to provide immediate temporary housing for families in need, helping them quickly transition to stable, permanent housing. FAC removes barriers, assists with housing searches, and connects families to income, benefits, and community resources for stability. There are no entry requirements like sobriety or treatment completion. Staff support families in creating housing plans, gathering documents, securing income, and finding housing, while also offering training in tenancy skills. The HF model has minimal rules, with discharges only for serious safety issues.",
    subImage: serviceImage3,
    serviceImage: serviceImage5,
    benefits: [
      "Housing Stability",
      "Comprehensive Support",
      "Long-term Independence",
    ],
    services: [
      {
        title: "Crisis Intervention and Advocacy:",
        description:
          "Our team offers immediate support during crises, advocating for families to access necessary resources and navigate complex systems with ease.",
        Icon: MdOutlineSupportAgent,
      },
      {
        title: "Resource and Referral Services:",
        description:
          "We connect families to community-based resources, including childcare, healthcare, employment assistance, and educational programs, to build a solid foundation for stability.",
        Icon: RiCommunityLine,
      },
      {
        title: "Skills Development and Education:",
        description:
          "Through workshops and one-on-one sessions, we empower families with financial literacy, parenting skills, and job readiness, fostering independence and resilience.",
        Icon: HiOutlineLightBulb,
      },
      {
        title: "Assessment and Case Management:",
        description:
          "We create personalized family plans and provide ongoing case management to address unique challenges, ensuring every household can secure and sustain stable housing.",
        Icon: AiOutlineFileSearch,
      },
    ],
  },
];

export const getDataByid = (id: string): ServiceType | undefined => {
  return Services.find((item) => item.id == id);
};
