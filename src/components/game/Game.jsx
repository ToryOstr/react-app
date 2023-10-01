import React, { useState } from "react";
import Board from "./board/Board";
import styles from "./game.module.css";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);

  }
  function handleRestart() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Back to move ${move}`;

      return (
        <li key={move}>
          <button
            className={styles.historyBtn}
            onClick={() => {
              jumpTo(move);
            }}
          >
            {description}
          </button>
        </li>
      );
    }
  });
  return (
    <div>
      <h1>Welcome to Tic-Tac-Toe!</h1>
      <div className={styles.game}>
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          onRestart={handleRestart}
        />
        <div className={styles.gameHistory}>
          <ul start={0} className={styles.historyList}>
            <li><h3>Game history:</h3></li>
            {moves}
          </ul>
        </div>
      </div>
    </div>
  );
}
