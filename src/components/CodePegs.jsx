import React from "react";
import Peg from "./Peg";
//You need this npm package to do createReactClass
var createReactClass = require("create-react-class");

const CodePegs = createReactClass({
  render: function () {
    const pegs = [];

    let idVal;
    let pegClass;

    for (let [key, value] of this.props.colors) {
      idVal = "peg-" + key;
      pegClass = "peg " + value;
      if (value === this.props.selectedPeg) {
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
          activatePeg={this.props.activatePeg}
        />
      );
    }

    return <div className="codepegs right">{pegs}</div>;
  },
});
export default CodePegs;
