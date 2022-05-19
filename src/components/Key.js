import React from "react";

const Key = ({ keyVal, guessed, onClick }) => {
  return (
    <div
      className={`key ${guessed ? "guessedKey" : "nonGuessedKey"}`}
      onClick={onClick}
    >
      {keyVal}
    </div>
  );
};

export default Key;
