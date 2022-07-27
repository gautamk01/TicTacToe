import React from "react";

export default function Square(props) {
  return (
    <div className="btn" onClick={props.click}>
      <h1 className="mainKey">{props.value}</h1>
    </div>
  );
}
