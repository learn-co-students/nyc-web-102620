import React from "react";
import Wallet from "./Wallet";

function Table({ plates = [] }) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <div className="remaining">
        <h1>You have: ${100} remaining!</h1>
        <Wallet />
      </div>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
