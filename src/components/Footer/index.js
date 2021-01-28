import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => (
  <>
    <div className="footer">
      <a
        href="mailto:adaobi.okoye@ttuhsc.edu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          alt="Email"
          className="footer-img"
          src={require("../../assets/icons/email.png")}
        />
      </a>

      <a
        href="https://github.com/adokoye"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          alt="Github"
          className="footer-img"
          src={require("../../assets/icons/github2.png")}
        />
      </a>

      <a
        href="https://www.linkedin.com/in/adokoye/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          alt="LinkedIn"
          className="footer-img"
          src={require("../../assets/icons/linkedin4.png")}
        />
      </a>
      <a href="tel:806.472.8238" target="_blank" rel="noopener noreferrer">
        <img
          alt="Telephone"
          className="footer-img"
          src={require("../../assets/icons/phone.png")}
        />
      </a>
    </div>
  </>
);

export default Footer;
