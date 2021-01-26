import { createContext, useContext, useState } from "react";

// global state: paused?

// create context object
const PauseContext = createContext();

// create a context provider component
function PauseProvider({ children }) {
  const [paused, setPaused] = useState(true);

  function toggle() {
    setPaused((paused) => !paused);
  }

  const value = { paused: paused, toggle: toggle };

  return (
    <PauseContext.Provider value={value}>{children}</PauseContext.Provider>
  );
}

// custom hook!
function usePaused() {
  const value = useContext(PauseContext);
  return value;
}

// use provider to wrap our app ✅

// use context in whatever components need that global state ✅

export { usePaused, PauseContext, PauseProvider };
