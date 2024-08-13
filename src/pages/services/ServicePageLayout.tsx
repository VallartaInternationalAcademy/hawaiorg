import HeroPage from "../../components/Hero/HeroPage";
import { useParams } from "react-router-dom";
import { getDataByid } from "../../data/Services";
import { IconType } from "react-icons";
import useScrollToTop from "../../hooks/useScrollToTop";
import { useEffect } from "react";
import HeroServices from "../../components/Hero/HeroServices";
import Subservices from "../../components/Services/Subservices";
import { FaRegCheckCircle } from "react-icons/fa";

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

  return (
    <div>
      <HeroServices
        Title={item.Service}
        imagen={item.MainImage}
        description={item.MainDescripcion}
      />
      <Subservices services={item.services} />
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="about-left">
                <div className="position-relative shadow p-2 rounded bg-white-color img-one">
                  <img
                    src={item.serviceImage}
                    className="img-fluid rounded"
                    alt="work-image"
                  />
                </div>

                <div className="img-two shadow rounded-3 overflow-hidden p-2 bg-white-color">
                  <img
                    src={item.subImage}
                    className="img-fluid rounded-3"
                    alt="work-image"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title ms-lg-5">
                <h4 className="title mb-4">{item.Tittle}</h4>
                <p className="text-muted">{item.MainDescripcion}</p>
                <ul className="list-unstyled text-muted">
                  {item.benefits &&
                    item.benefits.map((benefit, index) => (
                      <li key={index} className="mb-1">
                        <span className="text-primary h5 me-2">
                          <FaRegCheckCircle className="align-middle text-success" />
                        </span>
                        {benefit}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageLayout;
