import React from "react";
import "./about.css";
import me from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={me} alt="me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>None yet!</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>3+ Complete</small>
            </article>
          </div>

          <p>
            Husband, father, navy veteran, business owner, and junior web
            developer. I'm a Navy Veteran and an enthusiast who enjoys 3d
            design, 3d printing, laser engraving, embroidery, CNC, and
            electronics. Software engineering was a natural next step as an
            innovator. Technologies I've learned: HTML, CSS, JavaScript, React,
            Redux, Express, Node, PostgreSQL, and Sequelize. Technologies I am
            currently pursuing and have great interest in: Remix, Python, React
            Native, AWS, and Bootstrap. I love to build, I love to lead and help
            others succeed.
          </p>
          <p>
            *** Currently interested in a Junior Software Development job. ***
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
