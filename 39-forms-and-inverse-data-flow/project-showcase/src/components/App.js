import React, { useState } from "react";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

function App() {
  const [projects, setProjects] = useState([]);

  return (
    <div className={true ? "App" : "App light"}>
      <Header title="Science Fair" />
      <ProjectForm />
      <ProjectList projects={projects} />
      <button>Fetch Projects</button>
    </div>
  );
}

export default App;
