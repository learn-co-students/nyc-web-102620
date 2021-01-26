import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function CommentForm({ paused, addComment }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addComment({ text, id: uuid() });
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="comment">Leave a Comment</label>
      <input
        type="text"
        id="comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={paused} type="submit">
        submit
      </button>
    </form>
  );
}

export default CommentForm;
