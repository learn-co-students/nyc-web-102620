import { useContext } from "react";
import { BrowserRouterContext } from "./BrowserRouter";

function Route({ path, exact, children }) {
  const { location } = useContext(BrowserRouterContext);

  if (path === location.pathname) {
    return children;
  } else {
    return null;
  }
}

export default Route;
