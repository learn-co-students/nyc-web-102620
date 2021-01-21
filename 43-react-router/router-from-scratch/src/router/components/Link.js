import { useContext } from "react";
import { RouterContext } from "../context";

function Link({ to, children, ...props }) {
  const { history } = useContext(RouterContext);

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
