import React, { Component } from 'react'

export default class Demo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 'signup',
      form: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      error: '',
      user: null
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      form: { ...this.state.form, [name]: value },
      error: ''
    })
  }

  // SIGNUP
  handleSignup = () => {
    const { username, password, confirmPassword } = this.state.form

    if (!username || !password || !confirmPassword) {
      this.setState({ error: 'All fields required' })
      return
    }

    if (password !== confirmPassword) {
      this.setState({ error: 'Passwords do not match' })
      return
    }

    const user = { username, password }
    localStorage.setItem('user', JSON.stringify(user))

    alert('Signup Successful')
    this.setState({ page: 'login', form: {}, error: '' })
  }

  // LOGIN
  handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem('user'))
    const { username, password } = this.state.form

    if (!savedUser) {
      this.setState({ error: 'No user found. Signup first' })
      return
    }

    if (
      username === savedUser.username &&
      password === savedUser.password
    ) {
      this.setState({ page: 'dashboard', user: savedUser, error: '' })
    } else {
      this.setState({ error: 'Invalid credentials' })
    }
  }

  // LOGOUT
  handleLogout = () => {
    this.setState({ page: 'login', user: null })
  }

  // CHANGE PASSWORD
  handleChangePassword = () => {
    const { password, confirmPassword } = this.state.form

    if (!password || !confirmPassword) {
      this.setState({ error: 'Fill all fields' })
      return
    }

    if (password !== confirmPassword) {
      this.setState({ error: 'Passwords do not match' })
      return
    }

    const savedUser = JSON.parse(localStorage.getItem('user'))
    savedUser.password = password

    localStorage.setItem('user', JSON.stringify(savedUser))

    alert('Password Updated')
    this.setState({ page: 'login', form: {}, error: '' })
  }

  render() {
    const { page, form, error, user } = this.state

    // SIGNUP PAGE
    if (page === 'signup') {
      return (
        <div>
          <h2>Signup</h2>
          <input name="username" placeholder="Username" onChange={this.handleChange} />
          <input name="password" type="password" placeholder="Password" onChange={this.handleChange} />
          <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={this.handleChange} />

          <button onClick={this.handleSignup}>Signup</button>
          <p style={{ color: 'red' }}>{error}</p>

          <p onClick={() => this.setState({ page: 'login' })}>
            Go to Login
          </p>
        </div>
      )
    }

    // LOGIN PAGE
    if (page === 'login') {
      return (
        <div>
          <h2>Login</h2>
          <input name="username" placeholder="Username" onChange={this.handleChange} />
          <input name="password" type="password" placeholder="Password" onChange={this.handleChange} />

          <button onClick={this.handleLogin}>Login</button>

          <p onClick={() => this.setState({ page: 'forgot' })}>
            Forgot Password?
          </p>

          <p style={{ color: 'red' }}>{error}</p>
        </div>
      )
    }

    // FORGOT PASSWORD
    if (page === 'forgot') {
      return (
        <div>
          <h2>Change Password</h2>
          <input name="password" type="password" placeholder="New Password" onChange={this.handleChange} />
          <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={this.handleChange} />

          <button onClick={this.handleChangePassword}>Update</button>
          <p style={{ color: 'red' }}>{error}</p>
        </div>
      )
    }

    // DASHBOARD
    if (page === 'dashboard') {
      return (
        <div>
          <h2>Dashboard</h2>
          <p>Username: {user.username}</p>

          <button onClick={() => this.setState({ page: 'edit', form: user })}>
            Edit
          </button>

          <button onClick={this.handleLogout}>Logout</button>
        </div>
      )
    }

    // EDIT PROFILE
    if (page === 'edit') {
      return (
        <div>
          <h2>Edit Profile</h2>
          <input
            name="username"
            value={form.username || ''}
            onChange={this.handleChange}
          />

          <button
            onClick={() => {
              localStorage.setItem('user', JSON.stringify(form))
              this.setState({ page: 'dashboard', user: form })
            }}
          >
            Save
          </button>
        </div>
      )
    }

    return null
  }
}