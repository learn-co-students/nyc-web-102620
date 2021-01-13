import React from "react";

function Header({ title, logo = "//" }) {
  return (
    <header>
      <h1>
        <span className="logo">{logo}</span>
        {title}
      </h1>
      <button>Dark Mode</button>
    </header>
  );
}

export default Header;
