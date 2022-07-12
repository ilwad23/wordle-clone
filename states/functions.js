export const changeGuessWord = (letter, currentGuess) => {
  let newGuessWord =
    letter === "Backspace"
      ? currentGuess.slice(0, currentGuess.length - 1)
      : addLetters(letter, currentGuess);
  return newGuessWord;
};
export const addLetters = (letter, currentGuess) => {
  let word = currentGuess;
  if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').includes(letter.toUpperCase()) && currentGuess.length < 5) {
    word += letter.toUpperCase();
    return word;
  }
  return word;
};
export const checkGuessWord = (actualWord, currentGuess) => {
  let colorsForLetters = [...Array(5).fill("grey")];

  if (actualWord === currentGuess) { 
    colorsForLetters = [...Array(5).fill("green")];
    return [colorsForLetters, true];
  }

  for (let i = 0; i < 5; i++) {
    if (actualWord[i] == currentGuess[i]) {
      colorsForLetters[i] = "green";
    } else if (actualWord.split("").includes(currentGuess[i])) {
      colorsForLetters[i] = "amber";
    }
  }
  return [colorsForLetters, false];
};
