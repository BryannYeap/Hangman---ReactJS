import React, { useState } from "react";
import Header from "./Header";
import Drawing from "./Drawing";
import Word from "./Word";
import Keyboard from "./Keyboard";
import Popup from "./Popup";
import { selectTheme, selectWord } from "../util/helpers";
import WinLossEnforcer from "./WinLossEnforcer";

const HangmanGame = ({ mediaProperties }) => {
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
        <Header fontPercentage={mediaProperties.headerProp.fontPercentage} />

        <Drawing
          numberOfWrongGuesses={numberOfWrongGuesses}
          drawingWidth={mediaProperties.drawingProp.width}
          drawingHeight={mediaProperties.drawingProp.height}
        />

        <Word
          theme={selectedTheme}
          word={selectedWord}
          lettersGuessed={lettersGuessed}
          fontPercentage={mediaProperties.wordProp.fontPercentage}
        />

        <Keyboard
          onKeyAction={guessKey}
          lettersGuessed={lettersGuessed}
          sideLengthInRem={mediaProperties.keyProp.sideLengthInRem}
          fontPercentage={mediaProperties.keyProp.fontPercentage}
        />

        <Popup
          selectedWord={selectedWord}
          setPlayable={setPlayable}
          resetWordsAndGuesses={resetWordsAndGuesses}
          fontPercentage={mediaProperties.popupProp.fontPercentage}
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
