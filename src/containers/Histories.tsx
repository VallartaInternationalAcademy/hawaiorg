import HistoryCard from "../components/cards/HistoryCard";
import perfil1 from "../assets/images/hawai/STORIES.png";
import perfil2 from "../assets/images/hawai/STORIES (3).png";
import perfil3 from "../assets/images/hawai/STORIES (5).png";
import { getRandomHistories } from "../data/Histories";

const Histories = () => {
  const histories = getRandomHistories(3);
  const truncateText = (texto: string) => {
    const maxLength = 200;
    if (texto.length > maxLength) {
      return texto.substring(0, maxLength) + "...";
    }
    return texto;
  };
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
        {histories.map((history) => (
          <HistoryCard
            key={history.id}
            img={history.image}
            history={truncateText(history.texto)}
            tittle={history.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Histories;
