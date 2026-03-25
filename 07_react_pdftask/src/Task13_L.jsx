import React, { Component } from 'react'

export default class Task13_L extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      name: "",
      mobile: "",
      gender: "",
      hobby: [],
      city: "",
      editIndex: -1
    }
  }

  componentDidMount() {
    const stored = JSON.parse(localStorage.getItem("users")) || [];
    this.setState({ data: stored });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleHobby = (e) => {
    const { value, checked } = e.target;
    let hobbies = [...this.state.hobby];

    if (checked) hobbies.push(value);
    else hobbies = hobbies.filter(h => h !== value);

    this.setState({ hobby: hobbies });
  }

  handleSubmit = () => {
    let { data, editIndex } = this.state;

    const newObj = {
      name: this.state.name,
      mobile: this.state.mobile,
      gender: this.state.gender,
      hobby: this.state.hobby.join(", "),
      city: this.state.city
    };

    if (editIndex >= 0) {
      data[editIndex] = newObj;
    } else {
      data.push(newObj);
    }

    localStorage.setItem("users", JSON.stringify(data));

    this.setState({
      data,
      name: "",
      mobile: "",
      gender: "",
      hobby: [],
      city: "",
      editIndex: -1
    });
  }

  handleEdit = (index) => {
    const item = this.state.data[index];

    this.setState({
      ...item,
      hobby: item.hobby.split(", "),
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
        <h2>Task 13 - LocalStorage</h2>

        <input name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
        <input name="mobile" placeholder="Mobile" value={this.state.mobile} onChange={this.handleChange}/>

        <div>
          <input type="radio" name="gender" value="Male" checked={this.state.gender==="Male"} onChange={this.handleChange}/> Male
          <input type="radio" name="gender" value="Female" checked={this.state.gender==="Female"} onChange={this.handleChange}/> Female
        </div>

        <div>
          <input type="checkbox" value="Cricket" checked={this.state.hobby.includes("Cricket")} onChange={this.handleHobby}/> Cricket
          <input type="checkbox" value="Music" checked={this.state.hobby.includes("Music")} onChange={this.handleHobby}/> Music
        </div>

        <select name="city" value={this.state.city} onChange={this.handleChange}>
          <option value="">Select City</option>
          <option>Ahmedabad</option>
          <option>Surat</option>
        </select>

        <button onClick={this.handleSubmit}>
          {this.state.editIndex >= 0 ? "Update" : "Add"}
        </button>

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Gender</th>
              <th>Hobby</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.mobile}</td>
                <td>{item.gender}</td>
                <td>{item.hobby}</td>
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