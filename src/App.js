import "./App.css";
import Board from "./Component/board/Board";

// App function start here
function App() {
  return (
    <div>
      {/* heading of the game */}
      <h1 className="heading">
        Tic<span style={{ color: "white" }}>Tac</span>Toe
      </h1>
      {/* This component contain everything related to the game */}
      <Board />
    </div>
  );
}

export default App;
