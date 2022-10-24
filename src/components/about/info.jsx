import React from "react";
import Skills from "./skills";

const info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <h2 className="section_title">Skills</h2>
        <span className="section__subtitle">
          Here are some of the technologies i have been working with:
        </span>
        <Skills />
      </div>
    </div>
  );
};

export default info;
