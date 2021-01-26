import { useState } from "react";
import Comments from "./Comments";
import Counter from "./Counter";

function App() {
  const [paused, setPaused] = useState(false);

  function togglePaused() {
    setPaused((paused) => !paused);
  }

  return (
    <div className="App">
      <h1>React DOM Challenge</h1>
      <Counter paused={paused} togglePaused={togglePaused} />
      <hr />
      <Comments paused={paused} />
    </div>
  );
}

export default App;
