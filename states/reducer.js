import { ActualWord } from "../components/words";
import {
  colorsForKey,
  changeGuessWord,
  checkGuessWord,
  colorKeyPad,
} from "./functions";

export const initialState = {
  pervWords: [],
  currentGuess: "",
  guesses: [...Array(6)],
  actualWord: ActualWord,
  numOfGuesses: 1,
  colorsForLetters: [],
  isNotAWord: null,
  pressEnter: "",
  colorsForKey: colorsForKey(),
  isCorrect: false,
};

const reducer = (state, action) => {
  const {
    currentGuess,
    numOfGuesses,
    guesses,
    colorsForLetters,
    actualWord,
    colorsForKey,
    isCorrect,
  } = state;
  // console.log(JSON.stringify(state));
  // console.log(state);
  const { type, e, words } = action;
  switch (type) {
    case "DEPRESSED-ENTER":
      return {
        ...state,
        pressEnter: "",
      };
    case "PRESSED-ENTER":
      return {
        ...state,
        pressEnter: e.key,
      };

    case "CHANGE-GUESS-WORD":
      return {
        ...state,
        currentGuess: changeGuessWord(e.key, currentGuess, isCorrect),
      };

    case "SET-WRONG-GUESS-WORD":
      return {
        ...state,
        isNotAWord: numOfGuesses - 1,
      };
    case "SHAKE-WRONG-GUESS-WORD":
      return {
        ...state,
        isNotAWord: null,
      };
    case "SUBMIT-GUESS-WORD":
      guesses[numOfGuesses - 1] = currentGuess;
      return {
        ...state,
        currentGuess: "",
        guesses: guesses,
        isCorrect: checkGuessWord(actualWord, currentGuess)[1],
        colorsForLetters: [
          ...colorsForLetters,
          checkGuessWord(actualWord, currentGuess)[0],
        ],
        colorsForKey: colorKeyPad(
          checkGuessWord,
          colorsForKey,
          actualWord,
          currentGuess
        ),
        numOfGuesses: numOfGuesses + 1,
      };

    case "SET-VARIABLES":
      return {
        ...state,
        pervWords: words?.pervWords,
        actualWord: words?.actualWord,
        guesses: words?.guesses,
        colorsForLetters: words?.colorsForLetters,
        colorsForKey: words?.colorsForKey,
        numOfGuesses: words?.numOfGuesses,
        isCorrect: words?.isCorrect,
      };

    default:
      return {
        ...state,
      };
  }
};
export default reducer;
