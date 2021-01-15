import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("useEffect running");

    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // when the useEffect is done, run this function
    return function cleanup() {
      console.log("cleaning up");
      clearInterval(intervalId);
    };
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
