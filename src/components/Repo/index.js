import React from "react";
import { removeHyphensAndCapitalize } from "../../utlis/helpers";

function Repo({ project }) {
  const { name, repo, url, desc } = project;
  return (
    <div className="project" key={name}>
      <img
        src={require(`../../assets/image/${name}.png`)}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      <div className="project-info">
        <h3>
          <i className="fa fa-github"></i>
          <a href={url}>{removeHyphensAndCapitalize(name)}</a>{" "}
          <a href={repo}></a>
        </h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}
export default Repo;
