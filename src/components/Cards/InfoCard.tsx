import { IconType } from "react-icons";

interface Props {
  text: string;
  Icon: IconType;
  title: string;
}

const InfoCard = ({ text, Icon, title }: Props) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg text-center">
      <Icon className="h-16 w-16 text-main mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default InfoCard;
