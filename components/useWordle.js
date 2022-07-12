import { useEffect } from "react";
import { formattedWords } from "./words";
import { useStateValue } from "../states/StateProvider";
function useWordle() {
  const [
    {actualWord,
      currentGuess,
      isNotAWord,
      guesses,
      colorsForLetters,
      numOfGuesses,
      isCorrect,
      pressEnter,
    },
    dispatch,
  ] = useStateValue();
  console.log(actualWord);
  function submitGuess(e) {
    
    if (pressEnter === "Enter"|| e.key=='Enter') {
    if (
        guesses.includes(currentGuess) ||
        !formattedWords.includes(currentGuess)
        ) {
        dispatch({ type: "SET-WRONG-GUESS-WORD" });
        return;
      }
      dispatch({ type: "SUBMIT-GUESS-WORD" });
    }
  }
  function showGuess(e) {
    if (!isCorrect) {
      dispatch({ type: "CHANGE-GUESS-WORD", e: e });
      submitGuess(e);
      setTimeout(() => {
        dispatch({ type: "SHAKE-WRONG-GUESS-WORD" });
      }, 500);
    }
  }
  
  useEffect(() => {
    if (pressEnter === "Enter") showGuess({key:'Enter'})
    window.addEventListener("keyup", showGuess);
    if (numOfGuesses >= 7) {
      window.removeEventListener("keyup", showGuess);
    }
    return () => {
      window.removeEventListener("keyup", showGuess);
      dispatch({ type: "DEPRESSED-ENTER" });
    };
  }, [currentGuess,pressEnter]);
  
  return [currentGuess, colorsForLetters, guesses, numOfGuesses, isNotAWord];
}

export default useWordle;
