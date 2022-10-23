import React from "react";
import "./home.css";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title"> Adinda Pirono</h1>
      <h3 className="home__subtitle"> Software Engineer </h3>
      <p className="home__description">
        I am an inspiring software-engineer who just graduated this September
      </p>

      <a download="" href="#cv" className="button button--flex">
        Download CV
      </a>
    </div>
  );
};

export default Data;
