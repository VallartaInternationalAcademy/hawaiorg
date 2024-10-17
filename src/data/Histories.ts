import img1 from "../assets/images/hawai/STORIES (3).png";
import img2 from "../assets/images/hawai/John's Path to Stability.png";
import img3 from "../assets/images/hawai/The Diaz Family’s Story.png";
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
    title: "Coming Soon",
    image: img1,
    texto: "Coming Soon...",
  },
  {
    id: "2",
    title: "Coming Soon",
    image: img2,
    texto: "Coming Soon...",
  },
  {
    id: "3",
    title: "Coming Soon",
    image: img3,
    texto: "Coming Soon...",
  },
  {
    id: "4",
    title: "Coming Soon",
    image: img4,
    texto: "Coming Soon...",
  },
];

export const getHistoryById = (id: string) => {
  return histories.find((history) => history.id === id);
};

export const getHistories = () => {
  return histories;
};

export const getRandomHistories = (limit: number) => {
  return histories.sort(() => Math.random() - Math.random()).slice(0, limit);
};
