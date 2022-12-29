import React from "react";
import "./header.css";
import CTA from "./CTA";
import me from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div id="home" className="container header_container">
        <h5>Hello i'm</h5>
        <h1>Elias Grey</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={me} alt="me" />
        </div>

        <a href="#contact" alt="contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
