import React, { Component } from 'react'

export default class MapDemo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      name: "",
      gender: "",
      city: "",
      editIndex: -1
    }
  }

  componentDidMount() {
    const storedData = JSON.parse(localStorage.getItem("users")) || [];
    this.setState({ data: storedData });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = () => {
    let { data, name, gender, city, editIndex } = this.state;

    if (!name || !gender || !city) {
      alert("All fields required");
      return;
    }

    if (editIndex >= 0) {
      // Update
      data[editIndex] = { name, gender, city };
    } else {
      // Add
      data.push({ name, gender, city });
    }

    localStorage.setItem("users", JSON.stringify(data));

    this.setState({
      data,
      name: "",
      gender: "",
      city: "",
      editIndex: -1
    });
  }

  handleEdit = (index) => {
    const user = this.state.data[index];
    this.setState({
      name: user.name,
      gender: user.gender,
      city: user.city,
      editIndex: index
    });
  }

  handleDelete = (index) => {
    let data = [...this.state.data];
    data.splice(index, 1);

    localStorage.setItem("users", JSON.stringify(data));
    this.setState({ data });
  }

  render() {
    return (
      <>
        <h2>User Form</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <select name="gender" value={this.state.gender} onChange={this.handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          type="text"
          name="city"
          placeholder="Enter City"
          value={this.state.city}
          onChange={this.handleChange}
        />

        <button onClick={this.handleSubmit}>
          {this.state.editIndex >= 0 ? "Update" : "Add"}
        </button>

        <hr />

        <h2>Users List</h2>

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {this.state.data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td>{item.city}</td>
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