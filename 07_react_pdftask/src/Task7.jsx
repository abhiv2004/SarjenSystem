import React, { Component } from 'react'

export default class Task7 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      time: new Date()
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <h1>Task 7 : Digital Clock</h1>

        <h2>{this.state.time.toLocaleTimeString()}</h2>
        <h3>{this.state.time.toLocaleDateString()}</h3>
      </>
    )
  }
}