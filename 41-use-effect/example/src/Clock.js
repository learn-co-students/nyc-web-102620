import React, { useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  // TODO:
  // use the useEffect hook to set an interval
  // every 1 second, update the time by setting state

  return <div>{time.toString()}</div>;
}

export default Clock;
