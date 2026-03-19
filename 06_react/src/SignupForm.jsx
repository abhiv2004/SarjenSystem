import React, { Component } from 'react'
import { withRouter } from './withRouter'

class SignupForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      form: {
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
        hobbies: [],
        country: '',
        bio: ''
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
    const { username, password, confirmPassword, gender, country } = this.state.form
    let errors = {}
    let isValid = true

    if (!username) {
      errors.username = 'Enter Username'
      isValid = false
    }

    if (!password) {
      errors.password = 'Enter Password'
      isValid = false
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Enter Confirm Password'
      isValid = false
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match'
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

    localStorage.setItem("user", JSON.stringify(this.state.form))

    alert("Signup Successful")

    this.props.navigate("/login")
}
  render() {
    const { form, errors } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Signup Form</h1>

        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={form.username}
          onChange={this.handleChange}
        />
        <p style={{ color: 'red' }}>{errors.username}</p>

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={this.handleChange}
        />
        <p style={{ color: 'red' }}>{errors.password}</p>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={this.handleChange}
        />
        <p style={{ color: 'red' }}>{errors.confirmPassword}</p>

        <br />
        Gender:
        <input type="radio" name="gender" value="Male" onChange={this.handleChange} /> Male
        <input type="radio" name="gender" value="Female" onChange={this.handleChange} /> Female
        <p style={{ color: 'red' }}>{errors.gender}</p>

        <br />
        Hobbies:
        <input type="checkbox" value="Reading" onChange={this.handleChange} /> Reading
        <input type="checkbox" value="Gaming" onChange={this.handleChange} /> Gaming
        <input type="checkbox" value="Sports" onChange={this.handleChange} /> Sports

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
        <button type="submit">Submit</button>
      </form>
    )
  }
}
export default withRouter(SignupForm)