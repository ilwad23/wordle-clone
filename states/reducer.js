import { ActualWord, ColorsForKey } from "../components/words";
import { changeGuessWord, checkGuessWord, colorKeyPad} from "./functions";

export const initialState = {
  actualWord: ActualWord.toUpperCase(),
  currentGuess: "",
  isCorrect: false,
  guesses: [...Array(6)],
  numOfGuesses: 1,
  colorsForLetters: [],
  isNotAWord: null,
  pressEnter: "",
  colorsForKey: ColorsForKey,
};

const reducer = (state, action) => {
  const {
    currentGuess,
    numOfGuesses,
    guesses,
    colorsForLetters,
    actualWord,
    colorsForKey,
  } = state;
  const { type, e } = action;
  switch (type) {
    case "DEPRESSED-ENTER":
      return {
        ...state,
        pressEnter: '',
      };
    case "PRESSED-ENTER":
      return {
        ...state,
        pressEnter: e.key,
      };

    case "CHANGE-GUESS-WORD":
      return {
        ...state,
        currentGuess: changeGuessWord(e.key, currentGuess),
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
          checkGuessWord,colorsForKey,
          actualWord,
          currentGuess
        ),
        numOfGuesses: numOfGuesses + 1,
      };

    default:
      return {
        ...state,
      };
  }
};
export default reducer;
