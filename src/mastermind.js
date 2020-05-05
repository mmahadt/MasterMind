import React from "react";

import CodePegs from "./components/CodePegs";
import DecodingBoard from "./components/DecodingBoard";
import EndGame from "./components/EndGame";
import Rules from "./components/Rules";

class Mastermind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: this.getCode(), //the main code to be decoded
      selectedPeg: this.props.colors.get(0),
      currentRow: 0,
      currentGuess: new Map(),
      exactMatches: 0,
      valueMatches: 0,
      pegsInRow: 4,
      attempts: 10,
      rules: false,
      success: false,
      endGame: false,
    };
    this.reloadGame = this.reloadGame.bind(this);
    this.toggleRules = this.toggleRules.bind(this);
    this.getRandomArbitrary = this.getRandomArbitrary.bind(this);
    this.getCode = this.getCode.bind(this);
    this.activatePeg = this.activatePeg.bind(this);
    this.keyOf = this.keyOf.bind(this);
    this.submitPegs = this.submitPegs.bind(this);
    this.times = this.times.bind(this);
  }

  reloadGame() {
    this.setState({
      success: false,
      endGame: false,
      code: this.getCode(),
      selectedPeg: this.props.colors.get(0),
      currentRow: 0,
      currentGuess: new Map(),
      exactMatches: 0,
      valueMatches: 0,
    });
  }

  times = (n) => (f) => {
    Array(n)
      .fill()
      .map((_, i) => f(i));
  };

  toggleRules() {
    this.setState({ rules: !this.state.rules });
  }

  getRandomArbitrary(min = 0, max = 5) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getCode() {
    const code = new Map();

    let generateCode = (i) => {
      code.set(i, this.props.colors.get(this.getRandomArbitrary()));
    };

    this.times(this.props.codeLength)(generateCode);

    return code;
  }

  activatePeg(event) {
    //if one of the peg on the right was selected
    if (event.target.name.startsWith("peg")) {
      this.setState({ selectedPeg: event.target.value });
    } else {
      //else if one of the pegs on the decoding board was selected
      if (this.state.selectedPeg) {
        //if peg on the right was selected
        this.setState({
          currentGuess: this.state.currentGuess.set(
            event.target.value - 1,
            this.state.selectedPeg
          ),
        });
      }
    }
  }

  keyOf(map, valueToFind) {
    for (let [key, value] of map) {
      if (valueToFind === value) {
        return key;
      }
    }

    return -1;
  }

  submitPegs() {
    let code = new Map(this.state.code);
    let pegs = this.state.currentGuess;
    let foundKey;
    let exactMatches = 0;
    let valueMatches = 0;

    // First pass: Look for value & position matches
    // Safely remove items if they match
    for (let [key, value] of pegs) {
      if (value === code.get(key)) {
        exactMatches++;
        pegs.delete(key);
        code.delete(key);
      }
    }

    // Second pass: Look for value matches anywhere in the code
    for (let [key, value] of pegs) {
      // attempt to find the peg in the remaining code
      foundKey = this.keyOf(code, value);
      if (foundKey !== -1) {
        valueMatches++;
        // remove the matched code peg, since it's been matched
        code.delete(foundKey);
      }
    }

    if (exactMatches === this.state.pegsInRow) {
      this.setState({ endGame: true });
      this.setState({ success: true });
    } else if (this.state.attempts === this.state.currentRow + 1) {
      this.setState({ endGame: true });
    }

    this.setState({
      exactMatches: exactMatches,
      valueMatches: valueMatches,
      currentRow: this.state.currentRow + 1,
      currentGuess: new Map(),
    });
  }

  render() {
    return (
      <div>
        <h1>
          <span className="M">M</span>
          <span className="A">A</span>
          <span className="S">S</span>
          <span className="T">T</span>
          <span className="E">E</span>
          <span className="R">R</span>
          <span className="MIND">MIND</span>
        </h1>
        <Rules rules={this.state.rules} toggleRules={this.toggleRules} />

        <div className="clearfix">
          <DecodingBoard
            state={this.state}
            activatePeg={this.activatePeg}
            submitPegs={this.submitPegs}
            times={this.times}
          />
          <CodePegs
            selectedPeg={this.state.selectedPeg}
            colors={this.props.colors}
            activatePeg={this.activatePeg}
          />
        </div>

        <EndGame
          endGame={this.state.endGame}
          success={this.state.success}
          reloadGame={this.reloadGame}
        />
        <div className="cheat">{this.state.code}</div>
      </div>
    );
  }
}

export default Mastermind;
