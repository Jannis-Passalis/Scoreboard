import React, { useState } from "react";

export default function AddPlayerForm({ addPlayer }) {
  const [name, set_name] = useState("");
  const onChange = (event) => {
    console.log("new input .value:", event.target.value);
    set_name(event.target.value);
  };
  const addPlayerButton = () => {
    addPlayer(name);
  };

  return (
    <div className="AddPlayerForm">
      <p>
        New player: {""}{" "}
        <input
          value={name}
          onChange={onChange}
          type="text"
          placeholder="Name"
        />{" "}
        <button onClick={addPlayerButton}>Add</button>
      </p>
    </div>
  );
}
