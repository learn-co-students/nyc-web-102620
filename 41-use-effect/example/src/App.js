import React, { useState, useEffect } from "react";
import Clock from "./Clock";

// useEffect with ONLY one argument
// App() -> useEffect callback() -> setState() -> App() -> useEffect callback()

// second arg: dependencies array
// what variables the effect depends on in order to run
// empty array: [] only run the first time a component is rendered by a parent
// - common uses: making a fetch request, setting an interval

// this will run the every time the component renders
// useEffect(() => {
//   document.title = "MY GR8 APP";
//   console.log("useEffect called");
// });

// // this will only run the first time the component renders
// useEffect(() => {
//   document.title = "MY GR8 APP";
//   console.log("useEffect called");
// }, []);

// // this will run any time the count or text variables change
// useEffect(() => {
//   document.title = `${count} ${text}`;
//   console.log("useEffect called");
// }, [count, text]);

// used for making a fetch
// useEffect(() => {
// })

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count} clicks</button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Input says: {text}</p>
      <Clock />
    </div>
  );
}

export default App;
