import { useState } from "react";
import NavButton from "./NavButton.jsx";
import comet from "../../assets/images/comet.png";
import "./Navbar.css";

const buttons = ["HOME", "ABOUT", "CONTACT"]

const Navbar = () => {
  const [selectedPage, setSelectedPage] = useState();

  function handleSelect(selectedButton) {
    setSelectedPage(selectedButton);
  }
  
  return (
    <nav>
      <div className="title">
        <a href=""><img className="logo" src={comet} alt="" /></a>
        <h1>Pitiphong Kitrueangphatchara</h1>
      </div>
      <div className="nav-items">
        {buttons.map((button) => (
          <NavButton
            key={button}
            onSelect={() => handleSelect(button)}
            isSelected={button === selectedPage}
          >
            {button}
          </NavButton>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
