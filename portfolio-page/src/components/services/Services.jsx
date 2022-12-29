import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Mobile First and Responsive Design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>UI and Interactive Design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>UX Design </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Rapid and Interactice Prototyping </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Custom Website </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Website Maintenance </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Content Manangement Systems </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Blog Customization or Management </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Website Tools </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Other Customizations Available</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Strategy</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Development</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Optimization</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Promotion </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Reporting </p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION*/}
      </div>
    </section>
  );
};

export default services;
