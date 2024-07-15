import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header: React.FC = () => {
  const toggleMenu = () => {
    const menu = document.getElementById("isToggle");
    const navigation = document.getElementById("navigation");
    if (menu && navigation) {
      menu.classList.toggle("open");
      navigation.classList.toggle("open");
    }
  };

  return (
    <header id="topnav" className="defaultscroll sticky">
      <div className="container">
        {/* Logo container */}
        <Link className="logo" to="/">
          <span className="logo-light-mode">
            <img src={logo} className="l-dark logo-img" alt="logo-dark" />
            <img src={logo} className="l-light logo-img" alt="logo-light" />
          </span>
          <img src={logo} className="logo-dark-mode logo-img" alt="logo" />
        </Link>
        {/* End Logo container */}

        <div className="menu-extras">
          <div className="menu-item">
            {/* Mobile menu toggle */}
            <a className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
            {/* End mobile menu toggle */}
          </div>
        </div>

        {/* Login button Start */}
        <ul className="buy-button list-inline mb-0">
          <li className="list-inline-item ps-1 mb-0">
            <a
              href="https://1.envato.market/landrick"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="btn">
                <span className="btn btn-primary rounded-5">DONATE</span>
              </div>
            </a>
          </li>
        </ul>
        {/* Login button End */}

        <div id="navigation">
          {/* Navigation Menu */}
          <ul className="navigation-menu ">
            <li>
              <Link to="/" className="sub-menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" className="sub-menu-item">
                About us
              </Link>
            </li>
            <li>
              <Link to="what-do-we-do" className="sub-menu-item">
                What do we do
              </Link>
            </li>
            <li>
              <Link to="stories" className="sub-menu-item">
                Stories
              </Link>
            </li>
          </ul>
          {/* End navigation menu */}
        </div>
        {/* End navigation */}
      </div>
      {/* End container */}
    </header>
  );
};

export default Header;
