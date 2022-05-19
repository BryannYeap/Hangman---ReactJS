import "./App.css";
import HangmanGame from "./components/HangmanGame";
import { selectTheme, selectWord } from "./util/helpers";

function App() {
  const selectedTheme = selectTheme();
  const selectedWord = selectWord(selectedTheme);

  return (
    <HangmanGame selectedTheme={selectedTheme} selectedWord={selectedWord} />
  );
}

export default App;
