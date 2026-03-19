import React, { Component } from 'react'

export default class SumUsingObject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numbers: {
        num1: '',
        num2: ''
      },
      errors: {
        num1: '',
        num2: ''
      },
      result: null
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({
      numbers: {
        ...this.state.numbers,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: ''
      }
    })
  }

  // ✅ Separate validation method
  validate = () => {
    const { num1, num2 } = this.state.numbers
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

    const { num1, num2 } = this.state.numbers
    const sum = parseFloat(num1) + parseFloat(num2)

    this.setState({
      result: sum
    })
  }

  render() {
    return (
      <div>
        <h2>Sum Using Object</h2>

        <input
          type="text"
          name="num1"
          placeholder="Enter first number"
          value={this.state.numbers.num1}
          onChange={this.handleChange}
        />
        {this.state.errors.num1 && (
          <p style={{ color: 'red' }}>{this.state.errors.num1}</p>
        )}

        <br /><br />

        <input
          type="text"
          name="num2"
          placeholder="Enter second number"
          value={this.state.numbers.num2}
          onChange={this.handleChange}
        />
        {this.state.errors.num2 && (
          <p style={{ color: 'red' }}>{this.state.errors.num2}</p>
        )}

       <br/> <br/>

        <input type='button' value="Add" onClick={this.handleSum}/>

        {this.state.result !== null && (
          <p>Result: {this.state.result}</p>
        )}
      </div>
    )
  }
}