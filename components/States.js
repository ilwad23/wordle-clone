import React, { useEffect } from "react";

export default function States(
  dispatch,
  actualWord,
  guesses,
  colorsForLetters,
  numOfGuesses,
  colorsForKey,
  isCorrect
  ) {
  useEffect(() => {
    const ls = localStorage;
        if (new Date().getDate() != ls.getItem("date") || !ls.getItem("info")) {
      let info = {
        actualWord: actualWord,
        isCorrect: isCorrect,
        guesses: guesses,
        numOfGuesses: numOfGuesses,
        colorsForLetters: colorsForLetters,
        colorsForKey: colorsForKey,
      };
      ls.setItem("info", JSON.stringify(info));
      ls.setItem("date", new Date().getDate());
      dispatch({
        type: "SET-VARIABLES",
        words: { ...info },
      });
    } 
    else {
      const jp = JSON.parse(ls.getItem("info"));
      let info = {
        actualWord: jp.actualWord,
        isCorrect: jp.isCorrect,
        guesses: jp.guesses,
        numOfGuesses: jp.numOfGuesses,
        colorsForLetters: jp.colorsForLetters,
        colorsForKey: jp.colorsForKey,
      };
      ls.setItem("info", JSON.stringify(info));
      dispatch({
        type: "SET-VARIABLES",
        words: { ...info },
      });
    }
  }, []);
  // }
}
