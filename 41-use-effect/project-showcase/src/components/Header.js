import React from "react";

function Header({ title, logo = "//", isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h1>
        <span className="logo">{logo}</span>
        {title}
      </h1>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;
