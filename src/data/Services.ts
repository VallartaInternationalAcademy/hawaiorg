import MainImage1 from "../assets/images/charity/cause01.jpg";
import MainImage2 from "../assets/images/charity/cause02.jpg";
import MainImage3 from "../assets/images/charity/cause03.jpg";
import MainImage4 from "../assets/images/charity/cause03.jpg";
import subImage1 from "../assets/images/charity/g1.jpg";
import subImage2 from "../assets/images/charity/g2.jpg";
import subImage3 from "../assets/images/charity/g3.jpg";
import subImage4 from "../assets/images/charity/g3.jpg";

interface ServiceType {
  id: string;
  MainImage: string;
  Tittle: string;
  MainDescripcion: string;
  Service: string;
  text: string;
  subImage: string;
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
  },
  {
    id: "2",
    MainImage: MainImage2,
    Tittle: "SHELTERING HOPE",
    MainDescripcion:
      "Helping homeless families find stable and secure housing through personalized guidance and support.",
    Service: "SHELTER AND SUPPORT",
    text: "roviding temporary shelter and comprehensive support to help families transition from homelessness to permanent housing is a critical initiative. Our program offers a safe and stable environment wherefamilies can find respite and support during their journey towards securing sustainable housing solutions.Beyond shelter, we provide personalized case management to address immediate needs, offer access to educational and vocational resources, and facilitate connections to community services. By fostering a supportive network and empowering families with the tools and resources they need, we aim to ensure asmooth and successful transition, ultimately helping them rebuild their lives with dignity and security",
    subImage: subImage2,
  },
  {
    id: "3",
    MainImage: MainImage3,
    Tittle: "RESTORING HEALTH WITH DIGNITY",
    MainDescripcion:
      "Helping homeless families find stable and secure housing through personalized guidance and support.",
    Service: "MEDICAL RESPITE AND \n RECUPERATIVE CARE",
    text: "Providing a safe place for homeless individuals to recover and receive medical care after hospital discharge is a vital service known as Medical Respite and Recuperative Care. This program offers a compassionate and supportive environment where individuals experiencing homelessness can heal from medical conditions or surgeries. Our dedicated team ensures that each person receives personalized care tailored to their recovery needs, including access to necessary medical treatments, therapies, and rehabilitation services. Beyond physical recovery, we prioritize emotional well-being by fostering a nurturing atmosphere that promotes healing and stability. Through comprehensive case management, we facilitate a seamless transition from medical respite to ongoing healthcare services and, ultimately, to sustainable housin solution",
    subImage: subImage3,
  },
  {
    id: "4",
    MainImage: MainImage4,
    Tittle: "HEALTHCARE SERVICE",
    MainDescripcion:
      "Helping homeless families find stable and secure housing through personalized guidance and support.",
    Service: "MEDICAL RESPITE AND \n RECUPERATIVE CARE",
    text: "We ensure that homeless families and individuals have access to essential healthcare services, addressing both their physical and mental well-being. Our comprehensive healthcare initiatives encompass initial medical assessments to identify urgent health needs, continuou medical care through partnerships with clinics and mobile health services, specialized psychological support to address mental health challenges, and the implementation of preventive health education programs to promote long-term wellness. These efforts aim to safeguard the health of our community members, providing vital care and support to those most in need.",
    subImage: subImage4,
  },
];

export const getDataByid = (id: string): ServiceType | undefined => {
  return Services.find((item) => item.id == id);
};
