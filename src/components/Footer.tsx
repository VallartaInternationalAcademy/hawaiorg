import icon from "../assets/images/iconLight.png";

const Footer = () => {
  return (
    <footer className="footer bg-main text-white p-10 mt-12">
      <aside>
        <img src={icon} className="h-24" />
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <h6 className="text-white font-bold text-xl uppercase">Services</h6>
        <a className="link link-hover text-white  ">Branding</a>
        <a className="link link-hover text-white ">Design</a>
        <a className="link link-hover text-white ">Marketing</a>
        <a className="link link-hover text-white ">Advertisement</a>
      </nav>
      <nav>
        <h6 className="text-white font-bold text-xl uppercase">Company</h6>
        <a className="link link-hover text-white">About us</a>
        <a className="link link-hover text-white">Contact</a>
        <a className="link link-hover text-white">Jobs</a>
        <a className="link link-hover text-white">Press kit</a>
      </nav>
      <nav>
        <h6 className="text-white font-bold text-xl uppercase">Legal</h6>
        <a className="link link-hover text-white">Terms of use</a>
        <a className="link link-hover text-white">Privacy policy</a>
        <a className="link link-hover text-white">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
