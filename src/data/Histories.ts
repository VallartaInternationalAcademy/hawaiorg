import img1 from "../assets/images/hawai/STORIES (3).png";
import img2 from "../assets/images/hawai/STORIES (4).png";
import img3 from "../assets/images/hawai/STORIES (5).png";
import img4 from "../assets/images/hawai/STORIES (6).png";

export interface HistoryType {
  id: string;
  title: string;
  image: string;
  texto: string;
}

const histories: HistoryType[] = [
  {
    id: "1",
    title: " From Homelessness to Hope: Maria’s Journey",
    image: img1,
    texto:
      "Maria, a single mother of two young children, found herself homeless after a series of unfortunate events—losing her job, facing eviction, and with no family to turn to. The days were long, filled with uncertainty and fear, as she struggled to keep her family safe while living in her car. Her children, once happy and carefree, became quiet and withdrawn.\n\nDesperate for help, Maria reached out to Corazon Hawaii. From the moment she connected with our team, her life began to change. We provided her with housing navigation services, guiding her through the complex process of finding a safe and affordable home. With our support, Maria secured temporary shelter and began the journey toward permanent housing.\n\nOur team didn’t stop there. We offered Maria ongoing emotional support, connecting her with resources to help her find a new job and enroll her children in school. Through advocacy and determination, we helped her navigate the challenges of securing a stable lease, overcoming barriers like past eviction records, and negotiating with landlords.\n\nToday, Maria and her children are thriving in their new home. The children are back in school, full of joy and laughter, and Maria is working steadily, building a future she once thought impossible. Her journey from homelessness to hope is a powerful reminder of the difference that compassion and community support can make. Corazon Hawaii stood by Maria every step of the way, turning her despair into determination and her fears into a bright, hopeful future.",
  },
  {
    id: "2",
    title: "A Second Chance: John's Path to Stability",
    image: img2,
    texto:
      "John, a veteran who had served his country with honor, returned home to find life unraveling in ways he never imagined. Battling the invisible wounds of PTSD, he found it increasingly difficult to maintain a job, and eventually, the mounting pressures led to him losing his home. With nowhere to turn, John found himself on the streets, feeling isolated, forgotten, and overwhelmed by despair.\n\nCorazon Hawaii intervened through our Rapid Rehousing and Homeless Prevention service. We provided John with immediate temporary shelter, ensuring he had a safe place to stay while we worked on a more permanent solution. Understanding the unique challenges veterans face, we developed a personalized housing plan tailored to his needs. We also connected John with vital mental health services, helping him navigate his PTSD and begin the healing process.\n\nOur team’s dedication and advocacy paid off. John secured stable housing in a community that welcomed him, and through a local job training program, he found meaningful work that gave him a renewed sense of purpose. Today, John is rebuilding his life, living in a comfortable home, and knowing that he is not alone. His journey is a powerful testament to the resilience of the human spirit and the transformative power of compassion and support.",
  },
  {
    id: "3",
    title: " A Home for Healing: The Diaz Family’s Story",
    image: img3,
    texto:
      "The Diaz family’s world was turned upside down when Carlos, the loving father and sole breadwinner, was diagnosed with a severe illness. As his condition worsened, Carlos could no longer work, and the family’s income quickly dwindled. The bills piled up, and soon, they faced the heartbreaking reality of eviction. With Carlos in desperate need of medical care and the family without a home, they felt lost and overwhelmed.\n\nCorazon Hawaii stepped in with our Healthcare and Medical Respite service, providing the Diaz family with the critical support they needed. We quickly arranged for a safe and comfortable place where Carlos could recover after his hospital discharge, ensuring he had access to continuous medical care and the necessary resources to aid his recovery. Meanwhile, the rest of the family was provided with temporary shelter, keeping them close and supported during this challenging time.\n\nAs Carlos began to regain his strength, we worked tirelessly to help the Diaz family secure permanent housing. Through our advocacy and resource connections, they were able to move into a stable home where they could focus on healing and rebuilding their lives. Today, the Diaz family is thriving, with Carlos continuing his recovery in the comfort of their new home. Their story is a poignant reminder of the importance of community, health, and the belief that no family should ever face such hardships alone.",
  },
  {
    id: "4",
    title: "Building a Future: Sarah’s Fresh Start",
    image: img4,
    texto:
      "Sarah, a young woman in her early twenties, fled an abusive relationship with nothing but the clothes on her back and a desperate hope for safety. With no family or friends to turn to, she found herself alone on the streets, frightened and unsure of what the future held. For months, she moved from one temporary shelter to another, each day struggling to find a safe place to rest her head.\n\nThat’s when Corazon Hawaii’s Housing Retention service came into Sarah’s life. We offered her more than just a temporary solution; we provided a pathway to a fresh start. Sarah was placed in a safe and supportive environment where she could begin to heal from the trauma she had endured. Our team worked closely with her to create a personalized plan that included budgeting assistance, access to vital community resources, and skill-building workshops to prepare her for independent living.\n\nWith our ongoing support, Sarah secured a permanent home, a place where she could finally feel safe and start anew. She also found a job that gave her a sense of purpose and stability. Throughout her journey, we remained by her side, offering guidance and encouragement as she navigated the challenges of rebuilding her life. Today, Sarah is thriving—empowered, confident, and ready to embrace the future. Her journey from fear to freedom is a powerful illustration of the impact that compassion and dedicated support can have on someone’s life.",
  },
];

export const getHistoryById = (id: string) => {
  return histories.find((history) => history.id === id);
};

export const getHistories = () => {
  return histories;
};
