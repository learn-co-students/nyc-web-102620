import React from "react";
import { Link } from "react-router-dom";

function NavBar({ currentUser, setCurrentUser }) {
  function handleLogout() {
    // remove the user from state
    setCurrentUser(null);
    // remove the token from localStorage
    localStorage.removeItem("token");
  }

  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        {currentUser ? (
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;
