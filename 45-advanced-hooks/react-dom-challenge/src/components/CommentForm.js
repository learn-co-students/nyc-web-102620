import React, { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { usePaused } from "../context/pause";

function CommentForm({ addComment }) {
  const [text, setText] = useState("");
  const inputRef = useRef();
  const formRef = useRef();

  // const { paused } = useContext(PauseContext);
  const { paused } = usePaused();

  useEffect(() => {
    inputRef.current.focus();
    const measurements = formRef.current.getBoundingClientRect();
    // console.log(measurements);

    // videoRef.current.play()
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    addComment({ text, id: uuid() });
    setText("");
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="comment">Leave a Comment</label>

      {/* <video src={mediaFile} ref={videoRef} /> */}

      <input
        ref={inputRef}
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
