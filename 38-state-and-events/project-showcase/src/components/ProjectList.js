import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList(props) {
  const projectItems = props.projects.map((project) => {
    return <ProjectItem key={project.id} project={project} />;
  });

  return (
    <section>
      <h2>Projects</h2>
      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input type="text" placeholder="Search..." />
      <h4>
        Showing {projectItems.length} of {props.projects.length} total projects
      </h4>
      <ul className="cards">{projectItems}</ul>
    </section>
  );
}

export default ProjectList;
