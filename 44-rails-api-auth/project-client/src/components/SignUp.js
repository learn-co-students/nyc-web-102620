import React, { useState } from "react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setAvatar] = useState("");
  const [bio, setBio] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: make a fetch request to register a new user
    // save the user's token
    // then set that user in state in our App component
    // and redirect to the home page
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup</h1>

      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="avatar">Profile Image</label>
      <input
        type="text"
        id="avatar"
        autoComplete="off"
        value={image}
        onChange={(e) => setAvatar(e.target.value)}
      />
      <img
        src={
          image.length
            ? image
            : "https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png"
        }
        alt={username}
      />

      <label htmlFor="bio">Bio</label>
      <textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input type="submit" value="Signup" />
    </form>
  );
}

export default SignUp;
