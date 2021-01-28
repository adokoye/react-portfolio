import React from "react";
import profileImage from "../../assets/profile/Profile.JPG";

function About() {
  return (
    <section>
      <h1 className="project-list" id="header">
        Adaobi C Okoye
      </h1>

      <div className="row" id="about-container">
        <div className="col-4" id="">
          <img
            src={profileImage}
            className="ip-picture"
            id="ip-picture"
            alt="adaobi-okoye"
          />
        </div>

        <div className="col-7 ip-desc">
          <h2 id="about">About me</h2>
          <p id="about-me">
          I am Adaobi C Okoye, a Fullstack web developer. This portfolio contains my work so far in my coding bootcamp.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
