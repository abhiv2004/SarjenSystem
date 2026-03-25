import React, { Component } from 'react'

export default class Task12_L extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      input: "",
      editIndex: -1
    }
  }

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

    localStorage.setItem("todos", JSON.stringify(data));
    this.setState({ data });
  }

  render() {
    return (
      <>
        <h2>Todo App (LocalStorage)</h2>

        <input
          type="text"
          placeholder="Enter todo"
          value={this.state.input}
          onChange={this.handleChange}
        />

        <button onClick={this.handleAdd}>
          {this.state.editIndex >= 0 ? "Update" : "Add TODO"}
        </button>

        <br /><br />

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>#</th>
              <th>Todo</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {this.state.data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item}</td>
                <td>
                  <button onClick={() => this.handleEdit(index)}>Edit</button>
                  <button onClick={() => this.handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }
}