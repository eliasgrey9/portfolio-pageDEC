import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Elias Grey
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/elias.grey.7/">
          <FaFacebookF />
        </a>
        <a href="https://www.facebook.com/elias.grey.7/">
          <AiOutlineLinkedin />
        </a>
        <a href="https://www.facebook.com/elias.grey.7/">
          <CgMail />
        </a>
      </div>

      <div className="footer_copyright">
        <small>
          &copy; Elias Grey's official portfolio. All rights reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
