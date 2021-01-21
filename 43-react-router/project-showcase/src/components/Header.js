import React from "react";
import { NavLink } from "react-router-dom";

function Header({
  title,
  logo = "//",
  isDarkMode,
  onDarkModeClick,
  currentUser,
  setCurrentUser,
}) {
  function login() {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/login`, {
      method: "POST",
    })
      .then((r) => r.json())
      .then(setCurrentUser);
  }

  function logout() {
    setCurrentUser(null);
  }

  /*
  function Link({ to, children, ...props }) {
    function handleClick(e) {
      e.preventDefault()
      history.push(to)
    }

    return <a href={to} onClick={handleClick} {...props}>{children}</a>
  }
  */

  return (
    <header>
      <h1>
        <span className="logo">{logo}</span>
        {title}
      </h1>
      <nav>
        <NavLink exact to="/projects" className="button">
          All Projects
        </NavLink>
        <NavLink to="/projects/add" className="button">
          Add Project
        </NavLink>
        {currentUser ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
        <button onClick={onDarkModeClick}>
          {isDarkMode ? (
            <span role="img" label="sun">
              ☀️
            </span>
          ) : (
            <span role="img" label="moon">
              🌙
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}

export default Header;
