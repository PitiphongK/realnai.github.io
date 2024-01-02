import React, { useState, useEffect } from "react";
import NavButton from "./NavButton.jsx";
import comet from "../../assets/images/comet.png";
import data from "../../assets/data.json";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="title">
        <a href="">
          <img className="logo" src={comet} alt="" />
        </a>
        <h1>Suisei</h1>
      </div>
      <div className="nav-items">
        {data?.buttons?.map((button) => (
          <NavButton key={button.name} scrolled={scrolled} to={button.id}>
            {button.name}
          </NavButton>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
