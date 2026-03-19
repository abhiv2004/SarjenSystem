import React, { Component } from 'react'

export default class Addition extends Component {
  constructor(props) {
    super(props)

    this.state = {
      num1: '',
      num2: '',
      result: null,
      errors: {
        num1: '',
        num2: ''
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      errors: {
        ...this.state.errors,
        [e.target.name]: ''
      }
    })
  }


  validate = () => {
    const { num1, num2 } = this.state
    let errors = {}
    let isValid = true

    if (num1 === '') {
      errors.num1 = 'Enter No1'
      isValid = false
    } else if (isNaN(num1)) {
      errors.num1 = 'Enter valid number'
      isValid = false
    }

    if (num2 === '') {
      errors.num2 = 'Enter No2'
      isValid = false
    } else if (isNaN(num2)) {
      errors.num2 = 'Enter valid number'
      isValid = false
    }

    this.setState({ errors })
    return isValid
  }

  handleSum = () => {
    if (!this.validate()) return

    const { num1, num2 } = this.state
    const sum = parseFloat(num1) + parseFloat(num2)

    this.setState({
      result: sum
    })
  }

  render() {
    return (
      <div>
        <h2>Addition with Validation</h2>
        No1 : 
        <input
          type="text"
          name="num1"
          placeholder="Enter first number"
          value={this.state.num1}
          onChange={this.handleChange}
        />
        {this.state.errors.num1 && (
          <p style={{ color: 'red' }}>{this.state.errors.num1}</p>
        )}

        <br />
        <br />
        No2 :
        <input
          type="text"
          name="num2"
          placeholder="Enter second number"
          value={this.state.num2}
          onChange={this.handleChange}
        />
        {this.state.errors.num2 && (
          <p style={{ color: 'red' }}>{this.state.errors.num2}</p>
        )}

        <br /><br />

        <button onClick={this.handleSum}>Add</button>

        <br /><br />

        {this.state.result !== null && (
          <p>Result: {this.state.result}</p>
        )}
      </div>
    )
  }
}