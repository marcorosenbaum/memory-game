import { useContext, useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// import allCards from "../cards";
import { GameContext } from "../contexts/GameContext";

import classes from "../styles/SetupGame.module.css";

export default function SetupGame() {
  const router = useRouter();

  const {
    cards,
    selectedCards,
    setSelectedCards,
    currentPlayer,
    setCurrentPlayer,
    players,
  } = useContext(GameContext);

  const englishCards = useMemo(
    () =>
      selectedCards.map((card) => ({
        id: card.id,
        lang: "english",
        text: card.text.english,

        flipped: card.flipped,
        matched: card.matched,
      })),
    [selectedCards]
  );
  const swedishCards = useMemo(
    () =>
      selectedCards.map((card) => ({
        id: card.id,
        lang: "swedish",
        text: card.text.swedish,
        flipped: card.flipped,
        matched: card.matched,
      })),
    [selectedCards]
  );

  function createShuffledCards(englishCards, swedishCards) {
    const allGameCards = [...englishCards, ...swedishCards];
    const shuffledCards = allGameCards.sort(() => Math.random() - 0.5);
    return shuffledCards;
  }

  function handleCardSelection(event) {
    const cardId = event.target.value;
    const card = cards.find((card) => card.id === cardId);

    setSelectedCards((prevCards) => {
      if (
        event.target.checked &&
        !prevCards.some((selectedCard) => selectedCard.id === cardId)
      ) {
        return [...prevCards, card];
      } else if (
        !event.target.checked &&
        prevCards.some((selectedCard) => selectedCard.id === cardId)
      ) {
        return prevCards.filter((selectedCard) => selectedCard.id !== cardId);
      } else {
        return prevCards;
      }
    });
  }

  function handleStartGame() {
    setCurrentPlayer(
      currentPlayer.name === players.player1.name
        ? players.player2
        : players.player1
    );
    setSelectedCards((prev) => [
      ...createShuffledCards(englishCards, swedishCards),
    ]);

    router.push("/game");
  }

  function handleGetRandomCards() {
    if (selectedCards.length > 0) {
      setSelectedCards((prev) => []);
    }
    const randomCards = [...cards].sort(() => Math.random() - 0.5).slice(0, 6);

    setSelectedCards((prev) => [...prev, ...randomCards]);
  }

  return (
    <div>
      <h2>Choose Cards</h2>
      <div className={classes.wrapper}>
        <Link href="/game">
          <button disabled={selectedCards.length < 1} onClick={handleStartGame}>
            Start Game
          </button>
        </Link>
        <button onClick={handleGetRandomCards}>Select random cards</button>
      </div>
      <ul className={classes.cards}>
        {cards.map((card) => (
          <li
            className={`${classes["list-item"]} ${
              selectedCards.some((selectedCard) => selectedCard.id === card.id)
                ? classes.selected
                : ""
            }`}
            key={card.id}
          >
            <input
              type="checkbox"
              id={card.id}
              name={card.id}
              value={card.id}
              onChange={handleCardSelection}
            />
            <label htmlFor={card.id}>{card.text.english}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
