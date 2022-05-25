import React, { useEffect } from "react";
import Key from "./Key";

const keyboardRows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

const allKeys = keyboardRows.flat();

const Keyboard = ({ onKeyAction, lettersGuessed, mediaProperties }) => {
  useEffect(() => {
    const handleKeydown = (e) => {
      const key = e.key.toUpperCase();

      if (allKeys.includes(key)) {
        onKeyAction(key);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [lettersGuessed, onKeyAction]);

  const handleClick = (key) => {
    onKeyAction(key);
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
                sideLengthInRem={mediaProperties.keyProp.sideLengthInRem}
                fontPercentage={mediaProperties.keyProp.fontPercentage}
                marginInPx={mediaProperties.keyProp.marginInPx}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
