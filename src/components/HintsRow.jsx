import React from "react";
import Hint from "./Hint";
//You need this npm package to do createReactClass
const createReactClass = require("create-react-class");

function HintsRow(props) {
  const hints = [];

  let idVal;
  let hintClass = "";
  let exactMatches = props.state.exactMatches;
  let valueMatches = props.state.valueMatches;

  let generateHint = (i) => {
    hintClass = "hint";
    idVal = props.name + "-" + i + 1;

    //update current row
    if (props.state.currentRow - 1 === props.rowId) {
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
      <Hint
        key={idVal}
        hintClass={hintClass}
        rowId={props.rowId}
        state={props.state}
      />
    );
  };

  props.times(props.state.pegsInRow)(generateHint);

  return <div className="hints-row">{hints}</div>;
}

export default HintsRow;
