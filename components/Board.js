import React from "react";
import styles from "../styles/Board.module.css";
function Grid({
  currentGuess,
  colorsForLetters,
  guesses,
  numOfGuesses,
  isNotAWord,
}) {
  return (
    <div className={styles.grid}>
      {guesses.map((guess, i) => (
        //* rows for the words
        <div
          key={guess + `${i}`}
          className={`${styles.row} ${isNotAWord == i && styles.wrong}`}
        >
          {Array(5)
            .fill("")
            .map((_, a) =>
              guess ? (
                //* each letter for the previous guessed words goes here.
                <h1
                key={guesses[i][a] + a}
                className={`${styles.letter} ${
                  styles[colorsForLetters[i][a]]
                  }`}
                  style={{
                    animationDelay: `${200 * a}ms`,
                  }}
                  >
                  {guesses[i][a]}
                </h1>
              ) : (
                //* each letter for the current guess word goes here.
                <h1
                  key={"letter" + a}
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
