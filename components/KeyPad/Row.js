import React from "react";
import { BackspaceIcon } from "@heroicons/react/outline";
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
          <BackspaceIcon style={{width:'32px',height:'32px'}}/>
        </p>
      )}
    </div>
  );
}

export default RowOfKeys;
