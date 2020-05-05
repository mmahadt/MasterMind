import React from "react";
import classNames from "classnames";
//You need this npm package to do createReactClass
const createReactClass = require("create-react-class");

function EndGame(props) {
  const { endGame, success, reloadGame } = props;
  const endGameInfoClass = classNames({
    endgame: true,
    hidden: !endGame,
  });
  const endGameStatusClass = classNames({
    "endgame-relative": true,
    success: success,
    failure: !success,
  });
  const infoText = success ? "Congratulations!" : "GAME OVER!";

  return (
    <div className={endGameInfoClass}>
      <div className={endGameStatusClass}>
        <h2 className="endgame-header">{infoText}</h2>
        <button className="endgame-btn" onClick={reloadGame}>
          PLAY AGAIN
        </button>
      </div>
      <div className="endgame-relative endgame-overlay"></div>
    </div>
  );
}

export default EndGame;
