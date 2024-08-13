import { cardInfo } from "../../data/Services";

interface SubserviceProps {
  services: cardInfo[];
}

const Subservices = ({ services }: SubserviceProps) => {
  return (
    <section className="bg-primary">
      <div className="container px-0">
        <div className="row g-0 ">
          {services.map((service, index) => (
            <div className="col-lg-3 col-md-6">
              <div className="card rounded-0 px-4 py-5 bg-primary position-relative overflow-hidden border-0">
                <span className="h2 text-white">{<service.Icon />}</span>
                <div className="card-body p-0 content">
                  <h5 className="text-white">{service.title}</h5>
                  <p className="para text-white-50 mb-0">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subservices;
