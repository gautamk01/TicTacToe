import { useEffect, useState } from "react";
import Square from "./square";

import WinnerFinder from "../winner";

function Board() {
  // This is the array that we store everything
  const [arr, setarr] = useState(new Array(9).fill(null));
  //This will return a boolean value according to the turn of X
  const [isnext, setIsnext] = useState(false);
  //This will Return the Result in the Message Box section
  const [result, setresult] = useState("");
  //This will check wheater a Winner is selected or not
  const [findWinner, SetfindWinner] = useState(false);
  //This will used to check the number of count
  const [count, setcount] = useState(0);

  const [selected, setselected] = useState([]);

  useEffect(() => {
    if (WinnerFinder(arr)) {
      setresult(`${arr[WinnerFinder(arr)[1]]} is the Winner 👑`);
      SetfindWinner(true);
      setselected(WinnerFinder(arr));
    } else if (count === 9 && !WinnerFinder(arr)) {
      setresult(`X and O is tied`);
    } else {
      isnext ? setresult("Next Player is O") : setresult("Next Player is X");
    }
  }, [arr, count, isnext]);

  const NewGame = () => {
    setarr(
      arr.map((item) => {
        return null;
      })
    );
    setcount(0);
    SetfindWinner(false);
    setIsnext(false);
  };

  const changexo = (position) => {
    if (arr[position] != null) {
      return;
    }
    setarr(
      arr.map((item, pos) => {
        if (pos === position && item === null && findWinner === false) {
          setcount(count + 1);
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
        pos={position}
        value={arr[position]}
        click={() => {
          changexo(position);
        }}
        bolder={
          position === selected[0] ||
          position === selected[1] ||
          position === selected[2]
            ? false
            : true
        }
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
      <button type="button" onClick={NewGame} className="newGame__btn">
        Start New Game
      </button>
    </div>
  );
}

export default Board;
