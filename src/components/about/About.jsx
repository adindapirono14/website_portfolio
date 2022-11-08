import React from "react";
import "./about.css";
import Info from "./info";

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title"> About Me</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container container grid">
        <div className="about__data">
          <p className="about__description">
            Hi there! My name is Adinda, an aspiring software engineer who just
            completed her studies. I majored in Digital System Security which
            further led me to this place. I am highly interested on how
            technologies shape human's life to a better one. I enjoyed the
            contant challenges presented and have a better understanding in
            Frontend.
          </p>
          <Info />
        </div>
      </div>
    </section>
  );
}

export default About;
