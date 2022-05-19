import React, { useContext, useEffect } from "react";
import {
  GameStatusContext,
  loseGameStatusCode,
  winGameStatusCode,
} from "../util/constants";
import { isGameLost, isGameWon } from "../util/helpers";

const WinLossEnforcer = ({
  lettersGuessed,
  numberOfWrongGuesses,
  selectedWord,
  setPlayable,
}) => {
  const setGameStatus = useContext(GameStatusContext).setGameStatus;

  const processWhenGameEnds = () => {
    if (isGameLost(numberOfWrongGuesses)) {
      setPlayable(false);
      setGameStatus(loseGameStatusCode);
    } else if (isGameWon(lettersGuessed, selectedWord)) {
      setPlayable(true);
      setGameStatus(winGameStatusCode);
    }
  };

  useEffect(processWhenGameEnds);

  return <></>;
};

export default WinLossEnforcer;
