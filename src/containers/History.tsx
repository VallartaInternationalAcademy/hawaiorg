import { Link } from "react-router-dom";
import banner from "../assets/images/banner.png";

const History = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center text-center">
      <div className="flex justify-center items-center">
        <img
          src={banner}
          className="h-[60%] w-[60%] md:h-[70%] md:w-[70%] lg:h-[90%] lg:w-[90%] md:pl-8 lg:pl-32"
        />
      </div>
      <div className="px-8 md:px-12 lg:pr-24 text-sm md:text-lg lg:text-xl">
        <span className="text-2xl md:text-3xl lg:text-4xl font-bold block mb-4 uppercase">
          ABOUT <span className="text-main">US</span>
        </span>
        <span className="block mb-4 text-justify">
          Corazon Hawaii is a nonprofit organization that helps toempower
          homeless households to rebuild their lives, rediscover their
          identities, and reconnect with their community. <br />
          Corazon Hawaii will walk alongside homeless households on their
          journey toward well-being a word defined as the state of being happy,
          healthy, or prosperous which is aligned with the State of Hawaii
          Department of Human Services Ohana Nui. Ohana Nui is a proven approach
          that capitalizes on Hawaii’sunique multigenerational family structure
          and provides a framework for human service delivery that positions
          whole families for a chance at greater well-being. Translated as
          extended or large family, Ohana Nui is an adaptation of the national
          two-generation approach. Corazon Hawaii will help homeless households
          focus on theirfuture, through housing navigation, housing retention,
          and housing stabilization. We connect households with housingwhile
          providing wraparound services to increase their opportunities to build
          the skills and confidence to change their circumstances for good.{" "}
          <br />
          We believe in community that allows all people an equal chance to live
          a full life and until that happens, Corazon Hawaii will continue to be
          their voice for systemic change. Through ourservices, active advocacy,
          fundraising initiatives, and our culture of ingrained respect, we will
          bring an end to homelessness in our community.
        </span>
        <span className="flex justify-center mt-4">
          <Link
            to="/About-us"
            className="bg-main text-white p-4 md:p-6 px-6 md:px-8 lg:px-12 text-lg md:text-xl lg:text-2xl font-bold"
            style={{ borderRadius: "4rem" }}
          >
            READ MORE
          </Link>
        </span>
      </div>
    </div>
  );
};

export default History;
