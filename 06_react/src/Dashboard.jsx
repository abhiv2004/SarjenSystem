import React, { Component } from "react";
import { withRouter } from "./withRouter";

class Dashboard extends Component {
  state = {
    user: JSON.parse(localStorage.getItem("user"))
  };

  handleLogout = () => {
    this.props.navigate("/login");
  };

  render() {
    const { user } = this.state;

    if (!user) return <h2>No user data</h2>;

    return (
      <div>
        <h2>Dashboard</h2>

        <p>Username: {user.username}</p>
        <p>Gender: {user.gender}</p>
        <p>Country: {user.country}</p>
        <p>Hobbies: {user.hobbies?.join(", ")}</p>

        <button onClick={() => this.props.navigate("/editprofile")}>
          Edit Profile
        </button>

        <button onClick={this.handleLogout}>
          Logout
        </button>
      </div>
    );
  }
}
export default withRouter(Dashboard);