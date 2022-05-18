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
  const [correctLettersGuessed, setCorrectLettersGuessed] = useState([]);
  const [wrongLettersGuessed, setWrongLettersGuessed] = useState([]);

  return (
    <>
      <Header />
      <Drawing />
      <Word
        theme={selectedTheme}
        word={selectedWord}
        correctLettersGuessed={correctLettersGuessed}
      />
      <Keyboard
        lettersGuessed={[...correctLettersGuessed, ...wrongLettersGuessed]}
      />
    </>
  );
}

export default App;
