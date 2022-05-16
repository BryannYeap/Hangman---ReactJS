import React from "react";
import Key from "./Key";

const Keyboard = () => {
  const line1Keys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const line2Keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const line3Keys = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="keyboard">
      <div className="line1">
        {line1Keys.map((key) => {
          return <Key keyVal={key} />;
        })}
      </div>
      <div className="line2">
        {line2Keys.map((key) => {
          return <Key keyVal={key} />;
        })}
      </div>
      <div className="line3">
        {line3Keys.map((key) => {
          return <Key keyVal={key} />;
        })}
      </div>
    </div>
  );
};

export default Keyboard;
