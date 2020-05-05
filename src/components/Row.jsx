import React from "react";
import classNames from "classnames";
import DecodeRow from "./DecodeRow";
import HintsRow from "./HintsRow";
import SubmitButton from "./SubmitButton";

function Row(props) {
  const { state, rowId, activatePeg, times, submitPegs } = props;
  const isCurrentRow = state.currentRow === rowId;
  const rowClassName = classNames({
    row: true,
    clearfix: true,
    current: isCurrentRow,
  });
  const hintsRowName = "hintsRow-" + rowId;
  const rowName = "decodeRow-" + rowId;

  return (
    <div className={rowClassName}>
      <div className="left">
        <DecodeRow
          name={rowName}
          key={rowId}
          rowId={rowId}
          state={state}
          isCurrentRow={isCurrentRow}
          activatePeg={activatePeg}
          times={times}
        />
      </div>
      <div className="left">
        <SubmitButton rowId={rowId} state={state} submitPegs={submitPegs} />
      </div>
      <div className="right">
        <HintsRow
          name={hintsRowName}
          key={rowId}
          rowId={rowId}
          state={state}
          times={times}
        />
      </div>
    </div>
  );
}

export default Row;
