import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const projects = [
  {
    id: 1,
    name: "Gift Fairy",
    description:
      "Gift Fairy is an application to keep track of a gift wish list.",
    image: "auto-tracker.PNG",
    technologies:
      "JavaScript, Node.js, HTML/CSS, Handlebars.js, Express & Sequelize, Heroku & AWS S3",
    github: "https://github.com/adokoye/gift-fairy",
    deployed: "https://polar-cove-94723.herokuapp.com/",
  },
  {
    id: 2,
    name: "Magic Recipe Randomizer",
    description: "This is a website that that provides recipe recommendations personalized to the individual's tastes with available semantic recipe and cocktail search.",
    image: "citizen-portal.PNG",
    technologies: "HTML/CSS, JavaScript & jQuery",
    github: "https://github.com/adokoye/Magic-Recipe-Randomizer",
    deployed: "https://team-captain-america.github.io/Magic-Recipe-Randomizer/",
  },
  {
    id: 3,
    name: "Budget Tracker",
    description:
      "Budget Tracker is an Application that uses a noSQL database and offline persistance for a great user experience for managing their finances and budgeting no matter where they are.",
    image: "budget-tracker.PNG",
    technologies:
      "JavaScript,MongoDb, IndexedDb & Service Workers, Node Js, Express js",
    github: "https://github.com/adokoye/budget-tracker",
    deployed: "https://infinite-peak-97491.herokuapp.com/",
  },
  {
    id: 4,
    name: "Weather Dashboard",
    description:
      "A weather dashboard that shows current weather and five-day weather forecast for any city.",
    image: "weather-dashboard.PNG",
    technologies: "HTML, CSS, JavaScript",
    github: "https://github.com/adokoye/weather-dashboard",
    deployed: "https://adokoye.github.io/weather-dashboard",
  },
];

function ProjectCard(props) {
  return (
    <div className="card-container">
      <div className="card col-9">
        <a href={props.deployed} target="_blank" rel="noopener noreferrer">
          <img
            alt={props.name}
            src={require(`../../assets/projects/${props.image}`)}
            className="card-img"
          />
        </a>

        <h1 className="project-card">{props.name}</h1>
        <div>
          <p id="project-description"className="project-card">{props.description}</p>
        </div>
        <a href={props.github} target="_blank" rel="noopener noreferrer">
          <img
            alt="Github"
            className="github"
            src={require("../../assets/icons/github.svg")}
          />
        </a>
      </div>
    </div>
  );
}

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function Projects() {
  // Using useState, declare a new state variable 'projectsList' and set it to the 'projects' array from 'projects.json'

  const [projectsList] = useState(projects);

  const renderProject = (project) => {
    return (
      <ProjectCard
        name={project.name}
        description={project.description}
        image={project.image}
        id={project.id}
        github={project.github}
        deployed={project.deployed}
        key={project.id}
      />
    );
  };
  //

  return (
    <Wrapper>
      <h1 className="project-list" id="header">
        Project List
      </h1>

      {projectsList.map((project) => renderProject(project))}
    </Wrapper>
  );
}

export default Projects;
