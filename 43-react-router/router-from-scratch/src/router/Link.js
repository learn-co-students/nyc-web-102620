import { useContext } from "react";
import { BrowserRouterContext } from "./BrowserRouter";

function Link({ to, children, ...props }) {
  const { history } = useContext(BrowserRouterContext);

  console.log(history);

  function handleClick(e) {
    e.preventDefault();
    history.push(to);
  }

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

export default Link;
