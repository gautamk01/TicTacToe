import React from "react";
import { ImCross } from "react-icons/im";
import { BsFillRecordCircleFill } from "react-icons/bs";
export default function Square(props) {
  return (
    <div className="btn" onClick={props.click}>
      {props.bolder ? (
        <p>
          {props.value === "X" && <ImCross />}
          {props.value === "O" && <BsFillRecordCircleFill />}
        </p>
      ) : (
        <h2>
          {" "}
          {props.value === "X" && <ImCross />}
          {props.value === "O" && <BsFillRecordCircleFill />}
        </h2>
      )}
    </div>
  );
}
