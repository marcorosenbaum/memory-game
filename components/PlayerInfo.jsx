import { useContext } from "react";

import { GameContext } from "../contexts/GameContext";

import classes from "../styles/PlayerInfo.module.css";

export default function PlayerInfo({ player, draw }) {
  const { currentPlayer } = useContext(GameContext);
  return (
    <div>
      <h1
        className={
          !draw && currentPlayer.name === player.name
            ? classes["current-player"]
            : ""
        }
      >
        {player.name} - Points: {player.matchedCards.length}
      </h1>

      <ul>
        {player.matchedCards.map((card, index) => (
          <li key={index}>
            {card[0].text} = {card[1].text}
          </li>
        ))}
      </ul>
    </div>
  );
}
