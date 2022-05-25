import React from "react";

const Key = ({
  keyVal,
  guessed,
  onClick,
  sideLengthInRem,
  fontPercentage,
  marginInPx,
}) => {
  return (
    <div
      className={`key ${guessed ? "guessedKey" : "nonGuessedKey"}`}
      onClick={onClick}
      style={{
        width: `${sideLengthInRem}rem`,
        height: `${sideLengthInRem * 1.15}rem`,
        fontSize: `${fontPercentage}%`,
        margin: `${marginInPx}px`,
      }}
    >
      {keyVal}
    </div>
  );
};

export default Key;
