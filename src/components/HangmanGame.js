import React, { useState } from "react";
import Header from "./Header";
import Drawing from "./Drawing";
import Word from "./Word";
import Keyboard from "./Keyboard";
import Popup from "./Popup";
import { showPopup } from "../util/helpers";

const HangmanGame = ({ selectedWord, selectedTheme }) => {
  const [playable, setPlayable] = useState(true);
  const [lettersGuessed, setLettersGuessed] = useState([]);
  const [numberOfWrongGuesses, setNumberOfWrongGuesses] = useState(0);
  const [isShowingPopup, setIsShowingPopup] = useState(true);

  const guessKey = (key) => {
    if (!lettersGuessed.includes(key)) {
      setLettersGuessed([...lettersGuessed, key]);
    }

    if (!selectedWord.includes(key) && !lettersGuessed.includes(key)) {
      setNumberOfWrongGuesses(numberOfWrongGuesses + 1);
    }
  };

  return (
    <>
      <Header />
      <Drawing numberOfWrongGuesses={numberOfWrongGuesses} />
      <Word
        theme={selectedTheme}
        word={selectedWord}
        lettersGuessed={lettersGuessed}
      />
      <Keyboard onKeyAction={guessKey} lettersGuessed={lettersGuessed} />
      <Popup isShowingPopup={isShowingPopup} selectedWord={selectedWord} />
    </>
  );
};

export default HangmanGame;
