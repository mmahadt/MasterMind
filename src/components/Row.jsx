import React from "react";
import classNames from "classnames";
import DecodeRow from "./DecodeRow";
import HintsRow from "./HintsRow";
import SubmitButton from "./SubmitButton";

function Row(props) {
  const isCurrentRow = props.state.currentRow === props.rowId;
  const rowClassName = classNames({
    row: true,
    clearfix: true,
    current: isCurrentRow,
  });
  const hintsRowName = "hintsRow-" + props.rowId;
  const rowName = "decodeRow-" + props.rowId;

  return (
    <div className={rowClassName}>
      <div className="left">
        <DecodeRow
          name={rowName}
          key={props.rowId}
          rowId={props.rowId}
          state={props.state}
          isCurrentRow={isCurrentRow}
          activatePeg={props.activatePeg}
          times={props.times}
        />
      </div>
      <div className="left">
        <SubmitButton
          rowId={props.rowId}
          state={props.state}
          submitPegs={props.submitPegs}
        />
      </div>
      <div className="right">
        <HintsRow
          name={hintsRowName}
          key={props.rowId}
          rowId={props.rowId}
          state={props.state}
          times={props.times}
        />
      </div>
    </div>
  );
}

export default Row;
