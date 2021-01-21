import React, { useEffect, useState } from "react";
import history from "history/browser";

export const BrowserRouterContext = React.createContext();

function BrowserRouter({ children }) {
  const [location, setLocation] = useState(history.location);

  useEffect(() => {
    history.listen(({ location, action }) => {
      console.log(action, location.pathname, location.state);
      setLocation(location);
    });
  }, []);

  const value = {
    location,
    history,
  };

  return (
    <BrowserRouterContext.Provider value={value}>
      {children}
    </BrowserRouterContext.Provider>
  );
}

export default BrowserRouter;
