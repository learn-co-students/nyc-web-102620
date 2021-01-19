import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onEatSushi }) {
  const [index, setIndex] = useState(0);

  //[1,2,3,4,5,6,7..100]
  //[1,2,3,4]
  //[5,6,7,8]

  // pagination!
  const firstFour = sushis.slice(index, index + 4);

  const sushiItems = firstFour.map((sushi) => {
    return <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} />;
  });

  function getNextFourSushi() {
    // 0 -> 4 -> 8
    setIndex(index + 4);
  }

  return (
    <div className="belt">
      {sushiItems}
      <MoreButton onButtonClick={getNextFourSushi} />
    </div>
  );
}

export default SushiContainer;
