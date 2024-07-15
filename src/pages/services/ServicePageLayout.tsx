import HeroPage from "../../components/Hero/HeroPage";
import { useParams } from "react-router-dom";
import { getDataByid } from "../../data/Services";

const ServicePageLayout = () => {
  const { id } = useParams();
  const item = getDataByid(id ? id : "1");

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <HeroPage
        imagen={item.MainImage}
        page={item.Tittle}
        description={item.MainDescripcion}
        Breadcrumb={[
          { link: "/", nombre: "Home" },
          { link: "stories", nombre: "Stories" },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title text-primary">{item.Service}</h4>
              </div>
            </div>
            <div className="col-12 text-justify">
              <span className="text-muted">{item.text}</span>
            </div>
            <div className="col-md-12 text-center mt-4">
              <img src={item.subImage} className="img-fluid rounded-3" alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title mb-4 pb-2">
              <span className="text-primary">{item.Service}</span>
              <h4 className="title">HOW IS IT DONE</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageLayout;
