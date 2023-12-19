/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from "react";
import "./services.css";
import certificate from '../../images/VIT.png'
export default function Services() {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="hackathons">
      <h2 className="section_title">Hackathons</h2>

      <div className="services_container container grid">
        <div className="services_content">
          <div>
            <i className="uil uil-rocket services_icon"></i>
            <h3 className="services_title">VR SIDDARTHA</h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_modal-close"
              ></i>
              <h3 className="services_modal-title">TechEden 2.0</h3>
              <p className="services_modal-description">
                This is where I share my experiences participating in hackathons
                and conducting workshops that have helped me grow both
                personally and professionally.
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="" target="new"></a>
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="" target="new"></a>
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="" target="new"></a>
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="" target="new"></a>
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="" target="new"></a>
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="" target="new"></a>
                  </p>
                </li>
              </ul>
              <img
                src="https://i.pinimg.com/736x/68/f8/f0/68f8f023c2ddd3eff9a8f31d1029f5d2.jpg"
                className="modal-image"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-notebooks services_icon"></i>
            <h3 className="services_title">SIH INTERNALS</h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_modal-close"
              ></i>
              <h3 className="services_modal-title">SIH Internal Hackathon</h3>
              <p className="services_modal-description">
                This is where I share my experiences participating in hackathons
                and conducting workshops that have helped me grow both
                personally and professionally. Dive into the exciting world of
                collaborative problem-solving and continuous learning.
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="" target="new"></a>
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="" target="new"></a>
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="" target="new"></a>
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="" target="new"></a>
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="" target="new"></a>
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="" target="new"></a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-book-reader services_icon"></i>
            <h3 className="services_title">PRAJWALAN 2023</h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(4)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 4
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_modal-close"
              ></i>
              <h3 className="services_modal-title">Prajwalan 2023</h3>
              <p className="services_modal-description">
              Participated in the hackthon challenge as a four member team and drafted a platforom that provides real-time evaluation of a student based on studies and other cirrcular activities, helping the student in identifying their stand in the class and improving them.
              <ul className="services_modal-services grid">
              <li><strong>TEAM MEMBERS</strong></li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="" target="new">R.Pallavi</a>
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="" target="new">P.Revathi</a>
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="" target="new">B.Rohith</a>
                  </p>
                </li>
              </ul>
              </p>
              <img
                src={certificate}
                className="modal-image"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-rocket  services_icon"></i>
            <h3 className="services_title">STARTUP SPARK</h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_modal-close"
              ></i>
              <h3 className="services_modal-title">Startup Spark</h3>
              <p className="services_modal-description">As a team of three members participated in it and presented our revenue genrative startup about marketing through online games.We used Online Housie and Quiz platforms we made and used them of marketing local shops into people & student community.
              <ul className="services_modal-services grid">
              <li><strong>TEAM MEMBERS</strong></li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="" target="new">V.Puneeth</a>
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="" target="new">V.Siva Mani</a>
                  </p>
                </li>
              </ul>
              </p>
              <img
                src={certificate}
                className="modal-image"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-cell services_icon"></i>
            <h3 className="services_title">DS WITH PYTHON</h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(5)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 5
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_modal-close"
              ></i>
              <h3 className="services_modal-title">DS Bootcamp using Python</h3>
              <p className="services_modal-description">
                This is where I share my experiences participating in hackathons
                and conducting workshops that have helped me grow both
                personally and professionally. Dive into the exciting world of
                collaborative problem-solving and continuous learning.
                <ul className="services_modal-services grid">
                <li><strong>TEAM MEMBERS</strong></li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="https://www.linkedin.com/in/rohitb0454/" target="new">P.Chaitanya Srujana</a>
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="https://www.linkedin.com/in/praveentech21/" target="new">P.Revathi</a>
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="https://www.linkedin.com/in/michael-sanjay-joseph-740983266/" target="new">G.Yakshine Ananya</a>
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="https://www.linkedin.com/in/harshasai007" target="new">V.Harsha</a>
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="https://www.linkedin.com/in/harshasai007" target="new">B.Rohith</a>
                  </p>
                </li>

              </ul>
              </p>
              <img
                src={certificate}
                className="modal-image"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-share-alt  services_icon"></i>
            <h3 className="services_title">TECHEDEN 2.0</h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(6)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 6
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_modal-close"
              ></i>
              <h3 className="services_modal-title">TechEden 2.0 - VITAP</h3>
              <p className="services_modal-description">
                We participated as a team of 5 members and developed a platform
                that connnects potential learners with industrial experts or
                working professionals for upskilling themselves in fields like
                AI,ML,DS and many more..!
                
              <ul className="services_modal-services grid">
                <li><strong>TEAM MEMBERS</strong></li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="https://www.linkedin.com/in/rohitb0454/" target="new">B.Rohith</a>
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="https://www.linkedin.com/in/praveentech21/" target="new">Ch.Ravi Kumar</a>
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="https://www.linkedin.com/in/michael-sanjay-joseph-740983266/" target="new">K.Sanju</a>
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    <a href="https://www.linkedin.com/in/harshasai007" target="new">V.Harsha</a>
                  </p>
                </li>
              </ul>
              </p>
              <img
                src={certificate}
                className="modal-image"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
