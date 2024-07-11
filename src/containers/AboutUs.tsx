import { PiTargetDuotone } from "react-icons/pi";
import { BsEye } from "react-icons/bs";
import { PiHandHeart } from "react-icons/pi";

import InfoCard from "../components/Cards/InfoCard";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-content-center gap-12 px-4">
      <div data-aos="fade-right">
        <InfoCard
          text="Our mission is to
          empower homeless
          families to rebuild their
          lives and reconnect with
          their community. We
          provide comprehensive
          support through housing
          services and advocacy
          to foster lasting change
          and remove barriers to
          housing."
          Icon={PiTargetDuotone}
          title="MISSION"
        />
      </div>
      <div data-aos="fade-down">
        <InfoCard
          text="Our vision is a future
          where everyone has a
          safe, dignified home and
          homelessness is
          eradicated. We aspire to
          a society where every
          individual can live with
          dignity, security, and
          opportunity, supported
          by a united community."
          Icon={BsEye}
          title="VISION"
        />
      </div>
      <div data-aos="fade-left">
        <InfoCard
          text="Our objective is to create
          a sustainable system
          that ensures all homeless
          individuals can access
          safe, stable housing.
          Through accessible
          housing programs,
          personalized services,
          and strategic
          partnerships.
          "
          Icon={PiHandHeart}
          title="OBJECTIVE"
        />
      </div>
    </div>
  );
};

export default AboutUs;
