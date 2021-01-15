import React, { useState } from "react";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

function App() {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  function handleFetchClick() {
    fetch("http://localhost:4000/projects")
      .then((r) => r.json())
      .then((projectArray) => {
        setProjects(projectArray);
      });
  }

  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }

  function handleAddProject(newProject) {
    const newProjectArray = [newProject, ...projects];
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

      <button onClick={handleFetchClick}>Fetch Projects</button>
    </div>
  );
}

export default App;
