import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Time({ unitType }) {
  const [showButtons, setShowButtons] = useState(false);
  const buttonVisibility = () => {
    setShowButtons(!showButtons);
  };

  const { time, second, minute, hour } = useSelector((state) => state);
  const dispatch = useDispatch();

  let value = 0;
  switch (unitType) {
    case "second":
      value = parseInt((time / second) % 60);
      break;
    case "minute":
      value = parseInt((time / minute) % 60);
      break;
    case "hour":
      value = parseInt((time / hour) % 60);
      break;
    default:
  }
  value = value < 10 ? `0${value}` : value;

  const inc = () => {
    dispatch({ type: "INCREMENT", unitType });
  };
  const dec = () => {
    dispatch({ type: "DECREMENT", unitType });
  };

  return (
    <div onMouseEnter={buttonVisibility} onMouseLeave={buttonVisibility}>
      <div className="time-value">
        <label>{value}</label>
      </div>
      {showButtons ? (
        <div className="time-buttons">
          {" "}
          <button onClick={inc}>
            <i class="fa fa-plus fa-3x inc" aria-hidden="true"></i>
          </button>{" "}
          <button onClick={dec}>
            <i class="fa fa-minus fa-3x dec" aria-hidden="true"></i>
          </button>{" "}
        </div>
      ) : null}
    </div>
  );
}
