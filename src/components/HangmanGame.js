import React, { useState } from "react";
import Header from "./Header";
import Drawing from "./Drawing";
import Word from "./Word";
import Keyboard from "./Keyboard";
import Popup from "./Popup";
import { selectTheme, selectWord } from "../util/helpers";
import WinLossEnforcer from "./WinLossEnforcer";

const HangmanGame = () => {
  const [selectedTheme, setSelectedTheme] = useState(selectTheme());
  const [selectedWord, setSelectedWord] = useState(selectWord(selectedTheme));
  const [lettersGuessed, setLettersGuessed] = useState([]);
  const [numberOfWrongGuesses, setNumberOfWrongGuesses] = useState(0);
  const [playable, setPlayable] = useState(true);

  const guessKey = (key) => {
    if (!playable) {
      return;
    }

    if (!lettersGuessed.includes(key)) {
      setLettersGuessed([...lettersGuessed, key]);
    }

    if (!selectedWord.includes(key) && !lettersGuessed.includes(key)) {
      setNumberOfWrongGuesses(numberOfWrongGuesses + 1);
    }
  };

  const resetWordsAndGuesses = () => {
    const selectedTheme = selectTheme();
    setSelectedTheme(selectedTheme);
    setSelectedWord(selectWord(selectedTheme));
    setLettersGuessed([]);
    setNumberOfWrongGuesses(0);
  };

  return (
    <>
      <>
        <Header />
        <Drawing
          numberOfWrongGuesses={numberOfWrongGuesses}
          setPlayable={setPlayable}
        />
        <Word
          theme={selectedTheme}
          word={selectedWord}
          lettersGuessed={lettersGuessed}
        />
        <Keyboard onKeyAction={guessKey} lettersGuessed={lettersGuessed} />
        <Popup
          selectedWord={selectedWord}
          setPlayable={setPlayable}
          resetWordsAndGuesses={resetWordsAndGuesses}
        />
      </>
      <>
        <WinLossEnforcer
          lettersGuessed={lettersGuessed}
          numberOfWrongGuesses={numberOfWrongGuesses}
          selectedWord={selectedWord}
          setPlayable={setPlayable}
        />
      </>
    </>
  );
};

export default HangmanGame;
