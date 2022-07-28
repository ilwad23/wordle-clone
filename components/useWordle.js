import { formattedWords } from "./words";
import { useStateValue } from "../states/StateProvider";
import { useEffect } from "react";
import States from "./States";
function useWordle() {
  const [
    {
      actualWords,
      actualWord,
      currentGuess,
      colorsForLetters,
      guesses,
      numOfGuesses,
      colorsForKey,
      isNotAWord,
      isCorrect,
      pressEnter,
    },
    dispatch,
  ] = useStateValue();
  States(
    dispatch,
    actualWords,
    actualWord,
    guesses,
    colorsForLetters,
    numOfGuesses,
    colorsForKey,
    isCorrect
    );
    
    function logToLocalStorage() {
      const jp = JSON.parse(localStorage.getItem("info"));
      let info = {
        actualWord: actualWord,
        isCorrect: isCorrect,
        guesses: guesses,
        numOfGuesses: numOfGuesses,
        colorsForLetters: colorsForLetters,
        colorsForKey: colorsForKey,
      };
      if (jp.numOfGuesses < numOfGuesses)
        localStorage.setItem("info", JSON.stringify(info));
    }

  function submitGuess(e) {
    if (pressEnter === "Enter" || e.key == "Enter") {
      if (
        guesses.includes(currentGuess) ||
        !formattedWords(actualWords).includes(currentGuess)
      ) {
        dispatch({ type: "SET-WRONG-GUESS-WORD" });
        return;
      }
      dispatch({ type: "SUBMIT-GUESS-WORD" });
    }
  }

  function showGuess(e) {
      dispatch({ type: "CHANGE-GUESS-WORD", e: e });
      submitGuess(e);
      setTimeout(() => {
        dispatch({ type: "SHAKE-WRONG-GUESS-WORD" });
      }, 500);
  }


  useEffect(() => {
    logToLocalStorage();
  
    if (pressEnter === "Enter") showGuess({ key: "Enter" });
    window.addEventListener("keyup", showGuess);
    if (numOfGuesses >= 7) {
      window.removeEventListener("keyup", showGuess);
    }
    return () => {
      window.removeEventListener("keyup", showGuess);
      dispatch({ type: "DEPRESSED-ENTER" });
    };
  }, [currentGuess, pressEnter]);

  return [currentGuess, colorsForLetters, guesses, numOfGuesses, isNotAWord];
}

export default useWordle;
