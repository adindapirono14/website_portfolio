import React from "react";
import "./home.css";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/adindapirono14"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/adinda-pirono/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a href="#" className="home__social-icon" target="_blank">
        <i className="uil uil-envelope-edit"></i>
      </a>
    </div>
  );
};

export default Social;
