import React, { useEffect } from "react";
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

const guessKey = (key) => {
  console.log(key);
};

const Keyboard = () => {
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
  }, []);

  const handleClick = (key) => {
    guessKey(key);
  };

  return (
    <div className="keyboard">
      <div className="line1">
        {line1Keys.map((key) => {
          return (
            <Key keyVal={key} onClick={() => handleClick(key)} key={key} />
          );
        })}
      </div>
      <div className="line2">
        {line2Keys.map((key) => {
          return (
            <Key keyVal={key} onClick={() => handleClick(key)} key={key} />
          );
        })}
      </div>
      <div className="line3">
        {line3Keys.map((key) => {
          return (
            <Key keyVal={key} onClick={() => handleClick(key)} key={key} />
          );
        })}
      </div>
    </div>
  );
};

export default Keyboard;
