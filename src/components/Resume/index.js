import React from "react";


function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
        <p>
          
          <a href="assets/Yasir-Habboo-resume-c1.docx"
           download="yasir habboo.docx">

          <button>Get Resume</button>
          </a>
        </p>
        <h3>Front-end Skills</h3>
        <ul className="skills">
            <li>JavaScript</li>
            <li> React</li>
            <li>CSS</li>
            <li>BootStrap</li>
        </ul>
        <h3>Back-end Skills</h3>
        <ul className="skills">
        <li>JavaScript</li>
            <li> Node</li>
            <li>Express</li>
            <li>MySQL</li>
            <li> Sequelize</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li> APIs</li>
            <li>RESTful</li>
            <li>GraphQL</li>
            </ul>

      </div>
    </section>
  );
}
export default Resume;
