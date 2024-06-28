import CardImage from "../assets/images/cards/CardImage2.jpg";
import CardImage1 from "../assets/images/cards/cardImge.jpg";
import CardImage2 from "../assets/images/cards/CardsImage3.jpg";

import InfoCard from "./Cards/InfoCard";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-content-center gap-12 px-4">
      <div data-aos="fade-right">
        <InfoCard
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cum perferendis eligendi harum perspiciatis ipsum ut maxime. Velit consequatur, aspernatur illum alias eos ipsum doloremque?"
          image={CardImage}
          title="Lorem ipsum"
        />
      </div>
      <div data-aos="fade-down">
        <InfoCard
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cum perferendis eligendi harum perspiciatis ipsum ut maxime. Velit consequatur, aspernatur illum alias eos ipsum doloremque?"
          image={CardImage1}
          title="Lorem ipsum"
        />
      </div>
      <div data-aos="fade-left">
        <InfoCard
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cum perferendis eligendi harum perspiciatis ipsum ut maxime. Velit consequatur, aspernatur illum alias eos ipsum doloremque?"
          image={CardImage2}
          title="Lorem ipsum"
        />
      </div>
    </div>
  );
};

export default AboutUs;
