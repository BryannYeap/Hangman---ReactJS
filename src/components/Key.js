import React from "react";

const Key = ({ keyVal, guessed, onClick }) => {
  return (
    <div
      className={`${guessed ? "key guessedKey" : "key nonGuessedKey"}`}
      onClick={onClick}
    >
      {keyVal}
    </div>
  );
};

export default Key;
