import React, { Component } from "react";
import { withRouter } from "./withRouter";

class ChangePassword extends Component {
  state = {
    password: "",
    confirmPassword: "",
    error: ""
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdate = () => {
    const { password, confirmPassword } = this.state;

    if (!password || !confirmPassword) {
      this.setState({ error: "Fill all fields" });
      return;
    }

    if (password !== confirmPassword) {
      this.setState({ error: "Passwords do not match" });
      return;
    }

    let user = JSON.parse(localStorage.getItem("user"));
    user.password = password;

    localStorage.setItem("user", JSON.stringify(user));

    alert("Password Updated");

    this.props.navigate("/login");
  };

  render() {
    return (
      <div>
        <h2>Change Password</h2>

        <input
          type="password"
          name="password"
          placeholder="New Password"
          onChange={this.handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={this.handleChange}
        />

        <button onClick={this.handleUpdate}>Update</button>

        <p style={{ color: "red" }}>{this.state.error}</p>
      </div>
    );
  }
}
export default withRouter(ChangePassword);