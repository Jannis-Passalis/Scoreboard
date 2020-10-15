import React from "react";
import "./Players.scss";

export default function Player(props) {
  const onClickIncrement = () => {
    props.incrementScore(props.id);
  };
  return (
    <li className="Player">
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      />
      <p>
        {props.name} (Score: {props.score})
        <button onClick={onClickIncrement}>+</button>
      </p>
    </li>
  );
}
