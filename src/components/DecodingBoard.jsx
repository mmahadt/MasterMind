import React, { Component } from "react";
import Row from "./Row";

function DecodingBoard(props) {
  const { times, state, activatePeg, submitPegs } = props;
  let rows = [];
  let rowName;

  let generateRow = (i) => {
    rowName = "decodeRow-" + i + 1;
    rows.push(
      <Row
        times={times}
        name={rowName}
        key={i + 1}
        rowId={i}
        state={state}
        activatePeg={activatePeg}
        submitPegs={submitPegs}
      />
    );
  };

  times(state.attempts)(generateRow);

  return <div className="decoding-board left">{rows}</div>;
}

export default DecodingBoard;
