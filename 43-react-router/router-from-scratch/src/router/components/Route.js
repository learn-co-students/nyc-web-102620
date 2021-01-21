import { useContext } from "react";
import { RouterContext } from "../context";

function Route({ path, children }) {
  const { location } = useContext(RouterContext);

  if (path === location.pathname) {
    return children;
  } else {
    return null;
  }
}

export default Route;
