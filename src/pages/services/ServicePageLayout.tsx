import HeroPage from "../../components/Hero/HeroPage";
import { useParams } from "react-router-dom";
import { getDataByid } from "../../data/Services";
import { FaBrain, FaRecycle } from "react-icons/fa6";
import { FaHeartbeat, FaShieldAlt } from "react-icons/fa";
import sevice1 from "../../assets/images/charity/service1.png";
import { IconType } from "react-icons";
import useScrollToTop from "../../hooks/useScrollToTop";
import { useEffect } from "react";

interface Props {
  Icon: IconType;
  tittle: string;
  description: string;
}

const ServicePageLayout = () => {
  const { id } = useParams();
  const item = getDataByid(id ? id : "1");

  useEffect(() => {
    // Scroll to top smoth
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [item]);

  if (!item) {
    return <div>Item not found</div>;
  }

  const ServiceCardInfo = ({ Icon, tittle, description }: Props) => {
    return (
      <div className="col-md-3 col-6 my-2">
        <Icon size={50} className="text-primary" />
        <h5>{tittle}</h5>
        <p className="text-muted">{description}</p>
      </div>
    );
  };

  return (
    <div>
      <HeroPage
        imagen={item.MainImage}
        page={item.Tittle}
        description={item.MainDescripcion}
        Breadcrumb={[{ link: "/", nombre: "Home" }]}
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
              <h4 className="title">HOW IS IT DONE?</h4>
            </div>
          </div>
          <div className="col-12 text-center">
            <div className="row justify-content-center">
              {item.services.map((s) => (
                <ServiceCardInfo
                  Icon={s.Icon}
                  description={s.description}
                  tittle={s.title}
                />
              ))}
            </div>
            <div className="row justify-content-center my-5">
              <div className="col-md-6 col-12">
                <img
                  src={item.serviceImage}
                  alt="Central Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageLayout;
