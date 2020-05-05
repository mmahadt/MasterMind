import React from "react";
import Peg from "./Peg";

class DecodeRow extends React.Component {
  constructor(props) {
    super(props);
  }

  //do not update already submitted row
  shouldComponentUpdate(nextProps) {
    return nextProps.state.currentRow <= nextProps.rowId;
  }

  render() {
    const { name, state, rowId, isCurrentRow, activatePeg, times } = this.props;
    let pegs = [];
    let idVal;
    let pegClass;

    let generatePeg = (i) => {
      idVal = name + "-" + i + 1;
      //update current row
      if (state.currentRow === rowId) {
        pegClass = state.currentGuess.get(i)
          ? "peg " + state.currentGuess.get(i)
          : "peg";
      } else {
        //clear all of the next pegs - from the previous game
        pegClass = "peg";
      }

      pegs.push(
        <Peg
          idVal={idVal}
          name={name}
          value={i + 1}
          key={idVal}
          pegClass={pegClass}
          isCurrentRow={isCurrentRow}
          activatePeg={activatePeg}
        />
      );
    };

    times(state.pegsInRow)(generatePeg);

    return <div className="decode-row">{pegs}</div>;
  }
}

export default DecodeRow;
