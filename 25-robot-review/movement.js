let currentPosition = { x: 0, y: 0 };
let prevTile;

function init() {
  createGrid();
  setTarget();
  renderBot(currentPosition);
}

function randomTarget() {
  function randBetween(start, end) {
    return Math.floor(Math.random() * end) + start;
  }

  return [randBetween(0, 10), randBetween(0, 10)];
}

function setTarget() {
  const [targetX, targetY] = randomTarget();
  const targetTile = document.querySelector(
    `.tile[data-x='${targetX}'][data-y='${targetY}']`
  );
  targetTile.classList.add("goal");
}

function createGrid() {
  const board = document.querySelector("#board");

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const tile = document.createElement("div");
      tile.dataset.x = x;
      tile.dataset.y = y;

      tile.classList.add("tile");
      board.appendChild(tile);
    }
  }
}

function renderBot(targetPosition) {
  const newTile = document.querySelector(
    `.tile[data-x='${targetPosition.x}'][data-y='${targetPosition.y}']`
  );

  if (!newTile) {
    alert("Clang! Hit a wall");
    return false;
  } else {
    if (prevTile) {
      prevTile.classList.remove("robot");
    }

    newTile.classList.add("robot");
    if (newTile.classList.contains("goal")) {
      // 100ms timeout will render the css for the new position before the alert pops up
      setTimeout(() => {
        alert("Nice work! 🦾");
        newTile.classList.remove("goal");
        setTarget();
      }, 100);
    }

    prevTile = newTile;

    return true;
  }
}

function move(direction) {
  let { x, y } = currentPosition;

  switch (direction) {
    case "left":
      x--;
      break;
    case "right":
      x++;
      break;
    case "up":
      y--;
      break;
    case "down":
      y++;
      break;
  }

  const moved = renderBot({ x, y });
  if (moved) {
    currentPosition = { x, y };
  }
}
