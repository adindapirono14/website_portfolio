import React, { useState } from "react";
import "./header.css";
import ReactDOM from "react-dom";

const Header = () => {
  /* Toggle Menu */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Adinda Pirono
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link "
                }
              >
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about"
                    ? "nav__link active-link"
                    : "nav__link "
                }
              >
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>
            {/* <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link "
                }
              >
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li> */}

            <li className="nav__item">
              <a
                href="#project"
                onClick={() => setActiveNav("#project")}
                className={
                  activeNav === "#projects"
                    ? "nav__link active-link"
                    : "nav__link "
                }
              >
                <i className="uil uil-scenery nav__icon"></i>
                Projects
              </a>
            </li>
            {/* <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li> */}
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
