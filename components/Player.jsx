import { useState, useContext } from "react";
import { GameContext } from "../contexts/GameContext";

import classes from "../styles/Player.module.css";

export default function Player({ playerName }) {
  const [isEditing, setIsEditing] = useState(false);
  const { players, setPlayers } = useContext(GameContext);

  const playerKey = Object.keys(players).find(
    (key) => players[key].name === playerName
  );
  const selectedPlayer = players[playerKey];

  let editablePlayerName = playerName;

  function handleEditClick() {
    setIsEditing((prevState) => !prevState);
  }

  function handleChange(event) {
    setPlayers((prevState) => ({
      ...prevState,
      [playerKey]: { ...selectedPlayer, name: event.target.value },
    }));
  }

  if (isEditing) {
    editablePlayerName = (
      <input type="text" value={playerName} onChange={handleChange} />
    );
  }

  return (
    <div className={classes.wrapper}>
      <span className={`${classes.span} ${isEditing ? classes.editable : ""}`}>
        {editablePlayerName}
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </div>
  );
}
