import React from "react";

export default function Square(props) {
  return (
    <div className="btn" onClick={props.click}>
      <p className="mainKey">{props.value}</p>
    </div>
  );
}
