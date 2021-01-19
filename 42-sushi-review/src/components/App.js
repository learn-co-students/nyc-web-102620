import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  // Option 1: add a eaten property to all our sushi objects
  // [{id: 1, name: "Ebi", eaten: true}, {id: 2, name: "Eel", eaten: false}]

  // on the sushi object, i need a way to tell if that sushi is eaten
  // an array of sushi to pass to the Table to display empty plates

  // -> [{id: 1, name: "Ebit", eaten: true}]

  // Option 2: new array of eaten sushi
  // -> [{id: 1, name: "Ebit", eaten: true}]

  const [sushis, setSushis] = useState([]);
  const wallet = 100;

  const eatenSushi = sushis.filter((sushi) => {
    return sushi.eaten;
  });

  // given an array of object [{price: 10},{price: 15}]
  // return the total price
  const eatenSushiCost = eatenSushi.reduce((total, sushi) => {
    return total + sushi.price;
  }, 0);
  // let total = 0
  // for (const sushi of eatenSushi) {
  //   total += sushi.price
  // }
  console.log({ eatenSushiCost });

  const remainingWallet = wallet - eatenSushiCost;

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushis) => {
        const mappedSushis = sushis.map((sushi) => {
          return {
            ...sushi,
            eaten: false,
          };
        });
        setSushis(mappedSushis);
      });
  }, []);

  // when a sushi is clicked
  // we want to update state
  // in state, we want a new array
  // with all our original sushis
  // where only the sushi that was clicked is marked as eaten
  function handleEatSushi(eatenSushi) {
    // do you have enough money left to eat this?
    // have you already eaten this?

    if (!eatenSushi.eaten && remainingWallet >= eatenSushi.price) {
      const updatedSushis = sushis.map((sushi) => {
        if (sushi.id === eatenSushi.id) {
          return {
            ...sushi,
            eaten: true,
          };
        } else {
          return sushi;
        }
      });
      setSushis(updatedSushis);
    } else {
      alert("You're broke lol 💵");
    }
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatSushi={handleEatSushi} />
      <Table plates={eatenSushi} wallet={remainingWallet} />
    </div>
  );
}

export default App;
