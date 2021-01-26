import React, { useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

function Comments({ paused }) {
  const [comments, setComments] = useState([]);

  function addComment(comment) {
    setComments((comments) => {
      return [...comments, comment];
    });
  }

  function deleteComment(id) {
    setComments((comments) => {
      return comments.filter((comment) => comment.id !== id);
    });
  }

  return (
    <div>
      <CommentList comments={comments} deleteComment={deleteComment} />
      <CommentForm addComment={addComment} paused={paused} />
    </div>
  );
}

export default Comments;
