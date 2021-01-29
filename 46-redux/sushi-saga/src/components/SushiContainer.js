import React from "react";
import { useSelector } from "react-redux";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer() {
  const sushis = useSelector(({ sushis }) => {
    return sushis.items.slice(sushis.currentIndex, sushis.currentIndex + 4);
  });
  // const currentIndex = useSelector((state) => state.sushis.currentIndex);

  // const displaySushi = sushis.slice(currentIndex, currentIndex + 4);

  return (
    <div className="belt">
      {sushis.map((sushi) => (
        <Sushi key={sushi.id} sushi={sushi} />
      ))}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
