import React from "react";

function Comment({ comment, deleteComment }) {
  return (
    <p>
      <span>{comment.text}</span>
      <button onClick={() => deleteComment(comment.id)}>X</button>
    </p>
  );
}

export default Comment;
