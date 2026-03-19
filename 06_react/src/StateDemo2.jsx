import React, { Component } from 'react'

export default class StateDemo2 extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userinfo: { 
        name: "Abhishek", 
        position: "Software Developer", 
        company: "Sarjen"
      }
    }
  }

  updateInfo = () => {
    this.setState({
      userinfo: {
        ...this.state.userinfo, 
        name: "Abhishek Varma" ,
        company : "Sarjen System" 
      }
    })
  }

  render() {
    return (
      <>
        <p>My name is {this.state.userinfo.name}</p>
        <p>My position is {this.state.userinfo.position}</p>
        <p>I work in {this.state.userinfo.company}</p>

        <br />
        
        <button onClick={this.updateInfo}>
          Update Info
        </button>
      </>
    )
  }
}