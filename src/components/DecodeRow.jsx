import React from "react";
import Peg from "./Peg";

//You need this npm package to do createReactClass
const createReactClass = require("create-react-class");

const DecodeRow = createReactClass({
  //do not update already submitted row
  shouldComponentUpdate: function (nextProps) {
    return nextProps.state.currentRow <= nextProps.rowId;
  },

  render: function () {
    let pegs = [];
    let idVal;
    let pegClass;

    let generatePeg = (i) => {
      idVal = this.props.name + "-" + i + 1;
      //update current row
      if (this.props.state.currentRow === this.props.rowId) {
        pegClass = this.props.state.currentGuess.get(i)
          ? "peg " + this.props.state.currentGuess.get(i)
          : "peg";
      } else {
        //clear all of the next pegs - from the previous game
        pegClass = "peg";
      }

      pegs.push(
        <Peg
          idVal={idVal}
          name={this.props.name}
          value={i + 1}
          key={idVal}
          pegClass={pegClass}
          isCurrentRow={this.props.isCurrentRow}
          activatePeg={this.props.activatePeg}
        />
      );
    };

    this.props.times(this.props.state.pegsInRow)(generatePeg);

    return <div className="decode-row">{pegs}</div>;
  },
});

export default DecodeRow;
