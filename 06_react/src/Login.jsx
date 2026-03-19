import React, { Component } from "react";
import { withRouter } from "./withRouter";

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      this.setState({ error: "No user found" });
      return;
    }

    if (
      this.state.username === savedUser.username &&
      this.state.password === savedUser.password
    ) {
      alert("Login Successful");
      this.props.navigate("/dashboard");
    } else {
      this.setState({ error: "Invalid credentials" });
    }
  };

  render() {
    return (
      <div>
        <h2>Login</h2>

        <input
          name="username"
          placeholder="Username"
          onChange={this.handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />

        <button onClick={this.handleLogin}>Login</button>
        <p onClick={() => this.props.navigate("/changepassword")}>
            Forgot Password?
        </p>

        <p style={{ color: "red" }}>{this.state.error}</p>
      </div>
    );
  }
}
export default withRouter(Login);