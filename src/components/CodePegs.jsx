import React from "react";
import Peg from "./Peg";

function CodePegs(props) {
  const pegs = [];

  let idVal;
  let pegClass;

  for (let [key, value] of props.colors) {
    idVal = "peg-" + key;
    pegClass = "peg " + value;
    if (value === props.selectedPeg) {
      pegClass = pegClass + " selected";
    }
    pegs.push(
      <Peg
        idVal={idVal}
        name="peg"
        value={value}
        key={idVal}
        pegClass={pegClass}
        isCurrentRow={true}
        activatePeg={props.activatePeg}
      />
    );
  }

  return <div className="codepegs right">{pegs}</div>;
}
export default CodePegs;
