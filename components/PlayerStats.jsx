import { useContext } from "react";

import { GameContext } from "../contexts/GameContext";
import classes from "../styles/PlayerStats.module.css";

import PlayerInfo from "./PlayerInfo";

export default function PlayerStats() {
  const { players, selectedCards } = useContext(GameContext);

  const draw =
    players.player1.matchedCards.length ===
      players.player2.matchedCards.length &&
    selectedCards &&
    selectedCards.every((card) => card.matched === true);

  return (
    <div className={classes["player-container"]}>
      <PlayerInfo player={players.player1} draw={draw} />
      <PlayerInfo player={players.player2} draw={draw} />
    </div>
  );
}
