import React, { useEffect, useState } from "react";
import history from "history/browser";
import { RouterContext } from "../context";

function BrowserRouter({ children }) {
  const [location, setLocation] = useState(history.location);

  useEffect(() => {
    return history.listen(({ location }) => {
      setLocation(location);
    });
  }, []);

  return (
    <RouterContext.Provider
      value={{
        location,
        history,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
}

export default BrowserRouter;
