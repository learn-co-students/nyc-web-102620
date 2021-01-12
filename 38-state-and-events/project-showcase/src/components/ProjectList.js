import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
// TODO: replace this with a fetch request (eventually)
import projects from "../data/projects";

function ProjectList() {
  const [projectSearch, setProjectSearch] = useState("");

  // i want a variable that I can compare with the names of the projects
  // so that I can filter the list of items being displayed

  // filter to change the array we're displaying
  const filteredProjects = projects.filter((project) => {
    return project.name.toLowerCase().includes(projectSearch.toLowerCase());
  });

  // map to turn the array into components
  const projectItems = filteredProjects.map((project) => {
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

      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setProjectSearch(e.target.value)}
      />

      <ul className="cards">{projectItems}</ul>
    </section>
  );
}

export default ProjectList;
