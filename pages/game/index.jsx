import { useContext, useEffect, useMemo } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { GameContext } from "../../contexts/GameContext";
import GameBoard from "../../components/GameBoard";
import PlayerStats from "../../components/PlayerStats";
import GameOver from "../../components/GameOver";
import classes from "../../styles/Game.module.css";

export default function Game() {
  const router = useRouter();
  const { selectedCards } = useContext(GameContext);

  useEffect(() => {
    if (selectedCards.length === 0) {
      router.push("/");
    }
  }, [selectedCards, router]);

  const gameOver = useMemo(
    () =>
      selectedCards && selectedCards.length > 0
        ? selectedCards.every((card) => card.matched === true)
        : false,
    [selectedCards]
  );

  return (
    <div className={classes.container}>
      <Head>
        <title>Current Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <GameBoard />
        <PlayerStats />
        {gameOver && <GameOver />}
      </main>
    </div>
  );
}
