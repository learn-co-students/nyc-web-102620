import { useState } from "react";
import Filter from "./Filter";
import HogTile from "./HogTile";

function HogList({ hogs }) {
  const [isShowingOnlyGreased, setIsShowingOnlyGreased] = useState(false);
  const [sortBy, setSortBy] = useState("weight");

  // assembly line!
  // raw materials (objects)
  const hogTiles = hogs
    // filter out the junk
    .filter((hog) => {
      if (isShowingOnlyGreased) {
        return hog.greased;
      } else {
        return true;
      }
    })
    .sort((hogA, hogB) => {
      // check what we're sorting by
      // write some sort logic to return -1, 0, or 1
      if (sortBy === "weight") {
        return hogA.weight - hogB.weight;
      } else {
        return hogA.name.localeCompare(hogB.name);
      }
    })
    // build the components
    .map((hog) => <HogTile key={hog.name} hog={hog} />);
  // components

  return (
    <div>
      <Filter
        isShowingOnlyGreased={isShowingOnlyGreased}
        setIsShowingOnlyGreased={setIsShowingOnlyGreased}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <div className="ui grid container">{hogTiles}</div>
    </div>
  );
}

export default HogList;
