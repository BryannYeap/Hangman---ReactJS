import { useState } from "react";
import HangmanGame from "./components/HangmanGame";
import { GameStatusContext, inPlayGameStatusCode } from "./util/constants";
import "./App.css";

function App() {
  const [gameStatus, setGameStatus] = useState(inPlayGameStatusCode);

  return (
    <GameStatusContext.Provider value={{ gameStatus, setGameStatus }}>
      <HangmanGame className="hangman-game" />
    </GameStatusContext.Provider>
  );
}

export default App;
