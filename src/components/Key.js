import React from "react";

const Key = ({ keyVal, guessed, onClick, sideLengthInRem, fontPercentage }) => {
  return (
    <div
      className={`key ${guessed ? "guessedKey" : "nonGuessedKey"}`}
      onClick={onClick}
      style={{
        width: `${sideLengthInRem}rem`,
        height: `${sideLengthInRem}rem`,
        fontSize: `${fontPercentage}%`,
      }}
    >
      {keyVal}
    </div>
  );
};

export default Key;
