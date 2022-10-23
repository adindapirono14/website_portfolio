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
            Hi there! My name is Adinda, an aspiring software engineer who loves
            designing and building systems and infrastructures. I enjoy building
            softwares and have experience in Frontend, Backend, and Mobile
            development.
          </p>
          <Info />
        </div>
      </div>
    </section>
  );
}

export default About;
