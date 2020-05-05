import React from "react";
import Peg from "./Peg";

function CodePegs(props) {
  const { colors, selectedPeg, activatePeg } = props;
  const pegs = [];

  let idVal;
  let pegClass;

  for (let [key, value] of colors) {
    idVal = "peg-" + key;
    pegClass = "peg " + value;
    if (value === selectedPeg) {
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
        activatePeg={activatePeg}
      />
    );
  }

  return <div className="codepegs right">{pegs}</div>;
}
export default CodePegs;
