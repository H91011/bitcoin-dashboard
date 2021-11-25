import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Time from "./time";
import "./counter.css";

export default function Counter() {
  const [createInterval, setCreateInterval] = useState(true);
  let timeInterval;

  const { time } = useSelector((state) => state);
  const dispatch = useDispatch();

  if (createInterval) {
    clearInterval(timeInterval);
    timeInterval = setInterval(() => {
      if (time) {
        dispatch({ type: "DECREMENT", unitType: "second" });
      }
    }, 1000);
    setCreateInterval(false);
  }

  return (
    <div className="counter">
      <Time unitType="hour" />
      <strong>:</strong>
      <Time unitType="minute" />
      <strong>:</strong>
      <Time unitType="second" />
    </div>
  );
}
