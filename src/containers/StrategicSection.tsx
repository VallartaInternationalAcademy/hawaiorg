import strategyImg from "../assets/images/charity/strategy.png";

const StrategicSection = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <img src={strategyImg} className="img-fluid" alt="" />
      </div>
      <div className="row align-items-stretch">
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2 px-sm-2 text-center">
          <div className="d-flex flex-column h-100 justify-content-center">
            <span className="mb-3 fw-bold fs-4">Advocacy</span>
            <span className="text-center">
              Corazon Hawaii will advocate with integrity and transparency to
              pursue impactful changes to policy, drive systemic change, and
              improved outcomes for people experiencing homelessness.
            </span>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2 px-sm-2 text-center">
          <div className="d-flex flex-column h-100 justify-content-center">
            <span className="mb-3 fw-bold fs-4">Wellbeing</span>
            <span className="text-center">
              Corazon Hawaii will deliver present-day, person-centered,
              evidence-based, data-informed, and innovative wellbeing homeless
              services.
            </span>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2 px-sm-2 text-center">
          <div className="d-flex flex-column h-100 justify-content-center">
            <span className="mb-3 fw-bold fs-4">Housing</span>
            <span className="text-center">
              Corazon Hawaii will work persistently with people experiencing
              homelessness in order to fulfil their right to live somewhere
              safely, securely, and with dignity in a suitable home.
            </span>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2 px-sm-2 text-center">
          <div className="d-flex flex-column h-100 justify-content-center">
            <span className="mb-3 fw-bold fs-4">Culture</span>
            <span className="text-center">
              Corazon Hawaii will empower a high performing, accountable, and
              supportive workplace culture, where all employees and volunteers
              are valued for their diversity of skills, experience, and
              knowledge.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicSection;
