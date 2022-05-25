import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import HangmanGame from "./components/HangmanGame";
import {
  GameStatusContext,
  inPlayGameStatusCode,
  DesktopProp,
  TabletProp,
  PhoneProp,
} from "./util/constants";
import "./App.css";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 1023 });
  return isTablet ? children : null;
};
const Phone = ({ children }) => {
  const isPhone = useMediaQuery({ maxWidth: 480 });
  return isPhone ? children : null;
};

function App() {
  const [gameStatus, setGameStatus] = useState(inPlayGameStatusCode);

  return (
    <GameStatusContext.Provider value={{ gameStatus, setGameStatus }}>
      <Desktop>
        <HangmanGame className="hangman-game" mediaProperties={DesktopProp} />
      </Desktop>

      <Tablet>
        <HangmanGame className="hangman-game" mediaProperties={TabletProp} />
      </Tablet>

      <Phone>
        <HangmanGame className="hangman-game" mediaProperties={PhoneProp} />
      </Phone>
    </GameStatusContext.Provider>
  );
}

export default App;
