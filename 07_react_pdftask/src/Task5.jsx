import React, { Component } from 'react'

export default class Task5 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    this.timer = null;
  }

  startTimer = () => {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.setState((prevState) => {
          if (prevState.count >= 10) {
            clearInterval(this.timer);   // stop
            this.timer = null;
            return { count: 0 };         // reset to 0
          }
          return { count: prevState.count + 1 };
        });
      }, 1000);
    }
  }

  pauseTimer = () => {
    clearInterval(this.timer);
    this.timer = null;
  }

  stopTimer = () => {
    clearInterval(this.timer);
    this.timer = null;
    this.setState({ count: 0 });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <h1>Task 5 : Countdown Timer</h1>

        <h2>Countdown : {this.state.count}</h2>

        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.pauseTimer}>Pause</button>
        <button onClick={this.stopTimer}>Stop</button>
      </>
    )
  }
}