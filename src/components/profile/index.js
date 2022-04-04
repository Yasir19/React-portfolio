import React from "react";
import Typical from "react-typical";
import './profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/Yasir19">
                <i className="fa fa-github"></i>
                <a href="https://www.linkedin.com/in/yasir-habboo">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/HabbooYasir">
                  <i className="fa fa-twitter"></i>
                </a>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highligted-text">Yasir</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer",
                    1000,
                    "Bulding solutions ",
                    1000,
                    "MERN Sack Dev",
                    1000,
                    "Love to Build Internet Staff",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                I'm a full-stack developer who is passionate about JavaScript,
                deploying state-of-art applications, building great user
                experiences by bringing simplicity to life, and constantly
                learning.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a
              href="assets/Yasir-Habboo-resume-c1.docx"
              download="yasir habboo.docx"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
