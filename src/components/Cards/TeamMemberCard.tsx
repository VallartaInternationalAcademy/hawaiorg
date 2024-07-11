import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft, FaArrowDown } from "react-icons/fa";

interface TeamMemberCardProps {
  image?: string;
  name: string;
  title: string;
  color?: string;
  direction: "left" | "right" | "down";
  additionalInfo?: string;
  isImage: boolean;
}

const directionIcons = {
  left: <FaArrowLeft className="icon" />,
  right: <FaArrowRight className="icon" />,
  down: <FaArrowDown className="icon" />,
};

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  image,
  name,
  title,
  color = "gray-500",
  direction,
  additionalInfo,
  isImage,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`relative w-full md:w-1/2 lg:w-1/5 p-2 cursor-pointer transition-all duration-300 transform hover:scale-105`}
      onMouseEnter={() => !isImage && setHover(true)}
      onMouseLeave={() => !isImage && setHover(false)}
    >
      {isImage ? (
        <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      ) : (
        <div
          className={`relative w-full h-full overflow-hidden rounded-lg shadow-lg bg-${color}`}
        >
          <div
            className={`absolute inset-0 flex items-center justify-center bg-${color} transition-opacity duration-300 ${
              hover ? "opacity-100" : "opacity-100"
            }`}
          >
            <div
              className={`text-center text-white p-4 ${
                hover ? "hidden" : "block"
              }`}
            >
              {directionIcons[direction]}
              <h2 className="text-xl font-bold">{title}</h2>
              <p>{name}</p>
            </div>
            <div
              className={`text-center text-white p-4 ${
                hover ? "block" : "hidden"
              }`}
            >
              <p>{additionalInfo}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMemberCard;
