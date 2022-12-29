import React from "react";
import "./portfolio.css";
import me from "../../assets/me.jpg";

const data = [
  {
    id: 1,
    image:
      "https://st.depositphotos.com/2885805/3842/v/600/depositphotos_38422667-stock-illustration-coming-soon-message-illuminated-with.jpg",
    title: "Title goes here",
    github: "https://github.com/eliasgrey9",
    demo: "https://dribble.com",
  },
  {
    id: 1,
    image:
      "https://st.depositphotos.com/2885805/3842/v/600/depositphotos_38422667-stock-illustration-coming-soon-message-illuminated-with.jpg",
    title: "Title goes here",
    github: "https://github.com/eliasgrey9",
    demo: "https://dribble.com",
  },
  {
    id: 1,
    image:
      "https://st.depositphotos.com/2885805/3842/v/600/depositphotos_38422667-stock-illustration-coming-soon-message-illuminated-with.jpg",
    title: "Title goes here",
    github: "https://github.com/eliasgrey9",
    demo: "https://dribble.com",
  },
  {
    id: 1,
    image:
      "https://st.depositphotos.com/2885805/3842/v/600/depositphotos_38422667-stock-illustration-coming-soon-message-illuminated-with.jpg",
    title: "Title goes here",
    github: "https://github.com/eliasgrey9",
    demo: "https://dribble.com",
  },
  {
    id: 1,
    image:
      "https://st.depositphotos.com/2885805/3842/v/600/depositphotos_38422667-stock-illustration-coming-soon-message-illuminated-with.jpg",
    title: "Title goes here",
    github: "https://github.com/eliasgrey9",
    demo: "https://dribble.com",
  },
  {
    id: 1,
    image:
      "https://st.depositphotos.com/2885805/3842/v/600/depositphotos_38422667-stock-illustration-coming-soon-message-illuminated-with.jpg",
    title: "Title goes here",
    github: "https://github.com/eliasgrey9",
    demo: "https://dribble.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt="portfolio item"></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
