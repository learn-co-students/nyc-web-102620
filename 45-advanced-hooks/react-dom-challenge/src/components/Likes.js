import React from "react";

function Likes({ likedNumbers }) {
  return (
    <div>
      <h2>Likes:</h2>
      {Object.keys(likedNumbers).map((key) => (
        <p key={key}>
          {key}: {likedNumbers[key]} likes
        </p>
      ))}
    </div>
  );
}

export default Likes;
