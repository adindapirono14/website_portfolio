import React from "react";
import Skills from "./skills";

const info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <h2 className="about__title">Skills</h2>
        <span className="about__subtitle">
          Here are some of the technologies i have been working with:
        </span>
        <Skills />
      </div>
    </div>
  );
};

export default info;
