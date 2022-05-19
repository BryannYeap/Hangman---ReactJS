import React, { useContext, useEffect } from "react";
import {
  GameStatusContext,
  winGameStatusCode,
  loseGameStatusCode,
  inPlayGameStatusCode,
} from "../util/constants";

const Popup = ({ selectedWord, setPlayable, resetWordsAndGuesses }) => {
  const winMessage = "Congratulations! You guessed the word! 😁";
  const loseMessage = "Oh no!! You didn't guess the word!! 😭";
  const gameStatusContext = useContext(GameStatusContext);
  const gameStatus = gameStatusContext.gameStatus;
  const setGameStatus = gameStatusContext.setGameStatus;

  let isShowingPopup = gameStatus !== inPlayGameStatusCode;
  let finalMessage = "";
  let playable = true;

  if (gameStatus === winGameStatusCode) {
    finalMessage = winMessage;
    playable = false;
  } else if (gameStatus === loseGameStatusCode) {
    finalMessage = loseMessage;
    playable = false;
  }

  useEffect(() => setPlayable(playable));

  return (
    <div
      className={`popup 
      ${isShowingPopup ? "visible" : "hidden"}
      ${gameStatus === winGameStatusCode ? "won" : "lost"}`}
    >
      <h3>{finalMessage}</h3>
      <h4>The word was: {selectedWord}</h4>
      <p></p>
      <button
        onClick={() => {
          resetWordsAndGuesses();
          setPlayable(true);
          setGameStatus(inPlayGameStatusCode);
        }}
      >
        Restart Game?
      </button>
    </div>
  );
};

export default Popup;
