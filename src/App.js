import "./App.css";
import Board from "./Component/board/Board";
function App() {
  return (
    <div>
      <h1 className="heading">
        Tic<span style={{ color: "white" }}>Tac</span>Toe
      </h1>
      <Board />
    </div>
  );
}

export default App;
