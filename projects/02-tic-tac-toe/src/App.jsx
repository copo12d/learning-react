import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./components/Square";
import { WinnerModal } from "./components/winnerModal";
import { turns } from "./constants";
import { checkWinner, checkEndgame } from "./logic/boards";
import { saveGame, resetgameStorage } from "./logic/storage";
import "./App.css";
import "./index.css";

function App() {
  const [board, setBoard] = useState(() => {
    const saved = window.localStorage.getItem("board");
    return saved ? JSON.parse(saved) : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const saved = window.localStorage.getItem("turn");
    return saved ?? turns.X;
  });
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(turns.X);
    setWinner(null);

    resetgameStorage();
  };

  const updateBoard = (index) => {
    if (board[index] || winner) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === turns.X ? turns.O : turns.X;
    setTurn(newTurn);
    saveGame({
      board: newBoard,
      turn: newTurn,
    });
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndgame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reiniciar juego</button>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === turns.X}>{turns.X}</Square>
        <Square isSelected={turn === turns.O}>{turns.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
