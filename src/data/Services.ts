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

interface cardInfo {
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
}

const Services: ServiceType[] = [
  {
    id: "1",
    MainImage: MainImage1,
    Tittle: "GUIDING FAMILIES HOME",
    MainDescripcion:
      "Helping homeless families find stable and secure housing through personalized guidance and support.",
    Service: "HOUSING NAVIGATION",
    text: "Housing Navigation plays a crucial role in assisting homeless families by guiding them through the complex journey of finding stable and secure housing options. Our dedicated team provides comprehensive support throughout every step of the housing search process, starting from assessing individual needs and preferences to actively identifying suitable housing opportunities. We offer expert guidance and practical assistance during lease negotiations and the finalization of contracts, ensuring that families transition into safe and sustainable living environments with confidence and support",
    subImage: subImage1,
    serviceImage: serviceImage4,
    services: [
      {
        title: "Needs Assessment",
        description:
          "Assess each family's housing needs and preferences comprehensively.",
        Icon: FaTasks,
      },
      {
        title: "Resource Connection",
        description:
          "Connect families with housing assistance programs and resources",
        Icon: CiLink,
      },
      {
        title: "Search Support",
        description:
          "Aid in actively searching for suitable and affordable housing",
        Icon: HiOutlineMagnifyingGlass,
      },
      {
        title: "Advisory",
        description:
          "Provide advice and support during lease negotiations and signing.",
        Icon: SiWechat,
      },
    ],
  },
  {
    id: "2",
    MainImage: MainImage2,
    Tittle: "SHELTERING HOPE",
    MainDescripcion:
      "Providing Safe Havens and Comprehensive Support for Families in Need",
    Service: "SHELTER AND SUPPORT",
    text: "Providing temporary shelter and comprehensive support to help families transition from homelessness to permanent housing is a critical initiative. Our program offers a safe and stable environment wherefamilies can find respite and support during their journey towards securing sustainable housing solutions.Beyond shelter, we provide personalized case management to address immediate needs, offer access to educational and vocational resources, and facilitate connections to community services. By fostering a supportive network and empowering families with the tools and resources they need, we aim to ensure asmooth and successful transition, ultimately helping them rebuild their lives with dignity and security",
    subImage: subImage2,
    serviceImage: serviceImage2,
    services: [
      {
        title: "Temporary Shelter",
        description: "Offer safe and comfortable temporary housing.",
        Icon: GiCampingTent,
      },
      {
        title: "Case Management",
        description:
          "Provide individualized case management services to address immediate needs.",
        Icon: FaUserGear,
      },
      {
        title: "Support Services",
        description:
          "Deliver meals, hygiene facilities, and access to educational and vocational resources.",
        Icon: FaHandsHelping,
      },
      {
        title: "Housing Transition",
        description:
          "Assist families in securing permanent housing through navigation and support services.",
        Icon: BsHouses,
      },
    ],
  },
  {
    id: "3",
    MainImage: MainImage3,
    Tittle: "RESTORING HEALTH WITH DIGNITY",
    MainDescripcion:
      "Providing a safe place for homeless individuals to recover and receive medical care after hospital discharge",
    Service: "MEDICAL RESPITE AND \n RECUPERATIVE CARE",
    text: "Providing a safe place for homeless individuals to recover and receive medical care after hospital discharge is a vital service known as Medical Respite and Recuperative Care. This program offers a compassionate and supportive environment where individuals experiencing homelessness can heal from medical conditions or surgeries. Our dedicated team ensures that each person receives personalized care tailored to their recovery needs, including access to necessary medical treatments, therapies, and rehabilitation services. Beyond physical recovery, we prioritize emotional well-being by fostering a nurturing atmosphere that promotes healing and stability. Through comprehensive case management, we facilitate a seamless transition from medical respite to ongoing healthcare services and, ultimately, to sustainable housin solution",
    subImage: subImage3,
    serviceImage: serviceImage3,
    services: [
      {
        title: "Safe Environment",
        description: "Ensure a safe and supportive recovery environment.",
        Icon: IoShieldCheckmarkOutline,
      },
      {
        title: "Medical Care",
        description: "Administer essential medical treatments and therapies",
        Icon: CiMedicalCross,
      },
      {
        title: "Case Management",
        description:
          "Provide personalized care coordination for a smooth transition to stable housing.",
        Icon: FaUserGear,
      },
      {
        title: "Recovery Support",
        description:
          "Offer social services and support for recuperation and well- being",
        Icon: MdOutlineSupportAgent,
      },
    ],
  },
  {
    id: "4",
    MainImage: MainImage4,
    Tittle: "HEALTHCARE SERVICE",
    MainDescripcion:
      "Providing essential healthcare services to homeless families and individuals for physical and mental wellness.",
    Service: "HEALTHCARE SERVICE",
    text: "We ensure that homeless families and individuals have access to essential healthcare services, addressing both their physical and mental well-being. Our comprehensive healthcare initiatives encompass initial medical assessments to identify urgent health needs, continuous medical care through partnerships with clinics and mobile health services, specialized psychological support to address mental health challenges, and the implementation of preventive health education programs to promote long-term wellness. These efforts aim to safeguard the health of our community members,providing vital care and support to those most in need",
    subImage: subImage4,
    serviceImage: serviceImage1,
    services: [
      {
        title: "Medical Assessments",
        description:
          "Conduct initial medical evaluations to identify urgent health needs.",
        Icon: CiMedicalCase,
      },
      {
        title: "Ongoing Medical Care",
        description:
          "Provide continuous access to care through clinics and mobile services",
        Icon: FiRefreshCcw,
      },
      {
        title: "Psychological Support",
        description: "Offer mental health services and emotional support",
        Icon: MdOutlinePsychology,
      },
      {
        title: "Prevention Programs",
        description: "Implement health education to promote healthy habits.",
        Icon: FaUserCheck,
      },
    ],
  },
];

export const getDataByid = (id: string): ServiceType | undefined => {
  return Services.find((item) => item.id == id);
};
