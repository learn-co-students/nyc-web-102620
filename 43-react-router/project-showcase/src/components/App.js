import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./pages/Home";
import ProjectForm from "./pages/ProjectForm";
import ProjectList from "./pages/ProjectList";
import ProjectDetail from "./pages/ProjectPage";

// development - local: http://localhost:3000
// production: http://project-showcase.heroku.com

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }

  function handleAddProject(newProject) {
    // const newProjectArray = [newProject, ...projects];
    // setProjects(newProjectArray);
  }

  // function getCurrentPage() {
  //   const pathname = window.location.pathname;

  //   if (pathname === "/") {
  //     return <Home />;
  //   } else if (pathname === "/projects/add") {
  //     return <ProjectForm onAddProject={handleAddProject} />;
  //   } else if (pathname === "/projects") {
  //     return <ProjectList projects={projects} />;
  //   } else if (pathname === "/projects/1") {
  //     return <ProjectDetail />;
  //   } else {
  //     return <h1>404 not found</h1>;
  //   }
  // }

  /*
  function Route({ path, children }) {
    if (location.pathname === path) {
      return children
    }
    return null
  }
  */

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header
        title="Science Fair"
        isDarkMode={isDarkMode}
        onDarkModeClick={handleDarkModeClick}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects/add">
          <ProjectForm onAddProject={handleAddProject} />
        </Route>
        <Route exact path="/projects/:id">
          <ProjectDetail />
        </Route>
        <Route path="/projects">
          <ProjectList />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
