import React, { useState } from "react";
import "./project.css";

function Project() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="project section" id="project">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Projects i have done so far</span>
      <div className="projects__container container grid">
        <div className="projects__content">
          <div>
            <i class="bx bxl-twitter"></i>
            <h3 className="projects__title">
              FYP <br /> Project
            </h3>
          </div>
          <span className="projects__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right projects_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "projects__modal active-modal"
                : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects__modal-close"
              ></i>
              <h3 className="projects__modal-title">Product Designer</h3>
              <p className="projects__modal-description">
                deskripsi dri projeknya
              </p>
              <ul className="projects__modal-projects grid">
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info"> developing the UI</p>
                </li>
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info"> helped on the backend</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="projects__content">
          <div>
            <i class="bx bxl-twitter"></i>
            <h3 className="projects__title">
              314 <br /> Project
            </h3>
          </div>
          <span className="projects__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right projects_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "projects__modal active-modal"
                : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects__modal-close"
              ></i>
              <h3 className="projects__modal-title">Product Leader</h3>
              <p className="projects__modal-description">
                deskripsi dri projeknya
              </p>
              <ul className="projects__modal-projects grid">
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info"> developing the UI</p>
                </li>
                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info"> helped on the backend</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
