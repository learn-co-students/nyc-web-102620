import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Profile from "./Profile";

// redirecting after submitting a form?
// handling errors from the server (if a user isn't authenticated, what do we show them?)
// conditional rendering based on whether a user is logged in or not

// conditional rendering based on currentUser example
// function App() {
//   const [currentUser, setCurrentUser] = useState(null);

//   if (currentUser) {
//     return <AuthenticatedApp />
//   } else {
//     return <UnauthenticatedApp />;
//   };
// }

// function AuthenticatedApp() {
//   return (
//     <Switch>
//       <Route path="/"></Route>
//       <Route path="/profile"></Route>
//       <Route path="/pizzas"></Route>
//     </Switch>
//   );
// }

// function UnauthenticatedApp() {
//   return (
//     <Switch>
//       <Route path="/"></Route>
//       <Route path="/login"></Route>
//       <Route path="/signup"></Route>
//     </Switch>
//   );
// }

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // TODO: autologin: when the component renders, make a request with the token
  useEffect(() => {
    const token = localStorage.getItem("token");

    // fetch("http://localhost:3000/profile")
    fetch("http://localhost:3000/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((r) => r.json())
      .then((user) => {
        // save the user into state
        setCurrentUser(user);
      });
  }, []);

  // and redirect

  console.log({ currentUser });

  return (
    <>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <main>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/profile">
            {currentUser ? (
              <Profile currentUser={currentUser} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/">
            {currentUser ? (
              <h1>Welcome, {currentUser.username}</h1>
            ) : (
              <h1>Please Login or Sign Up</h1>
            )}
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
