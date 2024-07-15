import HistoryCard from "../components/cards/HistoryCard";
import perfil1 from "../assets/images/charity/cause01.jpg";
import perfil2 from "../assets/images/charity/cause02.jpg";
import perfil3 from "../assets/images/charity/cause04.jpg";

const Histories = () => {
  return (
    <div className="container mt-60">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="section-title text-center mb-4 pb-2">
            <h4 className="title fw-semibold mb-4">Popular Causes</h4>
            <p className="text-muted para-desc mx-auto mb-0">
              Start working with{" "}
              <span className="text-primary fw-bold">Landrick</span> that can
              provide everything you need to generate awareness, drive traffic,
              connect.
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
