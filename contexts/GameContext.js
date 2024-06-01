import { useState, createContext, useEffect } from "react";

const GameContext = createContext();

const initialPlayers = {
  player1: {
    name: "Player 1",
    matchedCards: [],
  },
  player2: {
    name: "Player 2",
    matchedCards: [],
  },
};

const GameProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [players, setPlayers] = useState(initialPlayers);
  const [currentPlayer, setCurrentPlayer] = useState(players.player1);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (
      selectedCards.length !== 0 &&
      selectedCards.length ===
        players.player1.matchedCards.length +
          players.player2.matchedCards.length
    ) {
      setGameOver((prevState) => true);
    }
  }, [
    players.player1.matchedCards,
    players.player2.matchedCards,
    selectedCards,
  ]);

  const restartGame = (newGame) => {
    setCurrentPlayer(
      currentPlayer.name === players.player1.name
        ? players.player2
        : players.player1
    );

    setPlayers((prevState) => ({
      ...prevState,
      player1: { ...prevState.player1, matchedCards: [] },
      player2: { ...prevState.player2, matchedCards: [] },
    }));

    setGameOver((prevState) => false);

    if (newGame) {
      setSelectedCards((prevState) => []);
    } else {
      setSelectedCards((prevState) =>
        prevState
          .map((card) => ({ ...card, matched: false, flipped: false }))
          .sort(() => Math.random() - 0.5)
      );
    }
  };

  return (
    <GameContext.Provider
      value={{
        cards,
        setCards,
        players,
        setPlayers,
        currentPlayer,
        setCurrentPlayer,
        restartGame,
        selectedCards,
        setSelectedCards,
        gameOver,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
