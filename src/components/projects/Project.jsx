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
              <h3 className="projects__modal-title">
                Who is the hateful twitter user?
              </h3>
              {/* <p className="projects__modal-description">Frontend Developer</p> */}
              <ul className="projects__modal-projects grid">
                <li className="projects__modal-project">
                  {/* <i className="uil uil-check-circle projects__modal-icon"></i> */}
                  <p className="projects__modal-info">
                    A machine-learning model that is developed into a web app
                    that detects hate- speech and fake news that are largely
                    spreading in Twitter. The system is able to detect who the
                    hateful user is in Twitter. Out of 100 tweets, the system is
                    able to detect 90 tweets accurately. The model will
                    automatically re-train and improve with an updated dataset.
                  </p>
                </li>
                <li className="projects__modal-project">
                  {/* <i className="uil uil-check-circle projects__modal-icon"></i> */}
                  <p className="projects__modal-info">
                    This web is created with the aid of Python – Django both for
                    the Backend and integration with the Frontend. Libraries
                    used are sklearn, numpy, nltk and pandas to assist the
                    machine learning model. As for Frontend, Django, javascript
                    and Bootstrap are used.
                  </p>
                </li>
                {/* <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info"> </p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="projects__content">
          <div>
            <i class="bx bx-desktop"></i>
            <h3 className="projects__title">
              Personal <br /> Project
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
              <h3 className="projects__modal-title">
                Video Conference (In Progress)
              </h3>
              {/* <p className="projects__modal-description"></p> */}
              <ul className="projects__modal-projects grid">
                <li className="projects__modal-project">
                  {/* <i className="uil uil-check-circle projects__modal-icon"></i> */}
                  <p className="projects__modal-info">
                    Pretty similar to googleMeet
                  </p>
                </li>
                <li className="projects__modal-project">
                  {/* <i className="uil uil-check-circle projects__modal-icon"></i> */}
                  <p className="projects__modal-info">
                    Technologies Used : React.js, Node.js , WebRTC, websocket
                  </p>
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
