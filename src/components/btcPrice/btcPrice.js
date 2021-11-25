import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";
import BTCAPIURL from "../../apiCall";

import "./btcPrice.css";

const getBTCData = () => {
  return (dispatch) => {
    axios
      .get(BTCAPIURL)
      .then((res) => dispatch({ type: "FETCH_DATA", data: res.data.bpi }));
  };
};

export default function BTCPrice() {
  const [createInterval, setCreateInterval] = useState(true);

  const {
    time,
    second,
    btcData: { USD, EUR, GBP },
    setAnim,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  if (createInterval) {
    dispatch(getBTCData());
    setInterval(() => {
      console.log("sdfsdfg");
      dispatch(getBTCData());
    }, 3000);
    setCreateInterval(false);
  }

  return (
    <div className="container">
      <div className="priceLabel">
        <br />
        <br />
        <p>
          {USD.code}: {USD.rate}
        </p>
        <p>
          {" "}
          {EUR.code}: {EUR.rate}
        </p>
        <p>
          {" "}
          {GBP.code}: {GBP.rate}
        </p>
      </div>
      <div className={`${setAnim ? "imgAnim" : ""}`}>
        <img className="btcImg" src="./btc.png" alt="btc" />
      </div>
    </div>
  );
}
