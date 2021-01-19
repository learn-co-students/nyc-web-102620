import React from "react";

function MoreButton({ onButtonClick }) {
  return <button onClick={() => onButtonClick()}>More sushi!</button>;
}

export default MoreButton;
