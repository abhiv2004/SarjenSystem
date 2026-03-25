import React, { Component } from 'react'

export default class Task11 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: "",
      rate: "18",
      gstAmount: null,
      totalAmount: null
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  calculateGST = () => {
    const { amount, rate } = this.state;

    const amt = parseFloat(amount);
    const gst = (amt * parseFloat(rate)) / 100;
    const total = amt + gst;

    this.setState({
      gstAmount: gst.toFixed(2),
      totalAmount: total.toFixed(2)
    });
  }

  render() {
    return (
      <>
        <h1>Task 11 : GST Calculator</h1>

        {/* Amount Input */}
        <input
          type="number"
          name="amount"
          placeholder="Enter Amount"
          value={this.state.amount}
          onChange={this.handleChange}
        />

        <br /><br />

        {/* GST Rate Dropdown */}
        <select
          name="rate"
          value={this.state.rate}
          onChange={this.handleChange}
        >
          <option value="18">18%</option>
          <option value="16">16%</option>
          <option value="12">12%</option>
        </select>

        <br /><br />

        {/* Button */}
        <button onClick={this.calculateGST}>
          Calculate GST
        </button>

        {/* Result */}
        {this.state.gstAmount !== null && (
          <>
            <h3>
              Amount  : {this.state.amount}
            </h3>
            <h3>
               GST ({this.state.rate}%): {this.state.gstAmount}
            </h3>

            <h3>
              Total Amount: {this.state.totalAmount}
            </h3>
          </>
        )}
      </>
    )
  }
}