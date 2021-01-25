import React, { useState } from "react";

function Profile({ currentUser }) {
  const [avatar, setAvatar] = useState(currentUser.avatar);
  const [bio, setBio] = useState(currentUser.bio);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: make a fetch request to edit the current user
    // then update that user in state in our App component
  }

  const { username } = currentUser;

  return (
    <form onSubmit={handleSubmit}>
      <h1>{username}'s Profile</h1>

      <label htmlFor="avatar">Profile Image</label>
      <input
        type="text"
        id="avatar"
        autoComplete="off"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
      <img
        src={
          avatar.length
            ? avatar
            : "https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png"
        }
        alt={username}
      />

      <label htmlFor="bio">Bio</label>
      <textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} />

      <input type="submit" value="Update" />
    </form>
  );
}

export default Profile;
