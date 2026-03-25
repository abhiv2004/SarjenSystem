import React, { Component } from 'react'

export default class Task9 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      num1: "",
      num2: "",
      result: "",
      operator: "+"
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // ✅ Option 1 (Buttons)
  calculate = (type) => {
    const { num1, num2 } = this.state;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    let res = 0;

    if (type === "add") res = n1 + n2;
    if (type === "sub") res = n1 - n2;
    if (type === "mul") res = n1 * n2;
    if (type === "div") res = n2 !== 0 ? n1 / n2 : "Cannot divide by 0";

    this.setState({ result: res });
  }

  // ✅ Option 2 (Dropdown)
  calculateWithOperator = () => {
    const { num1, num2, operator } = this.state;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    let res = 0;

    switch (operator) {
      case "+": res = n1 + n2; break;
      case "-": res = n1 - n2; break;
      case "*": res = n1 * n2; break;
      case "/": res = n2 !== 0 ? n1 / n2 : "Cannot divide by 0"; break;
      default: res = 0;
    }

    this.setState({ result: res });
  }

  render() {
    return (
      <>
        <h1>Task 9 : Basic Calculator</h1>

        {/* Common Inputs */}
        <input
          type="number"
          name="num1"
          placeholder="Enter Number 1"
          value={this.state.num1}
          onChange={this.handleChange}
        />

        <input
          type="number"
          name="num2"
          placeholder="Enter Number 2"
          value={this.state.num2}
          onChange={this.handleChange}
        />

        <br /><br />

        {/* ✅ Option 1 */}
        <h3>Option 1 (Buttons)</h3>

        <button onClick={() => this.calculate("add")}>+</button>
        <button onClick={() => this.calculate("sub")}>-</button>
        <button onClick={() => this.calculate("mul")}>*</button>
        <button onClick={() => this.calculate("div")}>/</button>

        <h3>Result: {this.state.result}</h3>

        <hr />

        {/* ✅ Option 2 */}
        <h3>Option 2 (Dropdown)</h3>

        <select
          name="operator"
          value={this.state.operator}
          onChange={this.handleChange}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>

        <br /><br />

        <button onClick={this.calculateWithOperator}>
          Calculate
        </button>

        <h3>Answer is: {this.state.result}</h3>
      </>
    )
  }
}