import { IconType } from "react-icons";
import MainImage1 from "../assets/images/hawai/HousingNavigation2.png";
import MainImage2 from "../assets/images/hawai/SHELTER AND SUPPORT.png";
import MainImage3 from "../assets/images/hawai/RECUPERATIVE CARE.png";
import MainImage4 from "../assets/images/hawai/HEALTHCARE2.png";
import subImage1 from "../assets/images/hawai/HousingNavigation.png";
import subImage2 from "../assets/images/hawai/SHELTER AND SUPPORT (2).png";
import subImage3 from "../assets/images/hawai/RECUPERATIVE CARE (2).png";
import subImage4 from "../assets/images/hawai/HEALTHCARE.png";
import { FaTasks } from "react-icons/fa";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { CiLink } from "react-icons/ci";
import { SiWechat } from "react-icons/si";
import { CiMedicalCase } from "react-icons/ci";
import { FiRefreshCcw } from "react-icons/fi";
import { MdOutlinePsychology } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { CiMedicalCross } from "react-icons/ci";
import { FaUserGear } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiCampingTent } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { BsHouses } from "react-icons/bs";
import serviceImage1 from "../assets/images/charity/service1.png";
import serviceImage2 from "../assets/images/charity/service2.png";
import serviceImage3 from "../assets/images/charity/service3.png";
import serviceImage4 from "../assets/images/charity/service4.png";

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
      "Housing Navigation helps homeless families find stable and secure housing by guiding them through every step of the process.",
    Service: "HOUSING NAVIGATION",
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
        Icon: FaTasks,
      },
      {
        title: "Advocacy Skills:",
        description:
          "Advocating for clients, negotiating with landlords, and overcoming barriers like discrimination or eviction.",
        Icon: CiLink,
      },
      {
        title: "Networking:",
        description:
          "Building relationships with landlords and agencies to increase housing opportunities for families.",
        Icon: HiOutlineMagnifyingGlass,
      },
      {
        title: "Documentation and Record-Keeping:",
        description:
          "Maintaining accurate records of housing searches, applications, and client interactions for tracking progress.",
        Icon: SiWechat,
      },
    ],
  },
  {
    id: "2",
    MainImage: MainImage2,
    Tittle: "Stay Secure, Stay Safe",
    MainDescripcion:
      "Housing Retention provides ongoing support to help households maintain stability and prevent future homelessness.",
    Service: "HOUSING RETENTION",
    text: "Our Housing Retention service is dedicated to keeping families securely housed, providing continuous support to maintain stability. We work closely with families to address any issues that may threaten their housing, offering crisis intervention when needed, and empowering them with the skills necessary for long-term independence. Our goal is to ensure that once families find housing, they can stay there, living securely and safely.",
    benefits: ["Ensure Stability", "Crisis Response", "Build Independence"],
    subImage: subImage2,
    serviceImage: serviceImage2,
    services: [
      {
        title: "Supportive Services:",
        description:
          "Offering ongoing assistance with budgeting, resource access, and conflict resolution to maintain housing stability.",
        Icon: GiCampingTent,
      },
      {
        title: "Crisis Intervention:",
        description:
          "Responding swiftly to crises like job loss or emergencies to prevent housing instability.",
        Icon: FaUserGear,
      },
      {
        title: "Follow-Up and Monitoring:",
        description:
          "Regular check-ins to assess housing situations, resolve issues, and prevent housing loss.",
        Icon: FaHandsHelping,
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
      "This service assists families in quickly securing stable housing and preventing homelessness through tailored support and resource coordination",
    Service: "RAPID REHOUSING AND HOMELESS PREVENTION",
    text: "Rapid Rehousing and Homeless Prevention services are designed to quickly address the housing needs of families facing homelessness. By providing fast, tailored interventions, we help families secure stable housing and prevent them from falling into homelessness. We also focus on long-term solutions, ensuring that families can maintain their housing and avoid future crises.",
    subImage: subImage3,
    serviceImage: serviceImage3,
    benefits: ["Quick Solutions", "Personalized Plans", "Lasting Stability"],
    services: [
      {
        title: "Assessment and Case Management:",
        description:
          "Developing personalized housing plans and ongoing case management to secure and maintain stability.",
        Icon: IoShieldCheckmarkOutline,
      },
      {
        title: "Housing Navigation:",
        description:
          "Using knowledge of resources to help households find safe, affordable housing options.",
        Icon: CiMedicalCross,
      },
      {
        title: "Resource Coordination:",
        description:
          "Coordinating with providers to meet clients’ needs in healthcare, mental health, and employment.",
        Icon: FaUserGear,
      },
      {
        title: "Problem-Solving:",
        description:
          "Overcoming barriers to housing stability with creative, effective solutions.",
        Icon: MdOutlineSupportAgent,
      },
    ],
  },
];

export const getDataByid = (id: string): ServiceType | undefined => {
  return Services.find((item) => item.id == id);
};
