import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  const [selectedItem, setSelectedItem] = useState("Profile");
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */

  let detailsToDisplay = <Profile />;

  if (selectedItem === "Profile") {
    detailsToDisplay = <Profile />;
  } else if (selectedItem === "Photos") {
    detailsToDisplay = <Photos />;
  }

  function handleMenuSelection(newSelection) {
    setSelectedItem(newSelection);
  }

  return (
    <div>
      <MenuBar selectedItem={selectedItem} onMenuClick={setSelectedItem} />
      {detailsToDisplay}
    </div>
  );
}

export default MainBox;
