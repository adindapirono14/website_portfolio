import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Adinda Pirono</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#project" className="footer__link">
              Project
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://github.com/adindapirono14"
            className="footer__social-link"
            target="_blank"
          >
            <i className="ul uil-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/adinda-pirono/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="ul uil-linkedin"></i>
          </a>
          <a
            href="mailto:adindaykpirono@gmail.com"
            className="footer__social-link"
            target="_blank"
          >
            <i className="ul uil-envelope-edit"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
