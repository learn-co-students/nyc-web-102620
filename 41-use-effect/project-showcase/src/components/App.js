import React, { useEffect, useState } from "react";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

// App() -> useEffect() -> fetch() -> setProjects() -> App()

function App() {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  console.log("App rendering (App function was called)");

  // when our component first loads,
  // fetch some data from an API
  // and set that data in state
  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((r) => r.json())
      .then((projectArray) => {
        setProjects(projectArray);
      });
  }, []);

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
    </div>
  );
}

export default App;
