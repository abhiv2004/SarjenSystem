import React, { Component } from 'react'

export default class Task12_S extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      input: "",
      editIndex: -1
    }
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleAdd = () => {
    let { data, input, editIndex } = this.state;

    if (!input) return;

    if (editIndex >= 0) {
      data[editIndex] = input;
    } else {
      data.push(input);
    }

    this.setState({
      data,
      input: "",
      editIndex: -1
    });
  }

  handleEdit = (index) => {
    this.setState({
      input: this.state.data[index],
      editIndex: index
    });
  }

  handleDelete = (index) => {
    let data = [...this.state.data];
    data.splice(index, 1);

    this.setState({ data });
  }

  render() {
    return (
      <>
        <h2>Todo App (State)</h2>

        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />

        <button onClick={this.handleAdd}>
          {this.state.editIndex >= 0 ? "Update" : "Add TODO"}
        </button>

        <ul>
          {this.state.data.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => this.handleEdit(index)}>Edit</button>
              <button onClick={() => this.handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </>
    )
  }
}