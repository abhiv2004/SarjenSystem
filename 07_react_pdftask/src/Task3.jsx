import React, { Component } from 'react'

export default class Task3 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: ""
    }
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <>
        <h1>Task 3 : Take a string and display character count</h1>

        <input
          type="text"
          placeholder="Enter text"
          value={this.state.input}
          onChange={this.handleChange}
        />

        <h3>Total Characters: {this.state.input.length}</h3>
      </>
    )
  }
}