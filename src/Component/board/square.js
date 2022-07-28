import React from "react";
export default function Square(props) {
  console.log(props.bolder);
  return (
    <div className="btn" onClick={props.click}>
      {props.bolder ? <p>{props.value}</p> : <h1>{props.value}</h1>}
    </div>
  );
}
