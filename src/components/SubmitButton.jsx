import React from "react";
import classNames from "classnames";
//You need this npm package to do createReactClass
var createReactClass = require("create-react-class");

const SubmitButton = createReactClass({
  render: function () {
    const className = classNames({
      submit: true,
      hidden: !(
        this.props.state.currentGuess.size >= this.props.state.pegsInRow &&
        this.props.state.currentRow === this.props.rowId
      ),
    });

    return (
      <button className={className} onClick={this.props.submitPegs}></button>
    );
  },
});
export default SubmitButton;
