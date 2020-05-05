import React from "react";
import classNames from "classnames";
//You need this npm package to do createReactClass
var createReactClass = require("create-react-class");

const EndGame = createReactClass({
  render: function () {
    const endGameInfoClass = classNames({
      endgame: true,
      hidden: !this.props.endGame,
    });
    const endGameStatusClass = classNames({
      "endgame-relative": true,
      success: this.props.success,
      failure: !this.props.success,
    });
    const infoText = this.props.success ? "Congratulations!" : "GAME OVER!";

    return (
      <div className={endGameInfoClass}>
        <div className={endGameStatusClass}>
          <h2 className="endgame-header">{infoText}</h2>
          <button className="endgame-btn" onClick={this.props.reloadGame}>
            PLAY AGAIN
          </button>
        </div>
        <div className="endgame-relative endgame-overlay"></div>
      </div>
    );
  },
});

export default EndGame;
