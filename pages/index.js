import { useContext, useEffect, useState } from "react";
import Head from "next/head";

import { connectToDatabase } from "../lib/mongodb";

import Player from "../components/Player";
import SetupGame from "../components/SetupGame";
import { GameContext } from "../contexts/GameContext";

import classes from "../styles/Start.module.css";

export default function Start({ dataFromMongoDB }) {
  const [isLoading, setIsLoading] = useState(true);
  const { players, setCards } = useContext(GameContext);

  useEffect(() => {
    setCards((prev) => [...dataFromMongoDB]);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Memory Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Setup Memory Game</h1>
      <div className={classes.wrapper}>
        <Player playerName={players.player1.name} />
        <Player playerName={players.player2.name} />
      </div>

      <SetupGame />
    </div>
  );
}

export async function getServerSideProps() {
  const db = await connectToDatabase();
  const data = await db.collection("cards").find({}).toArray();

  return {
    props: {
      dataFromMongoDB: JSON.parse(JSON.stringify(data)),
    },
  };
}
