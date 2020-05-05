import React from "react";
import classNames from "classnames";
//You need this npm package to do createReactClass
const createReactClass = require("create-react-class");

function SubmitButton(props) {
  const className = classNames({
    submit: true,
    hidden: !(
      props.state.currentGuess.size >= props.state.pegsInRow &&
      props.state.currentRow === props.rowId
    ),
  });

  return <button className={className} onClick={props.submitPegs}></button>;
}
export default SubmitButton;
