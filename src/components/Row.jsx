import React from "react";
import classNames from "classnames";
import DecodeRow from "./DecodeRow";
import HintsRow from "./HintsRow";
import SubmitButton from "./SubmitButton";

//You need this npm package to do createReactClass
var createReactClass = require("create-react-class");

const Row = createReactClass({
  render: function () {
    const isCurrentRow = this.props.state.currentRow === this.props.rowId;
    const rowClassName = classNames({
      row: true,
      clearfix: true,
      current: isCurrentRow,
    });
    const hintsRowName = "hintsRow-" + this.props.rowId;
    const rowName = "decodeRow-" + this.props.rowId;

    return (
      <div className={rowClassName}>
        <div className="left">
          <DecodeRow
            name={rowName}
            key={this.props.rowId}
            rowId={this.props.rowId}
            state={this.props.state}
            isCurrentRow={isCurrentRow}
            activatePeg={this.props.activatePeg}
            times={this.props.times}
          />
        </div>
        <div className="left">
          <SubmitButton
            rowId={this.props.rowId}
            state={this.props.state}
            submitPegs={this.props.submitPegs}
          />
        </div>
        <div className="right">
          <HintsRow
            name={hintsRowName}
            key={this.props.rowId}
            rowId={this.props.rowId}
            state={this.props.state}
            times={this.props.times}
          />
        </div>
      </div>
    );
  },
});

export default Row;
