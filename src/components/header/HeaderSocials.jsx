import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="www.linkedin.com/in/elias-grey"
        alt="Linkedin Link"
        target="_blank"
      >
        <BsLinkedin />
      </a>

      <a href="www.github.com/eliasgrey9" alt="github Link" target="_blank">
        <FaGithub />
      </a>

      <a href="www.dribble.com" alt="dribble Link" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
