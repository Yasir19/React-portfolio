import React from "react";

function Education() {
  return (
    <section className="my-5">
        <h3>Education</h3>
        <div class="resume-container">
        <h4>Master of Science</h4>
        <h4>Information Systems W/ Graduate Cybersecurity Cer</h4>
        <h5>University of Phoenix</h5>
        <h5>05/2021</h5>
        </div>
        <div>
        <ul className="skills">
          <li>Cumulative GPA: 3.98 /4.0</li>
          <li>Member of Dean’s List </li>
          <li>
            Coursework: Software Project management, Systems Analysis and
            Design, Organizational Database Management, Advance Operation
            management.{" "}
          </li>
        </ul>
      </div>
      <div class="resume-container">
        <h4>Coding Boot Camp </h4>
        <h4>Full Stack Development</h4>
        <h5>The University of Texas</h5>
        <h5>04/2022</h5>
        </div>
        <div>
        <ul className="skills">
          <li>
            Design, develop, and test full stack project, using development best
            practices such as MVC.{" "}
          </li>
          <li>Design Databases using MySQL and MongoDB.</li>
          <li>
            Create a full CRUD operation using RESTful APIs architectural style.{" "}
          </li>
          <li>MERN and Graphql</li>
        </ul>
      </div>
      <div class="resume-container">
        <h4>Bachelor of Science</h4>
        <h4>Computer Science </h4>
        <h5>Almustansiriyah University</h5>
        <h5>06/2011</h5>
        </div>
        <div>
        <ul className="skills">
          <li>Cumulative GPA: 3.45 /4.0</li>
        </ul>
      </div>
    </section>
  );
}
export default Education;
