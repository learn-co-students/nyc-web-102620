import React from "react";
import Comment from "./Comment";

function CommentList({ comments, deleteComment }) {
  return (
    <div>
      <h2>Comments:</h2>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          deleteComment={deleteComment}
        />
      ))}
    </div>
  );
}

export default CommentList;
