import React, { useState, useEffect } from 'react';
import NavButton from "./NavButton.jsx";
import comet from "../../assets/images/comet.png";
import "./Navbar.css";

const buttons = ["Home", "Skills", "Projects","Contacts"]

const Navbar = () => {
  const [selectedPage, setSelectedPage] = useState();
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

  function handleSelect(selectedButton) {
    setSelectedPage(selectedButton);
  }

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="title">
        <a href=""><img className="logo" src={comet} alt="" /></a>
        <h1>Suisei</h1>
      </div>
      <div className="nav-items">
        {buttons.map((button) => (
          <NavButton
            key={button}
            onSelect={() => handleSelect(button)}
            isSelected={button === selectedPage}
            scrolled={scrolled}
          >
            {button}
          </NavButton>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
