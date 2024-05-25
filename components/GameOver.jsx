import { useContext } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

import PlayerStats from "../components/PlayerStats";
import { GameContext } from "../contexts/GameContext";
import classes from "../styles/GameOver.module.css";

export default function GameOver() {
  const router = useRouter();
  const { players, restartGame } = useContext(GameContext);
  let result = null;
  if (
    players.player1.matchedCards.length > players.player2.matchedCards.length
  ) {
    result = `${players.player1.name} wins!`;
  } else if (
    players.player1.matchedCards.length < players.player2.matchedCards.length
  ) {
    result = `${players.player2.name} wins!`;
  } else {
    result = "It's a draw!";
  }

  function handleRestart() {
    restartGame();
  }

  function handleSetupNewGame() {
    router.push("/");
    restartGame(true);
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1>Game Over</h1>
        <h2>{result}</h2>
        <PlayerStats />
        <button onClick={handleRestart}>Restart game</button>
        <Link href="/">
          <button onClick={handleSetupNewGame}>Setup new game</button>
        </Link>
      </div>
    </div>
  );
}
