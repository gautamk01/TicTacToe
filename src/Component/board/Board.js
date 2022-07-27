import { useState } from "react";
import Square from "./square";

function Board() {
  const [arr, setarr] = useState(new Array(9).fill(null));
  const [isnext, setIsnext] = useState(false);

  const squareBox = (position) => {
    return (
      <Square
        value={arr[position]}
        click={() => {
          setarr(
            arr.map((item, pos) => {
              if (pos === position && item === null) {
                return isnext ? "O" : "X";
              }
              return item;
            })
          );
          setIsnext(!isnext);
        }}
      />
    );
  };

  return (
    <div className="MainGameBox">
      <div className="columnBox">
        {squareBox(0)}
        {squareBox(1)}
        {squareBox(2)}
      </div>
      <div className="columnBox">
        {squareBox(3)}
        {squareBox(4)}
        {squareBox(5)}
      </div>
      <div className="columnBox">
        {squareBox(6)}
        {squareBox(7)}
        {squareBox(8)}
      </div>
    </div>
  );
}

export default Board;
