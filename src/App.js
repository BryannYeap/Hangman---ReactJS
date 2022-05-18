import React, { useState } from "react";
import Header from "./components/Header";
import Drawing from "./components/Drawing";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import "./App.css";

const themes = ["Fruit", "Country", "School"];
const words = {
  Fruit: [
    "APPLE",
    "BANANA",
    "CHERRY",
    "LEMON",
    "LIME",
    "ORANGE",
    "PEACH",
    "RASPBERRY",
    "STRAWBERRY",
    "WATERMELON",
  ],
  Country: [
    "AUSTRALIA",
    "FINLAND",
    "GERMANY",
    "JAMAICA",
    "MADAGASCAR",
    "PAKISTAN",
    "SINGAPORE",
    "SOUTH AFRICA",
    "SWITZERLAND",
    "ZIMBABWE",
  ],
  School: [
    "ASSEMBLY",
    "CAFETERIA",
    "DETENTION",
    "DISCIPLINE MASTER",
    "HOMEWORK",
    "PHYSICAL EDUCATION",
    "STATIONERY",
    "UNIFORM",
    "VALEDICTORIAN",
  ],
};

let selectedTheme = themes[Math.floor(Math.random() * themes.length)];
let setOfWords = words[selectedTheme];
let selectedWord = setOfWords[Math.floor(Math.random() * setOfWords.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [lettersGuessed, setLettersGuessed] = useState([]);
  const [numberOfWrongGuesses, setNumberOfWrongGuesses] = useState(0);

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
    </>
  );
}

export default App;
