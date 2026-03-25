import React, { Component } from 'react'

export default class Task14 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      loading: true,
      selectedUser: null
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        this.setState({ users: data, loading: false });
      });
  }

  openModal = (user) => {
    this.setState({ selectedUser: user });
  }

  closeModal = () => {
    this.setState({ selectedUser: null });
  }

  render() {
    const { users, loading, selectedUser } = this.state;

    return (
      <>
        <h2>Task 14 : User Cards</h2>

        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {users.map(user => (
              <div
                key={user.id}
                onClick={() => this.openModal(user)}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "15px",
                  width: "250px",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
                }}
              >
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.address.city}</p>
              </div>
            ))}
          </div>
        )}


        {selectedUser && (
          <div style={overlayStyle}>
            <div style={modalStyle}>
              <h2>{selectedUser.name}</h2>

              <p><b>Username:</b> {selectedUser.username}</p>
              <p><b>Email:</b> {selectedUser.email}</p>
              <p><b>Phone:</b> {selectedUser.phone}</p>
              <p><b>Website:</b> {selectedUser.website}</p>

              <h4>Address</h4>
              <p>{selectedUser.address.street}, {selectedUser.address.suite}</p>
              <p>{selectedUser.address.city} - {selectedUser.address.zipcode}</p>

              <h4>Geo</h4>
              <p>Lat: {selectedUser.address.geo.lat}</p>
              <p>Lng: {selectedUser.address.geo.lng}</p>

              <h4>Company</h4>
              <p>{selectedUser.company.name}</p>
              <p>{selectedUser.company.catchPhrase}</p>
              <p>{selectedUser.company.bs}</p>

              <br />

              <button onClick={this.closeModal}>Close</button>
            </div>
          </div>
        )}
      </>
    )
  }
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const modalStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  width: "400px",
  maxHeight: "80vh",
  overflowY: "auto"
};