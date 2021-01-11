import React from "react";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
import projects from "../data/projects";

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
