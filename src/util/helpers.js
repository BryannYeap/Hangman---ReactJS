import { themes, words } from "./guessableWordsAndThemes";

export function selectTheme() {
  let selectedTheme = themes[Math.floor(Math.random() * themes.length)];
  return selectedTheme;
}

export function selectWord(selectedTheme) {
  let setOfWords = words[selectedTheme];
  let selectedWord = setOfWords[Math.floor(Math.random() * setOfWords.length)];
  return selectedWord;
}

export function showPopup(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkIfGameOver(
  selectedWord,
  numberOfLettersGuessed,
  numberOfWrongLettersGuessed
) {
  if (numberOfWrongLettersGuessed);
}
