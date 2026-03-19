import React, { Component } from 'react'

export default class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      input: "",
      editIndex: -1
    }
  }

  // 🔹 Load data from localStorage when component loads
  componentDidMount() {
    const storedData = JSON.parse(localStorage.getItem("todos")) || [];
    this.setState({ data: storedData });
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

    // 🔹 Save to localStorage
    localStorage.setItem("todos", JSON.stringify(data));

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

    // 🔹 Update localStorage after delete
    localStorage.setItem("todos", JSON.stringify(data));

    this.setState({ data });
  }

  render() {
    return (
      <>
        <h2>Todo App</h2>

        <input
          type="text"
          placeholder="Enter todo"
          value={this.state.input}
          onChange={this.handleChange}
        />

        <button onClick={this.handleAdd}>
          {this.state.editIndex >= 0 ? "Update" : "Add"}
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