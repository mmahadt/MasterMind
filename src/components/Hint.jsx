import React from "react";

//You need this npm package to do createReactClass
const createReactClass = require("create-react-class");

const Hint = createReactClass({
  shouldComponentUpdate: function (nextProps) {
    return nextProps.state.currentRow - 1 <= nextProps.rowId;
  },

  render: function () {
    return <span className={this.props.hintClass}></span>;
  },
});

export default Hint;
