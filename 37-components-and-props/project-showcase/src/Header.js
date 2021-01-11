// import React from "react";
// Babel!
// transpiler
// Modern/Library JS -> JS for all browsers
// if (isGreeted) { "hi" } else { "bye"}
// statement
// true ? "hi" : "bye"
// expression

function Header() {
  const isGreeted = true;
  return (
    <h1 id="hi" className="blue">
      {isGreeted ? "hi" : "bye"}
    </h1>
  );
  // return React.createElement("h1", null, "Header");
}

export default Header;
