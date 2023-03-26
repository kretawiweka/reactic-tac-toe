import { Board } from "../components";

import styles from "./homepage.module.css";

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <h1>Tic Tac Toe React Game</h1>
      <div className={styles.board}>
        <Board />
      </div>
    </div>
  );
};
