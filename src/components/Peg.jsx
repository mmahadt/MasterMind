import React from "react";

function Peg(props) {
  const { pegClass, name, value, idVal, isCurrentRow, activatePeg } = props;
  return (
    <span className={pegClass}>
      <input
        type="radio"
        name={name}
        value={value}
        id={idVal}
        onClick={isCurrentRow ? activatePeg : null}
      />
      <label htmlFor={idVal}></label>
    </span>
  );
}

export default Peg;
