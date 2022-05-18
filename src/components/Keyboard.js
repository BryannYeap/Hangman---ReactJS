import React, { useEffect } from "react";
import Key from "./Key";

const Keyboard = () => {
  const handleClick = (key) => {};

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      console.log(e.key);
    });
  }, []);

  const keyboardRows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  const line1Keys = keyboardRows[0];
  const line2Keys = keyboardRows[1];
  const line3Keys = keyboardRows[2];
  const allKeys = keyboardRows.flat();

  return (
    <div className="keyboard">
      <div className="line1">
        {line1Keys.map((key) => {
          return (
            <Key onClick={() => handleClick(key)} keyVal={key} key={key} />
          );
        })}
      </div>
      <div className="line2">
        {line2Keys.map((key) => {
          return (
            <Key onClick={() => handleClick(key)} keyVal={key} key={key} />
          );
        })}
      </div>
      <div className="line3">
        {line3Keys.map((key) => {
          return (
            <Key onClick={() => handleClick(key)} keyVal={key} key={key} />
          );
        })}
      </div>
    </div>
  );
};

export default Keyboard;
