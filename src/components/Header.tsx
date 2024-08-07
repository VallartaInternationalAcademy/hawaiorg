import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo2.png";

const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [subMenuOpen, setSubMenuOpen] = useState<string | null>(null);

  // Toggle menu for mobile view
  const toggleMenu = () => {
    const menu = document.getElementById("isToggle");
    const navigation = document.getElementById("navigation");
    if (menu && navigation) {
      menu.classList.toggle("open");
      navigation.classList.toggle("open");
    }
  };

  // Activate menu items based on current URL
  useEffect(() => {
    const menuItems = document.getElementsByClassName("sub-menu-item");
    const currentUrl = window.location.href;

    Array.from(menuItems).forEach((item: Element) => {
      if ((item as HTMLAnchorElement).href === currentUrl) {
        (item as HTMLAnchorElement).classList.add("active");
        let parent = item.closest("li");
        while (parent) {
          parent.classList.add("active");
          parent =
            parent.closest(".parent-menu-item") ||
            parent.closest(".child-menu-item");
        }
      }
    });
  }, []);

  // Handle sub-menu toggle on click
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    if (id === "javascript:void(0)") {
      setSubMenuOpen(subMenuOpen === id ? null : id);
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
        <ul className="buy-button list-inline mb-0 d-none d-sm-block">
          <li className="list-inline-item ps-1 mb-0">
            <a
              href="https://1.envato.market/landrick"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="btn">
                <Link
                  to={"page_no_found/"}
                  className="btn btn-primary rounded-5"
                >
                  DONATE
                </Link>
              </div>
            </a>
          </li>
        </ul>
        {/* Login button End */}

        <div id="navigation">
          {/* Navigation Menu */}
          <ul className="navigation-menu">
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
                What We Do
              </Link>
            </li>
            <li className="has-submenu parent-parent-menu-item">
              <Link
                to=""
                className="sub-menu-item"
                onClick={(e) => handleLinkClick(e, "javascript:void(0)")}
              >
                Services
              </Link>
              <span className="menu-arrow"></span>
              <ul
                className={`submenu ${
                  subMenuOpen === "javascript:void(0)" ? "open" : ""
                }`}
              >
                <li>
                  <Link to={"services/1"} className="sub-menu-item">
                    Housing Navigation
                  </Link>
                </li>
                <li>
                  <Link to={"services/4"} className="sub-menu-item">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link to={"services/3"} className="sub-menu-item">
                    Medical Respite And Recuperative Care
                  </Link>
                </li>
                <li>
                  <Link to={"services/2"} className="sub-menu-item">
                    Shelter and Support
                  </Link>
                </li>
              </ul>
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
