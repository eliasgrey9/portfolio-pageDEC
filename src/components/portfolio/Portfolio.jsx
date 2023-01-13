import React from "react";
import "./portfolio.css";
import image1 from "../../assets/trackerImg.jpg";
import image2 from "../../assets/memoryGame.jpg";
import foodAppImage from "../../assets/foodAppImage.png";
import graceShopper from "../../assets/graceShopper.png";
import staticImage from "../../assets/staticImage.png";
import todoremix from "../../assets/todoremix.png";

const data = [
  {
    id: 1,
    image: image1,
    title: "Task Tracker with React",
    github: "https://github.com/eliasgrey9/ToDoTracker",
    demo: "https://youtu.be/ZR95YgZn4ys",
  },
  {
    id: 2,
    image: image2,
    title: "Memory Game",
    github: "https://github.com/eliasgrey9/memory-game",
    demo: "https://youtu.be/nlgCYgNOQKU",
  },
  {
    id: 3,
    image: foodAppImage,
    title: "Random Recipe Generator",
    github: "https://github.com/eliasgrey9/FoodApp",
    demo: "https://youtu.be/YpFTy26tk10",
  },
  {
    id: 4,
    image: graceShopper,
    title: "E-commerce store",
    github: "https://github.com/2208-FSA-GraceShopper-TeamF/GraceShopperTeamF",
    demo: "https://youtu.be/zTLDyo7TTmo",
  },
  {
    id: 5,
    image: staticImage,
    title: "Crime stats app",
    github: "https://github.com/Team-Reality-2208-FSA/Static",
    demo: "https://youtu.be/gpC2iUnG61I",
  },
  {
    id: 6,
    image: todoremix,
    title: "To-do App with Remix",
    github: "https://github.com/eliasgrey9/todo-remix",
    demo: "https://youtu.be/nUbuYj_ZxiA",
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
