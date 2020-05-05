import React, { Component } from "react";
import Row from "./Row";

//You need this npm package to do createReactClass
var createReactClass = require("create-react-class");

const DecodingBoard = createReactClass({
  render: function () {
    let rows = [];
    let rowName;

    let generateRow = (i) => {
      rowName = "decodeRow-" + i + 1;
      rows.push(
        <Row
          times={this.props.times}
          name={rowName}
          key={i + 1}
          rowId={i}
          state={this.props.state}
          activatePeg={this.props.activatePeg}
          submitPegs={this.props.submitPegs}
        />
      );
    };

    this.props.times(this.props.state.attempts)(generateRow);

    return <div className="decoding-board left">{rows}</div>;
  },
});

export default DecodingBoard;
