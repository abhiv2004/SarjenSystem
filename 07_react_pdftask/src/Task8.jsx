import React, { Component } from 'react'

export default class Task8 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      randomNumber: this.generateNumber(),
      input: "",
      message: "",
      isCorrect: false
    }
  }

  generateNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleClick = () => {
    const { input, randomNumber, isCorrect } = this.state;

    if (isCorrect) {
      this.setState({
        randomNumber: this.generateNumber(),
        input: "",
        message: "",
        isCorrect: false
      });
      return;
    }

    const userGuess = parseInt(input);

    if (userGuess === randomNumber) {
      this.setState({
        message: "✅ Correct Guess!",
        isCorrect: true
      });
    } else {
      this.setState({
        message: "❌ Wrong Guess!"
      });
    }
  }

  render() {
    return (
      <>
        <h1>Task 8 : Guess the Number</h1>

        <input
          type="number"
          placeholder="Guess number (1-10)"
          value={this.state.input}
          onChange={this.handleChange}
          disabled={this.state.isCorrect}
        />

        <br /><br />

        <button onClick={this.handleClick}>
          {this.state.isCorrect ? "Play Again" : "Submit"}
        </button>

        <h3>{this.state.message}</h3>
      </>
    )
  }
}