import HistoryCard from "../components/cards/HistoryCard";
import perfil1 from "../assets/images/hawai/STORIES.png";
import perfil2 from "../assets/images/hawai/STORIES (3).png";
import perfil3 from "../assets/images/hawai/STORIES (5).png";

const Histories = () => {
  return (
    <div className="container mt-60">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="section-title text-center mb-4 pb-2">
            <h4 className="title fw-semibold mb-4">Stories of Hope</h4>
            <p className="text-muted para-desc mx-auto mb-0">
              Inspiring Journeys of Transformation with Corazon Hawaii
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <HistoryCard
          tittle="Samuel Parsons"
          img={perfil1}
          history="Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod
            tempor incididunt. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod
            tempor incididunt"
        />
        <HistoryCard
          tittle="Samuel Parsons"
          img={perfil2}
          history="Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod
            tempor incididunt. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod
            tempor incididunt"
        />
        <HistoryCard
          tittle="Samuel Parsons"
          img={perfil3}
          history="Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod
            tempor incididunt. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod
            tempor incididunt"
        />
      </div>
    </div>
  );
};

export default Histories;
