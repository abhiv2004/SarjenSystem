import React, { Component, useContext } from 'react'
import { ThemeContext } from './context/ThemeContext';

export default class Task2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: "",
      result: ""
    }
  }
  

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleClick = () => {
    this.setState({ result: this.state.input , input:"" });
  }



  render() {
    return (
      <>
        <h1>Task 2 : Take a string and print uppercase & lowercase</h1>

        Enter String : <input
          type="text"
          placeholder="Enter text"
          value={this.state.input}
          onChange={this.handleChange}
        />

        <br /><br />

        <button onClick={this.handleClick}>
          Display
        </button>

        <h3>Uppercase: {this.state.result.toUpperCase()}</h3>
        <h3>Lowercase: {this.state.result.toLowerCase()}</h3>
      </>
    )
  }
}