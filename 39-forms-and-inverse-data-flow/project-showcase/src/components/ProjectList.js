import React, { useState } from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const [phaseFilter, setPhaseFilter] = useState("All");
  const [projectSearch, setProjectSearch] = useState("");

  // filter the array we're displaying based on state
  const filteredProjects = projects
    .filter((project) => {
      return phaseFilter === "All" || project.phase === phaseFilter;
    })
    .filter((project) => {
      return project.name.toLowerCase().includes(projectSearch.toLowerCase());
    });

  // map to turn the filtered array into components
  const projectItems = filteredProjects.map((project) => {
    return <ProjectItem key={project.id} project={project} />;
  });

  return (
    <section>
      <h2>Projects</h2>

      <div className="phase-buttons">
        <button onClick={() => setPhaseFilter("All")}>All</button>
        <button onClick={() => setPhaseFilter(5)}>Phase 5</button>
        <button onClick={() => setPhaseFilter(4)}>Phase 4</button>
        <button onClick={() => setPhaseFilter(3)}>Phase 3</button>
        <button onClick={() => setPhaseFilter(2)}>Phase 2</button>
        <button onClick={() => setPhaseFilter(1)}>Phase 1</button>
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
