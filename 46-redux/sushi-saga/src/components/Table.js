import React from "react";
import { useSelector } from "react-redux";
import ATM from "./ATM";

function Table({ plates = [] }) {
  const funds = useSelector((state) => state.user.funds);

  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <div className="remaining">
        <h1>You have: ${funds} remaining!</h1>
        <ATM />
      </div>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
