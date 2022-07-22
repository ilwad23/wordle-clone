export const changeGuessWord = (letter, currentGuess, isCorrect) => {
  if (!isCorrect) {
    let newGuessWord =
    letter === "Backspace"
    ? currentGuess.slice(0, currentGuess.length - 1)
    : addLetters(letter, currentGuess);
    return newGuessWord;
  }
  return currentGuess
};

export const addLetters = (letter, currentGuess) => {
  let word = currentGuess;
  if (
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").includes(letter.toUpperCase()) &&
    currentGuess.length < 5
  ) {
    word += letter.toUpperCase();
    return word;
  }
  return word;
};

export const checkGuessWord = (actualWord, currentGuess) => {
  let colorsForLetters = [...Array(5).fill("grey")];
  let a = actualWord;
  let c = currentGuess;
  let ambers = {};

  if (a === c) {
    colorsForLetters = [...Array(5).fill("green")];
    return [colorsForLetters, true];
  }

  for (let i = 0; i < 5; i++) {
    if (a[i] == c[i]) {
      colorsForLetters[i] = "green";
    } else if (a.split("").includes(c[i])) {
      if (ambers.hasOwnProperty(c[i])) {
        let regex = new RegExp(`${c[i]}`, "g");
        ambers[c[i]] += 1;
        if (ambers[c[i]] <= a.match(regex).length) {
          colorsForLetters[i] = "amber";
        }
      } else {
        colorsForLetters[i] = "amber";
        ambers[c[i]] = 1;
      }
    }
  }
  return [colorsForLetters, false];
};

export const colorsForKey =() => {
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  const arr = alpha.map((l) => [l.toUpperCase(), "lightgray"])
  const obj = Object.fromEntries(arr);
  return obj
}

export const colorKeyPad = (
  checkGuessWord,
  colorsForKey,
  actualWord,
  currentGuess
) => {
  const colors = checkGuessWord(actualWord, currentGuess)[0];

  for (let i = 0; i < 5; i++) {
    const l = currentGuess.split("")[i];
    if (colorsForKey[l] != "green") {
      colorsForKey[l] = colors[i];
    }
  }
  return colorsForKey;
};
