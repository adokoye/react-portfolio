import React, { useState, useEffect } from "react";
import About from "../About";
import Navbar from "../Nav";
import Projects from "../Project";
import Contact from "../Contact";
import Technologies from "../Skills";

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

function Portfolio() {
  const [currentPage, handlePageChange] = useState("About");

  //set the title of the tab to the current page
  useEffect(() => {
    document.title = currentPage;
  });

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    switch (currentPage) {
      case "About":
        return <About />;

      case "Portfolio":
        return <Projects projects={projects} />;

      case "Contact":
        return <Contact></Contact>;

      case "Skills":
        return <Technologies></Technologies>;

      default:
        return <About />;
    }
  };

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          // Render the component returned by 'renderPage()'
          renderPage()
        }
      </div>
    </div>
  );
}

export default Portfolio;
