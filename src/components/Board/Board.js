import { useEffect, useState } from "react";
import { Square } from "../../components";
import { calculateWinner } from "../../utils";

import styles from "./board.module.css";

export const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [countXWin, setCountXWin] = useState(0);
  const [countTie, setCountTie] = useState(0);
  const [countOWin, setCountOWin] = useState(0);

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      if (winner === "X") {
        setCountXWin(countXWin + 1);
      } else {
        setCountOWin(countOWin + 1);
      }
      setTimeout(() => {
        setSquares(Array(9).fill(null));
      }, 1000);
    }
    let isBoardFull = squares.every(function (i) {
      return i !== null;
    });

    if (isBoardFull) {
      setCountTie(countTie + 1);
      setTimeout(() => {
        setSquares(Array(9).fill(null));
      }, 1000);
    }
  }, [squares]);

  return (
    <div className={styles.board}>
      <table className={styles.tableBoard}>
        <thead>
          <tr className={styles.rowHead}>
            <td className={styles.cell}>
              <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            </td>
            <td className={styles.cell}>
              <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            </td>
            <td className={styles.cell}>
              <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.row}>
            <td className={styles.cell}>
              <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            </td>
            <td className={styles.cell}>
              <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            </td>
            <td className={styles.cell}>
              <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </td>
          </tr>
          <tr className={styles.row}>
            <td className={styles.cell}>
              <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            </td>
            <td className={styles.cell}>
              <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            </td>
            <td className={styles.cell}>
              <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.score}>
        <div className={styles.player}>
          <div className={styles.playerName}>Player 1(X)</div>
          <div className={styles.playerScore}>{countXWin}</div>
        </div>
        <div className={styles.player}>
          <div className={styles.playerName}>Tie</div>
          <div className={styles.playerScore}>{countTie}</div>
        </div>
        <div className={styles.player}>
          <div className={styles.playerName}>Player 2(O)</div>
          <div className={styles.playerScore}>{countOWin}</div>
        </div>
      </div>
    </div>
  );
};
