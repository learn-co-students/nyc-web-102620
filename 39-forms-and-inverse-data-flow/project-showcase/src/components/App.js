import React, { useState } from "react";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

function App() {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // when the button is clicked (add onClick with a callback)
  function handleFetchProjects() {
    // make a fetch request (write a fetch request)
    fetch("http://localhost:4000/projects")
      .then((r) => r.json())
      .then((projectArray) => {
        // show all the projects on the page
        // 1. update the project variable
        // 2. rerender
        setProjects(projectArray);
      });
  }

  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }

  function handleAddProject(newProject) {
    // ADD to an array:
    // NO: projects.push(newProject)

    // create a NEW array
    const newProjectArray = [newProject, ...projects];
    // setState - update the value & rerender
    setProjects(newProjectArray);
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header
        title="Science Fair"
        isDarkMode={isDarkMode}
        onDarkModeClick={handleDarkModeClick}
      />
      <ProjectForm onAddProject={handleAddProject} />
      <ProjectList projects={projects} />

      <button onClick={handleFetchProjects}>Fetch Projects</button>
    </div>
  );
}

export default App;
