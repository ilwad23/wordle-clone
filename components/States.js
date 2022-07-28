import React, { useEffect } from "react";
import { words } from "./words";

export default function States(
  dispatch,
  actualWords,
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
      let words = actualWords;
      let jInfo = JSON.parse(ls.getItem("info"));
      if (jInfo !== null) a = jInfo.actualWords;
      let word = actualWord(words).toUpperCase();
      let info = {
        actualWords: [word, ...words],
        actualWord: word,
        isCorrect: isCorrect,
        guesses: guesses,
        numOfGuesses: numOfGuesses,
        colorsForLetters: colorsForLetters,
        colorsForKey: colorsForKey,
      };

      console.log(info);
      ls.setItem("info", JSON.stringify(info));
      ls.setItem("date", new Date().getDate());
      dispatch({
        type: "SET-VARIABLES",
        words: { ...info },
      });
    } else {
      const jp = JSON.parse(ls.getItem("info"));
      let info = {
        actualWords: jp.actualWords,
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
  }, [guesses]);
}
