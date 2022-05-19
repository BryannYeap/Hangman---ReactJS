import React from "react";

const Popup = ({ isShowingPopup, selectedWord }) => {
  const winMessage = "Congratulations! You guessed the word! 😁";
  const loseMessage = "Oh no!! You didn't guess the word!! 😭";
  return (
    <div className={`popup ${isShowingPopup ? "visible" : "hidden"}`}>
      <h2>{winMessage}</h2>
      <h3>The word was: {selectedWord}</h3>
      <p></p>
      <button></button>
    </div>
  );
};

export default Popup;
