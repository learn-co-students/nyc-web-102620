import React from "react";
import ClickCounter from "./ClickCounter";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

function App() {
  return (
    <div className="App">
      <Header title="Science Fair" />
      <ClickCounter />
      <ProjectForm />
      <ProjectList />
    </div>
  );
}

export default App;
