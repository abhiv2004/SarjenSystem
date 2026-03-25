import React, { Component } from 'react'

export default class Task10 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      display: ""
    }
  }

  handleClick = (value) => {
    this.setState({
      display: this.state.display + value
    });
  }

  calculateResult = () => {
    try {
      this.setState({
        display: eval(this.state.display).toString()
      });
    } catch {
      this.setState({ display: "Error" });
    }
  }

  clearDisplay = () => {
    this.setState({ display: "" });
  }

  render() {
    return (
      <>
        <h1>Task 10 : Calculator</h1>

        {/* Display */}
        <input
          type="text"
          value={this.state.display}
          readOnly
          style={{ width: "200px", height: "40px", fontSize: "18px" }}
        />

        <br /><br />

        {/* Buttons */}
        <div>
          <button onClick={() => this.handleClick("1")}>1</button>
          <button onClick={() => this.handleClick("2")}>2</button>
          <button onClick={() => this.handleClick("3")}>3</button>
          <button onClick={() => this.handleClick("+")}>+</button>
        </div>

        <div>
          <button onClick={() => this.handleClick("4")}>4</button>
          <button onClick={() => this.handleClick("5")}>5</button>
          <button onClick={() => this.handleClick("6")}>6</button>
          <button onClick={() => this.handleClick("-")}>-</button>
        </div>

        <div>
          <button onClick={() => this.handleClick("7")}>7</button>
          <button onClick={() => this.handleClick("8")}>8</button>
          <button onClick={() => this.handleClick("9")}>9</button>
          <button onClick={() => this.handleClick("*")}>*</button>
        </div>

        <div>
          <button onClick={() => this.handleClick(".")}>.</button>
          <button onClick={() => this.handleClick("0")}>0</button>
          <button onClick={this.calculateResult}>=</button>
          <button onClick={() => this.handleClick("/")}>/</button>
        </div>

        <div>
          <button onClick={this.clearDisplay}>C</button>
        </div>
      </>
    )
  }
}