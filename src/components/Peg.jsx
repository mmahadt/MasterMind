import React from "react";

function Peg(props) {
  return (
    <span className={props.pegClass}>
      <input
        type="radio"
        name={props.name}
        value={props.value}
        id={props.idVal}
        onClick={props.isCurrentRow ? props.activatePeg : null}
      />
      <label htmlFor={props.idVal}></label>
    </span>
  );
}

export default Peg;
