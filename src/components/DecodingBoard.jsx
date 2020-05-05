import React, { Component } from "react";
import Row from "./Row";

function DecodingBoard(props) {
  let rows = [];
  let rowName;

  let generateRow = (i) => {
    rowName = "decodeRow-" + i + 1;
    rows.push(
      <Row
        times={props.times}
        name={rowName}
        key={i + 1}
        rowId={i}
        state={props.state}
        activatePeg={props.activatePeg}
        submitPegs={props.submitPegs}
      />
    );
  };

  props.times(props.state.attempts)(generateRow);

  return <div className="decoding-board left">{rows}</div>;
}

export default DecodingBoard;
