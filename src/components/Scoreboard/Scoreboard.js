import React, { useState } from "react";
import AddPlayerForm from "../AddPlayer";
import Players from "../Players/Players";
import "./Scoreboard.scss";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);
  const [sort_by, set_sort_by] = useState("score");
  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };
  const incrementScore = (playerid) => {
    const id = playerid;
    const new_players_array = players.map((player) => {
      if (player.id === id) {
        return {
          ...player,
          score: player.score + 1,
        };
      } else {
        return player;
      }
    });
    set_players(new_players_array);
  };

  const players_sorted =
    sort_by === "name"
      ? [...players].sort(compare_name)
      : [...players].sort(compare_score);

  const resetScore = () => {
    const reset = players.map((player) => {
      return { ...player, score: 0 };
    });
    set_players(reset);
  };

  const addPlayer = (name) => {
    console.log("Let's add a new player with the name:", name);
    const addedPlayer = {
      id: players.length + 1,
      name,
      score: 0,
    };
    const newPlayersArray = [...players, addedPlayer];
    set_players(newPlayersArray);
  };

  return (
    <div className="Scoreboard">
      <h1>Ultimate Scoreboard</h1>
      <button onClick={resetScore}>Reset</button>
      <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <p>Player's scores:</p>
      <ul>
        {players_sorted.map((player) => {
          return (
            <div key={player.id}>
              <Players
                name={player.name}
                score={player.score}
                incrementScore={incrementScore}
                id={player.id}
              />
            </div>
          );
        })}
        <AddPlayerForm addPlayer={addPlayer} />
      </ul>
    </div>
  );
}
