import React, { Component } from 'react'

export default class Task6 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      password: "",
      showPassword: false
    }
  }

  handleChange = (e) => {
    this.setState({ password: e.target.value });
  }

  togglePassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  }

  render() {
    return (
      <>
        <h1>Task 6 : Password Toggle</h1>

        <input
          type={this.state.showPassword ? "text" : "password"}
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleChange}
        />

        <button onClick={this.togglePassword}>
          {this.state.showPassword ? "🙈" : "👁️"}
        </button>
      </>
    )
  }
}