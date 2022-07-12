import React from "react";
import styles from "../styles/Grid.module.css";
function Grid({ currentGuess, colorsForLetters, guesses, numOfGuesses, isNotAWord }) {
  return (
    <div className={styles.grid}>
      {guesses.map((guess, i) => (
        <div
          key={guess + `${i}`}
          className={`${styles.row} ${isNotAWord==i && styles.wrong}`}
        >
          {Array(5)
            .fill("")
            .map((_, a) =>
              guess ? (
                <h1
                  key={guesses[i][a] + a}
                  className={`${styles.letter} ${styles[colorsForLetters[i][a]]}`}
                  style={{
                    animationDelay: `${200 * a}ms`,
                  }}
                >
                  {guesses[i][a]}
                </h1>
              ) :
               (
                <h1
                  key={"az" + a}
                  className={`${styles.letter} ${
                    numOfGuesses == i + 1 && currentGuess[a] && styles.current
                  }`}
                >
                  {numOfGuesses == i + 1 && currentGuess[a]}
                </h1>
              )
            )}
        </div>
      ))}
    </div>
  );
}

export default Grid;


