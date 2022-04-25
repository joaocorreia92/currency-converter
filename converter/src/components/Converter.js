import React, { useState } from "react";
import './Converter.css'

export default function Converter(props) {
  const [coinA, setCoinA] = useState("");
  const [coinB, setCoinB] = useState(0);

  const convert = async () => {
    let from_to = `${props.coinA}_${props.coinB}`
    let url = `https://free.currconv.com/api/v7/convert?q=${from_to}&compact=y`
    let header = ("Access-Control-Allow-Origin: http://localhost:3000/")

    fetch(url, header).then(res => {
      return res.json()
    }).then(json => {
      let price = json[from_to].val
      setCoinB((parseFloat(coinA * price)).toFixed(2))
    })
  }

  return (
    <div className="converter">
      <h2>
        {props.coinA} to {props.coinB}
      </h2>
      <input
        type="text"
        onChange={(e) => {
          setCoinA(e.target.value);
        }}
      ></input>
      <input type="button" value="convert" onClick={convert}></input>
      <h2 type="text">{coinB}</h2>
    </div>
  );
}
