import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import NavButton from "./NavButton.jsx";
import Languages from "../Languages/Languages.jsx";

import comet from "../../assets/images/comet.png";
import data from "../../assets/data.json";
import "./Navbar.css";

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [navSideActive, setNavSideActive] = useState(false);

  const toggleNav = () => {
    setNavSideActive(!navSideActive);
  };

  const closeNav = () => {
    setNavSideActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    // when width is greater than 768px, close the nav side bar
    const handleResize = () => {
      if (navSideActive && window.innerWidth > 630) {
        // Automatically open the navigation
        setNavSideActive(true);
      } else if (window.innerWidth > 630) {
        closeNav();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navSideActive]);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <a href="/myWeb/" className="title">
        <img className="logo" src={comet} alt="" />
        <h1>{t("suisei")}</h1>
      </a>
      <div className="nav-hamburger" onClick={toggleNav}>
        <i className={`fa-solid fa-bars ${scrolled ? "scrolled" : ""}`}></i>
      </div>
      <div className={`nav-items ${navSideActive ? "active" : ""}`}>
        <div className="nav-close" onClick={toggleNav}>
          <i className="fa-solid fa-xmark custom"></i>
        </div>
        {data?.buttons?.map((button) => (
          <NavButton
            key={button.name}
            scrolled={scrolled}
            to={button.id}
            onClick={closeNav}
          >
            {t(button.name)}
          </NavButton>
        ))}
        <div className="nav-languages">
          <Languages />
        </div>
      </div>
      <div
        className={`overlay ${navSideActive ? "active" : ""}`}
        onClick={closeNav} // Close the nav when clicking on the overlay
      ></div>
    </nav>
  );
};

export default Navbar;
