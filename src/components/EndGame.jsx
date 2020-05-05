import React from "react";
import classNames from "classnames";
//You need this npm package to do createReactClass
const createReactClass = require("create-react-class");

function EndGame(props) {
  const endGameInfoClass = classNames({
    endgame: true,
    hidden: !props.endGame,
  });
  const endGameStatusClass = classNames({
    "endgame-relative": true,
    success: props.success,
    failure: !props.success,
  });
  const infoText = props.success ? "Congratulations!" : "GAME OVER!";

  return (
    <div className={endGameInfoClass}>
      <div className={endGameStatusClass}>
        <h2 className="endgame-header">{infoText}</h2>
        <button className="endgame-btn" onClick={props.reloadGame}>
          PLAY AGAIN
        </button>
      </div>
      <div className="endgame-relative endgame-overlay"></div>
    </div>
  );
}

export default EndGame;
