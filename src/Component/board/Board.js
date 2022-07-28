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
  //This will collect and store which index of array made the game win
  const [selected, setselected] = useState([]);

  //   I use UseEffect because some or the other way the useState was showing some error so I try useEffect and problem solved , Simple as it is. In future I may learn what is the reason behind it
  //This is the result message is comming from
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
    setselected([]);
  };

  //=====================FUCNTION CHANGEXO (used in SQUAREBOX)=================//
  const changexo = (position) => {
    //This function deals with the interaction in the boxes of the game board

    //First - Every box in the array arr is initialised null
    //when ever we click a box 'x' or 'o' value will be inserted so if we are clicking the inserted box again then there will be some bug to fix that we use this if condition
    if (arr[position] != null) {
      return;
    }

    //This is setarr useState , Here we itrarted through the arr and when ever we click a box of specific postion that will be passes and
    //first - need to check index and position of the element
    //second - need to check wheater item is null
    //third - if any winner is found then the game stop so no more adding 'o' or 'x'
    //if these 3 condition satify then good to go
    //return is also in a if condition this is mainly because to exchange between x and o
    //when o complete isnext will be change to false
    //when x complete isnext will be change to true
    //else part is nothing just returning item (which is null)
    setarr(
      arr.map((item, pos) => {
        if (pos === position && item === null && findWinner === false) {
          setcount(count + 1);
          return isnext ? "O" : "X";
        }
        return item;
      })
    );
    //This is the part where we change the state of setIsnext
    setIsnext(!isnext);
  };

  // ====================SQUARE BOX FUNCTION ====================== //

  //This is the function for each box creation in each column it collect an argument position
  const squareBox = (position) => {
    // it will return a square container which is also a div
    return (
      // there are 4 props in the container square
      //1. pos = This will pass the position
      //2.value = This will pass the value from the array arr[](Which store the x and o)
      //3.click = This will activte when ever we click on of the box                    function changexo(position) will be activated while i
      //4.bolder = This is used to highlight if through which all boxs we decide the winner
      // inside the bolder we use a condition selected is an array which will return the index of the winning box  3 values are the different postion of winning boxs
      //then we use and compare with the specific box to sort the box out and we return false if any position is selected and true is any position is not selected
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

  //============================ Return function of BOARD===============//
  return (
    //just for encloure
    <div>
      {/* This is used to print out all the message like who is the next player and the result everything is printed out here */}
      <h2 className="result__Box">{result}</h2>
      {/* this div is the container of the box of the game */}
      <div className="MainGameBox">
        {/* This is the first coulmn of the box 1st */}
        <div className="columnBox">
          {/* each column conatin's 3 individual  boxs For simplisty we used the function */}
          {squareBox(0)}
          {squareBox(1)}
          {squareBox(2)}
        </div>

        {/* This is the second column of the box 2nd */}
        <div className="columnBox">
          {squareBox(3)}
          {squareBox(4)}
          {squareBox(5)}
        </div>

        {/* This is the third column of the box 3rd */}
        <div className="columnBox">
          {squareBox(6)}
          {squareBox(7)}
          {squareBox(8)}
        </div>
      </div>

      {/* we use this button mainly to reset the game 
      by clicking this button NewGame function will be activated */}
      <button type="button" onClick={NewGame} className="newGame__btn">
        Start New Game
      </button>
    </div>
  );
}

export default Board;
