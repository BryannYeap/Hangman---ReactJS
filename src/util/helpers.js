import { themes, words } from "./constants";

export function selectTheme() {
  let selectedTheme = themes[Math.floor(Math.random() * themes.length)];
  return selectedTheme;
}

export function selectWord(selectedTheme) {
  let setOfWords = words[selectedTheme];
  let selectedWord = setOfWords[Math.floor(Math.random() * setOfWords.length)];
  return selectedWord;
}

export function isGameLost(numberOfWrongGuesses) {
  const maxGuesses = 7;
  return (
    numberOfWrongGuesses === maxGuesses || numberOfWrongGuesses > maxGuesses
  );
}

export function isGameWon(lettersGuessed, selectedWord) {
  let gameWon = true;

  selectedWord.split("").forEach((char) => {
    if (char === " ") {
      return;
    }

    gameWon = gameWon && lettersGuessed.includes(char);
  });

  return gameWon;
}
