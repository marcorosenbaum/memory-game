import { useState, useContext, useEffect, useMemo } from "react";

import { GameContext } from "../contexts/GameContext";
import classes from "../styles/GameBoard.module.css";

export default function GameBoard() {
  const {
    selectedCards,
    setSelectedCards,
    players,
    setPlayers,
    currentPlayer,
    setCurrentPlayer,
  } = useContext(GameContext);

  const [flippedCards, setFlippedCards] = useState([]);
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const fetchVoices = () => {
      const voiceList = speechSynthesis.getVoices();
      if (voiceList.length !== 0) {
        setVoices(voiceList);
        speechSynthesis.onvoiceschanged = null;
      }
    };
    fetchVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = fetchVoices;
    }
  }, []);

  const speakCardText = (cardText, lang) => {
    const utterance = new SpeechSynthesisUtterance(cardText);
    const swedishVoice = voices.find((voice) => voice.lang === "sv-SE");

    if (swedishVoice && lang === "swedish") {
      utterance.voice = swedishVoice;
    } else if (!swedishVoice) {
      console.warn("Swedish voice not found, using default voice");
    }
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (flippedCards.length > 0) {
      const lastFlippedCard = flippedCards[flippedCards.length - 1];
      speakCardText(lastFlippedCard.text, lastFlippedCard.lang);
    }
  }, [flippedCards]);

  const handleClick = (clickedCard) => {
    if (flippedCards.length === 2) {
      return;
    }
    const updatedCards = selectedCards.map((card) =>
      card.text === clickedCard.text
        ? { ...card, flipped: !card.flipped }
        : card
    );
    setFlippedCards((prev) => {
      return [...prev, clickedCard];
    });
    setSelectedCards((prev) => {
      return updatedCards;
    });
  };

  function flipCardsBack() {
    const updatedCards = selectedCards.map((card) => {
      if (card.flipped && !card.matched) {
        return { ...card, flipped: false };
      }
      return card;
    });
    setSelectedCards(updatedCards);
    setFlippedCards([]);
  }

  function handleMatchButton() {
    if (flippedCards[0].id === flippedCards[1].id) {
      const updatedCards = selectedCards.map((card) => {
        if (
          card.text === flippedCards[0].text ||
          card.text === flippedCards[1].text
        ) {
          return { ...card, matched: true };
        }
        return card;
      });
      setSelectedCards((prev) => {
        return updatedCards;
      });

      setPlayers((prev) => {
        if (currentPlayer.name === prev.player1.name) {
          return {
            ...prev,
            player1: {
              ...prev.player1,
              matchedCards: [
                ...prev.player1.matchedCards,
                selectedCards.filter((card) => card.id === flippedCards[0].id),
              ],
            },
          };
        } else if (currentPlayer.name === prev.player2.name) {
          return {
            ...prev,
            player2: {
              ...prev.player2,
              matchedCards: [
                ...prev.player2.matchedCards,
                selectedCards.filter((card) => card.id === flippedCards[0].id),
              ],
            },
          };
        } else {
          console.error("No player found");
          return prev;
        }
      });
    } else {
      flipCardsBack();
      handleSetCurrentPlayer();
    }
    setFlippedCards([]);
  }

  function handleNoMatchButton() {
    flipCardsBack();
    handleSetCurrentPlayer();
  }

  function handleSetCurrentPlayer() {
    setCurrentPlayer(
      currentPlayer.name === players.player1.name
        ? players.player2
        : players.player1
    );
  }

  return (
    <div>
      <ul className={classes["card-grid"]}>
        {selectedCards &&
          selectedCards.map((card) => (
            <li key={card.text} className={card.matched ? classes.hidden : ""}>
              <button
                disabled={card.flipped || flippedCards.length === 2}
                onClick={() => handleClick(card)}
              >
                {card.flipped ? card.text : ""}
              </button>
            </li>
          ))}
      </ul>
      <div className={classes["button-container"]}>
        <button disabled={flippedCards.length < 2} onClick={handleMatchButton}>
          Match
        </button>
        <button
          disabled={flippedCards.length < 2}
          onClick={handleNoMatchButton}
        >
          No Match
        </button>
      </div>
    </div>
  );
}
