import React from "react";

function RowOfKeys({ letters, styles, dispatch, bottom, colorsForKey }) {
  return (
    <div className={styles.row}>
      {bottom && (
        <p
          className={`${styles.letter} ${styles.double}`}
          onClick={() =>
            dispatch({ type: "PRESSED-ENTER", e: { key: "Enter" } })
          }
        >
          Enter
        </p>
      )}
      {letters.split("").map((v, n) => (
        <p
          key={n}
          className={`${styles.letter} ${styles[colorsForKey[v]]}`}
          // className={styles.letter}
          onClick={() => dispatch({ type: "CHANGE-GUESS-WORD", e: { key: v } })}
        >
          {v}
        </p>
      ))}
      {bottom && (
        <p
          className={`${styles.letter} ${styles.double}`}
          onClick={() =>
            dispatch({ type: "CHANGE-GUESS-WORD", e: { key: "Backspace" } })
          }
        >
          Del
        </p>
      )}
    </div>
  );
}

export default RowOfKeys;
