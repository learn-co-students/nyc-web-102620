import React, { useState } from "react";

function ProjectItem({ project }) {
  const [claps, setClaps] = useState(0);

  function handleClapClick() {
    setClaps(claps + 1);
  }

  return (
    <li className="card">
      <div className="image">
        <img src={project.image} alt={project.name} />
        <button className="claps" onClick={handleClapClick}>
          👏{claps}
        </button>
      </div>

      <div className="details">
        <h4>{project.name}</h4>
        <p>{project.about}</p>
        {project.link ? (
          <p>
            <a href={project.link}>Link</a>
          </p>
        ) : null}
      </div>

      <div className="extra">
        <span className="badge blue">Phase {project.phase}</span>
      </div>
    </li>
  );
}

export default ProjectItem;
