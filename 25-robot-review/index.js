document.addEventListener("DOMContentLoaded", function () {
  // initializes the board
  init();

  // ADD CODE HERE!

  // find the container for the moves and save it to a variable
  const movesContainer = document.querySelector("#moves-container");
  const moveButton = document.querySelector("#move-button");

  // Event delegation!!!!
  // movesContainer.addEventListener("click", (event) => {
  //   // is the element that was clicked something we care about?
  //   console.log(event.target);
  //   // if (event.target.matches("li")) {
  //   // if (event.target.tagName === "LI") {
  //   if (event.target.dataset.type === "moves-list") {
  //     event.target.remove();
  //     // movesContainer.removeChild(event.target)
  //   }
  // });

  moveButton.addEventListener("click", () => {
    // const firstLi = movesContainer.children[0];
    // const firstLi = movesContainer.firstElementChild
    // movesContainer.querySelector("li");
    // document.querySelector("#moves-container li");

    // while there are moves left in the list
    document.querySelectorAll("li").forEach((li, index) => {
      // remove them every 500 ms
      console.log("in forEach the time is", performance.now());

      setTimeout(function () {
        console.log("in setTimeout the time is", performance.now());
        move(li.textContent);
        li.remove();
      }, 500 * (index + 1));
    });

    // let interval = setInterval(function () {
    //   let li = movesContainer.querySelector("li");

    //   if (li) {
    //     // move the robot
    //     move(li.textContent);
    //     // remove the li
    //     li.remove();
    //   } else {
    //     clearInterval(interval);
    //   }
    // }, 500);
  });

  function renderMove(direction) {
    // create an element
    let moveLi = document.createElement("li");
    // adding its properties
    moveLi.innerText = direction.toLowerCase();
    moveLi.dataset.type = "moves-list";
    // slapping it on the DOM
    movesContainer.appendChild(moveLi);

    moveLi.addEventListener("click", (event) => {
      moveLi.remove();
    });
  }

  // add an event listener to the document for the keydown event
  document.addEventListener("keydown", function (event) {
    const keyPress = event.key;

    if (keyPress.includes("Arrow")) {
      const direction = keyPress.slice(5);
      renderMove(direction);
    }

    // if (event.key === "ArrowDown") {
    //   renderMove("Down");
    // } else if (event.key === "ArrowUp") {
    //   renderMove("Up");
    // } else if (event.key === "ArrowLeft") {
    //   renderMove("Left");
    // } else if (event.key === "ArrowRight") {
    //   renderMove("Right");
    // }
  });
});
