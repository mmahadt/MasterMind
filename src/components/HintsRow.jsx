import React from "react";
import Hint from "./Hint";

function HintsRow(props) {
  const { state, name, rowId, times } = props;
  const hints = [];

  let idVal;
  let hintClass = "";
  let exactMatches = state.exactMatches;
  let valueMatches = state.valueMatches;

  let generateHint = (i) => {
    hintClass = "hint";
    idVal = name + "-" + i + 1;

    //update current row
    if (state.currentRow - 1 === rowId) {
      if (exactMatches > 0) {
        hintClass = hintClass + " exact-matches";
        exactMatches--;
      } else if (valueMatches > 0) {
        hintClass = hintClass + " value-matches";
        valueMatches--;
      } else {
        hintClass = hintClass + " none-matches";
      }
    }

    hints.push(
      <Hint key={idVal} hintClass={hintClass} rowId={rowId} state={state} />
    );
  };

  times(state.pegsInRow)(generateHint);

  return <div className="hints-row">{hints}</div>;
}

export default HintsRow;
