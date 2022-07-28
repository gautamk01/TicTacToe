import { useEffect, useState } from "react";
import Square from "./square";

import WinnerFinder from "../winner";

function Board() {
  const [arr, setarr] = useState(new Array(9).fill(null));
  const [isnext, setIsnext] = useState(false);
  const [result, setresult] = useState("");
  const [findWinner, SetfindWinner] = useState(false);
  useEffect(() => {
    if (WinnerFinder(arr)) {
      setresult(`${WinnerFinder(arr)} is the Winner 👑`);
      SetfindWinner(true);
    } else {
      isnext
        ? setresult("This Chance is for O")
        : setresult("This chance is for X");
    }
  });

  const changexo = (position) => {
    if (arr[position] != null) {
      return;
    }
    setarr(
      arr.map((item, pos) => {
        if (pos === position && item === null && findWinner === false) {
          return isnext ? "O" : "X";
        }
        return item;
      })
    );
    setIsnext(!isnext);
  };

  const squareBox = (position) => {
    return (
      <Square
        value={arr[position]}
        click={() => {
          changexo(position);
        }}
      />
    );
  };

  return (
    <div>
      <h1>{result}</h1>
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
    </div>
  );
}

export default Board;
