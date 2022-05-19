import React from "react";

const Popup = ({ isShowingPopup, selectedWord }) => {
  const winMessage = "Congratulations! You guessed the word! 😁";
  const loseMessage = "Oh no!! You didn't guess the word!! 😭";
  return (
    <div className={`popup ${isShowingPopup ? "visible" : "hidden"}`}>
      <h3>{winMessage}</h3>
      <h4>The word was: {selectedWord}</h4>
      <p></p>
      <button>Play Again</button>
    </div>
  );
};

export default Popup;
