import React, { Component } from 'react'
import { withRouter } from './withRouter'

class EditProfile extends Component {
  constructor(props) {
    super(props)
    
    const savedUser = JSON.parse(localStorage.getItem("user")) || {}

    this.state = {
      form: {
        username: savedUser.username || '',
        gender: savedUser.gender || '',
        hobbies: savedUser.hobbies || [],
        country: savedUser.country || '',
        bio: savedUser.bio || ''
      },
      errors: {}
    }
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      let hobbies = [...this.state.form.hobbies]

      if (checked) {
        hobbies.push(value)
      } else {
        hobbies = hobbies.filter(h => h !== value)
      }

      this.setState({
        form: { ...this.state.form, hobbies }
      })
    } else {
      this.setState({
        form: { ...this.state.form, [name]: value }
      })
    }
  }

  validate = () => {
    const { username, gender, country } = this.state.form
    let errors = {}
    let isValid = true

    if (!username) {
      errors.username = 'Enter Username'
      isValid = false
    }

    if (!gender) {
      errors.gender = 'Select Gender'
      isValid = false
    }

    if (!country) {
      errors.country = 'Select Country'
      isValid = false
    }

    this.setState({ errors })
    return isValid
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (!this.validate()) return

    // Keep the password from previous saved user if any
    const savedUser = JSON.parse(localStorage.getItem("user")) || {}
    const updatedUser = { ...savedUser, ...this.state.form }

    localStorage.setItem("user", JSON.stringify(updatedUser))

    alert("Profile Updated Successfully")
    this.props.navigate("/dashboard")
  }

  render() {
    const { form, errors } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Edit Profile</h1>

        <label>Username:</label>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={form.username}
          onChange={this.handleChange}
        />
        <p style={{ color: 'red' }}>{errors.username}</p>

        <br />
        Gender:
        <input type="radio" name="gender" value="Male" checked={form.gender === "Male"} onChange={this.handleChange} /> Male
        <input type="radio" name="gender" value="Female" checked={form.gender === "Female"} onChange={this.handleChange} /> Female
        <p style={{ color: 'red' }}>{errors.gender}</p>

        <br />
        Hobbies:
        <input type="checkbox" value="Reading" checked={form.hobbies.includes("Reading")} onChange={this.handleChange} /> Reading
        <input type="checkbox" value="Gaming" checked={form.hobbies.includes("Gaming")} onChange={this.handleChange} /> Gaming
        <input type="checkbox" value="Sports" checked={form.hobbies.includes("Sports")} onChange={this.handleChange} /> Sports

        <br />
        <br />
        <select name="country" value={form.country} onChange={this.handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>
        <p style={{ color: 'red' }}>{errors.country}</p>

        <br />
        <textarea
          name="bio"
          placeholder="Enter Bio"
          value={form.bio}
          onChange={this.handleChange}
        />

        <br /><br />
        <button type="submit">Save Changes</button>
        <button type="button" onClick={() => this.props.navigate("/dashboard")}>Cancel</button>
      </form>
    )
  }
}

export default withRouter(EditProfile)
