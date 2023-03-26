import { useState } from "react";
import { Square } from "../../components";
import styles from "./board.module.css";

export const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (index) => {
    if (squares[index]) {
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

  return (
    <table className={styles.board}>
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
  );
};
