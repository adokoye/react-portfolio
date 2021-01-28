import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "bootstrap/dist/css/bootstrap.min.css";

function Technologies() {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <h1 className="project-list" id="header">
        Skills
      </h1>

      <div className="container">
        <div className="resume-link">
          <a
            href="https://github.com/adokoye"
            target="_blank"
            alt="Resume"
            id="resume-text"
          >
            View my Resume
          </a>
        </div>

        <div className="resume-main flex-row justify-content-center">
          <div>
            <p>
              Full Stack Web Development program focusing on Front-end and
              Server-side and Database Architectures development.
            </p>
          </div>

          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="front location-front-item">
              <h5 className="header-space">Front-end Tech:</h5>
              <ul>
                <li id="skill-list">JavaScript/jQuery</li>
                <li id="skill-list">HTML</li>
                <li id="skill-list">CSS</li>
                <li id="skill-list">Responsive Design</li>
                <li id="skill-list">React</li>
                <li id="skill-list">Bootstrap, Handlebars </li>
                <li id="skill-list">Chrome Dev Tools</li>
              </ul>
              <button className="front-flip-button" onClick={handleFlip}>
                Click to see Back-end!
              </button>
            </div>

            <div className="back location-back-item">
              <h5 className="header-space">Back-end Tech:</h5>
              <ul id="skill-list">
                <li id="skill-list">SQL</li>
                <li id="skill-list">APIs</li>
                <li id="skill-list">REST</li>
                <li id="skill-list">MongoDB, Mongoose</li>
                <li id="skill-list">MySQL, Sequelize</li>
                <li id="skill-list">Express</li>
                <li id="skill-list">Node</li>
              </ul>
              <button className="back-flip-button" onClick={handleFlip}>
                Click to see Front-end!
              </button>
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
