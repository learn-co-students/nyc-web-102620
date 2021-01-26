import React, { useRef, useEffect, useState, useContext } from "react";
import Controls from "./Controls";
import Likes from "./Likes";
import { PauseContext } from "../context/pause";

function getRandomNumber() {
  // random between 1 and
  const mult = Math.random() > 0.5 ? 1 : -1;
  const number = (Math.floor(Math.random() * 10) + 1) * mult;
  return number;
}

function Counter({ togglePaused }) {
  const [count, setCount] = useState(0);
  const [likedNumbers, setLikedNumbers] = useState({});
  const prevCountRef = useRef(0);

  const { paused } = useContext(PauseContext);

  console.log(paused);

  // when count changes
  useEffect(() => {
    // save the count
    prevCountRef.current = count;
  }, [count]);

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setCount((count) => count + getRandomNumber());
      }, 1000);

      return function cleanup() {
        clearInterval(interval);
      };
    }
  }, [paused]);

  function increment() {
    setCount((count) => count + 1);
  }

  function decrement() {
    setCount((count) => count - 1);
  }

  function like() {
    setLikedNumbers((likedNumbers) => {
      const likes = (likedNumbers[count] || 0) + 1;
      return {
        ...likedNumbers,
        [count]: likes,
      };
    });
  }

  let color = "black";
  if (count > prevCountRef.current) {
    color = "green";
  } else if (count < prevCountRef.current) {
    color = "red";
  }

  return (
    <div>
      <h2 style={{ color: color }}>Counter: {count}</h2>
      <Controls
        increment={increment}
        decrement={decrement}
        like={like}
        togglePaused={togglePaused}
      />
      <Likes likedNumbers={likedNumbers} />
    </div>
  );
}

export default Counter;
