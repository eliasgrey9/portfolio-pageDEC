import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineLinkedin } from "react-icons/ai";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ozhvz9o", "Lacroi", form.current, "kJM0AENzmHeMnv21a")
      .then(
        (result) => {
          e.target.reset();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon " />
            <h4>Email</h4>
            <h5>eliasgrey9@gmail.com</h5>
            <a href="mailto:eliasgrey9@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon " />
            <h4>Facebook</h4>
            <h5>Messenger</h5>
            <a href="https://m.me/elias.grey.7/" target="_blank">
              Chat Now
            </a>
          </article>
          <article className="contact_option">
            <AiOutlineLinkedin className="contact_option-icon " />
            <h4>Linkedin</h4>
            <h5>Profile</h5>
            <a href="https://www.linkedin.com/in/elias-grey" target="_blank">
              View Profile
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
