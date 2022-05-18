import React, { useState, useEffect } from "react";
import Key from "./Key";

const keyboardRows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

const line1Keys = keyboardRows[0];
const line2Keys = keyboardRows[1];
const line3Keys = keyboardRows[2];
const allKeys = keyboardRows.flat();

const Keyboard = () => {
  const [lettersGuessed, setLettersGuessed] = useState([]);

  const guessKey = (key) => {
    if (!lettersGuessed.includes(key)) {
      setLettersGuessed([...lettersGuessed, key]);
    }
  };

  useEffect(() => {
    const handleKeydown = (e) => {
      const key = e.key.toUpperCase();

      if (allKeys.includes(key)) {
        guessKey(key);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [lettersGuessed]);

  const handleClick = (key) => {
    guessKey(key);
  };

  return (
    <div className="keyboard">
      {keyboardRows.map((keyboardRow) => (
        <div key={keyboardRow}>
          {keyboardRow.map((key) => {
            return (
              <Key
                keyVal={key}
                guessed={lettersGuessed.includes(key)}
                onClick={() => handleClick(key)}
                key={key}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
