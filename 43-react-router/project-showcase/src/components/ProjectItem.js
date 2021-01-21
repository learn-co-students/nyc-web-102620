import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProjectItem({ project }) {
  const [claps, setClaps] = useState(0);

  const { id, image, name, about, phase } = project;

  function handleClapClick() {
    setClaps(claps + 1);
  }

  return (
    <li className="card">
      <div className="project-image">
        <img src={image} alt={name} />
        <button className="claps" onClick={handleClapClick}>
          👏{claps}
        </button>
      </div>

      <div className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        <p>
          <Link to={`/projects/${id}`}>See Details</Link>
        </p>
      </div>

      <div className="extra">
        <span className="badge blue">Phase {phase}</span>
      </div>
    </li>
  );
}

export default ProjectItem;
