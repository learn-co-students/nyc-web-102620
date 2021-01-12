import React, { useState } from "react";

// find the button
// addEventListener("click")
// write a callback

// any time you have _dynamic_ data in a component,
// you should use state!

function ClickCounter() {
  // let likes = 0;
  const [likes, setLikes] = useState(0); // => [stateVariable, stateSetterFunction]
  // const [toggle, setToggle] = useState(true);

  function handleClick() {
    // console.log("before setLikes:", likes);

    // best practice: any time you are updating state
    // based on a previous value, use the callback syntax

    // pass in a value:
    setLikes(likes + 1);

    // pass in a callback:
    // setLikes((likes) => likes + 1);

    // console.log("after setLikes:", likes);
    // setToggle(false);
    // const h2 = event.target.closest("div").querySelector("h2");
    // h2.textContent = likes;
    // fetch()

    // ...more code
  }

  console.log("in function:", likes);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>There have been {likes} clicks</h2>
      <button onClick={handleClick}>Click Me {likes}</button>
    </div>
  );
}

export default ClickCounter;
