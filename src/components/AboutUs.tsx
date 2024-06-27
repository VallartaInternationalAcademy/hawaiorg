import CardImage from "../assets/images/cards/CardImage2.jpg";
import CardImage1 from "../assets/images/cards/cardImge.jpg";
import CardImage2 from "../assets/images/cards/CardsImage3.jpg";

import InfoCard from "./Cards/InfoCard";

const AboutUs = () => {
  return (
    <div className="flex flex-row justify-between px-12">
      <InfoCard
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cum perferendis eligendi harum perspiciatis ipsum ut maxime. Velit consequatur, aspernatur illum alias eos ipsum doloremque?"
        image={CardImage}
        title="Lorem ipsum"
      />
      <InfoCard
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cum perferendis eligendi harum perspiciatis ipsum ut maxime. Velit consequatur, aspernatur illum alias eos ipsum doloremque?"
        image={CardImage1}
        title="Lorem ipsum"
      />
      <InfoCard
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cum perferendis eligendi harum perspiciatis ipsum ut maxime. Velit consequatur, aspernatur illum alias eos ipsum doloremque?"
        image={CardImage2}
        title="Lorem ipsum"
      />
    </div>
  );
};

export default AboutUs;
