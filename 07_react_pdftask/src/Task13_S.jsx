import React, { Component } from 'react'

export default class Task13_S extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      mobile: "",
      gender: "",
      hobby: [],
      city: "",
      submittedData: null,
      errors: {}
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleHobby = (e) => {
    const { value, checked } = e.target;
    let hobbies = [...this.state.hobby];

    if (checked) {
      hobbies.push(value);
    } else {
      hobbies = hobbies.filter(h => h !== value);
    }

    this.setState({ hobby: hobbies });
  }

  validate = () => {
    let errors = {};
    const { name, mobile, gender, hobby, city } = this.state;

    if (!name) errors.name = "Name required";
    if (!mobile || mobile.length !== 10) errors.mobile = "Valid mobile required";
    if (!gender) errors.gender = "Select gender";
    if (hobby.length === 0) errors.hobby = "Select hobby";
    if (!city) errors.city = "Select city";

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  }

  handleSubmit = () => {
    if (!this.validate()) return;

    this.setState({
      submittedData: {
        name: this.state.name,
        mobile: this.state.mobile,
        gender: this.state.gender,
        hobby: this.state.hobby.join(", "),
        city: this.state.city
      }
    });
  }

  render() {
    return (
      <>
        <h2>Task 13 - Form (State)</h2>

        <input name="name" placeholder="Enter Name" onChange={this.handleChange} />
        <p>{this.state.errors.name}</p>

        <input name="mobile" placeholder="Enter Mobile" onChange={this.handleChange} />
        <p>{this.state.errors.mobile}</p>

        <div>
          Gender:
          <input type="radio" name="gender" value="Male" onChange={this.handleChange}/> Male
          <input type="radio" name="gender" value="Female" onChange={this.handleChange}/> Female
        </div>
        <p>{this.state.errors.gender}</p>

        <div>
          Hobby:
          <input type="checkbox" value="Cricket" onChange={this.handleHobby}/> Cricket
          <input type="checkbox" value="Music" onChange={this.handleHobby}/> Music
        </div>
        <p>{this.state.errors.hobby}</p>

        <select name="city" onChange={this.handleChange}>
          <option value="">Select City</option>
          <option>Ahmedabad</option>
          <option>Surat</option>
        </select>
        <p>{this.state.errors.city}</p>

        <button onClick={this.handleSubmit}>Submit</button>

        {this.state.submittedData && (
          <>
            <h3>Output:</h3>
            <p>Name: {this.state.submittedData.name}</p>
            <p>Mobile: {this.state.submittedData.mobile}</p>
            <p>Gender: {this.state.submittedData.gender}</p>
            <p>Hobby: {this.state.submittedData.hobby}</p>
            <p>City: {this.state.submittedData.city}</p>
          </>
        )}
      </>
    )
  }
}