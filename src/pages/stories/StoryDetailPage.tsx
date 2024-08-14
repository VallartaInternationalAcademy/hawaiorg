import useScrollToTop from "../../hooks/useScrollToTop";
import { useParams } from "react-router-dom";
import { getHistoryById } from "../../data/Histories";

const StoryDetailPage = () => {
  useScrollToTop();
  // get id from url
  const { id } = useParams<{ id: string }>();
  const item = getHistoryById(id ? id : "1");

  const formatText = (text: string | undefined) => {
    if (!text) return null;
    return text.split("\n").map((line, index) => (
      <p key={index} className="mb-4">
        {line}
      </p>
    ));
  };

  return (
    <section className="section">
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="title-heading text-center mb-5 fw-bold">
                {item?.title}
              </h1>

              {/* subtitle */}
              <div className="text-center">
                <img src={item?.image} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <p className="text-muted mb-0 mt-4 fs-5">
                {formatText(item?.texto)}
              </p>

              {/* <section className="section">
                <div className="row" id="counter">
                  <div className="col-md-4 col-6 mt-4 pt-2">
                    <div className="text-center">
                      <img src={imagenHistoria1} className="img-fluid" />
                    </div>
                  </div>

                  <div className="col-md-4 col-6 mt-4 pt-2">
                    <div className="text-center">
                      <img src={imagenHistoria2} className="img-fluid" />
                    </div>
                  </div>

                  <div className="col-md-4 col-6 mt-4 pt-2">
                    <div className="text-center">
                      <img src={imagenHistoria3} className="img-fluid" />
                    </div>
                  </div>
                </div>
              </section> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryDetailPage;
