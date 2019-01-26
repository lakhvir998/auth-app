import React from "react"
import { navigate, Link } from "gatsby"

import { handleLogin, isLoggedIn } from "../../services/auth"

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    error: false
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const {username, password} = this.state
    if(!username || !password) {
      this.setState({
        error: true
      })
    } else
      this.setState({
        error: false
      })
      handleLogin(this.state)
  }

  render() {
    // if (isLoggedIn()) {
    //   navigate(`/app/profile`)
    // }
    const {error} = this.state;
    return (
      <div className="container qor-auth">
        <div className="qor-auth-box">
          { error &&
            <ul class="errors">
              <li>Incorrect Username/Password.</li>
            </ul>
          }
          <h2>Log-in to your account</h2>
          
          <form
              method="post"
              onSubmit={event => {
                this.handleSubmit(event)
                //navigate(`/app/profile`)
              }}
          >
            <ul class="auth-form">
              <li>
                <label for="username">Email</label>
                <input type="email" name="username" placeholder="Email eg: john@example.com" onChange={this.handleUpdate}/>
              </li>
              <li>
                <label for="password">Password</label>
                <Link class="forgot-password" to="/forgot-password">Forgot Password?</Link>
                <input type="password" class="form-control" id="password" name="password" placeholder="Enter your password" onChange={this.handleUpdate}/>
              </li>
              <li>
                <button type="submit" class="button button__primary">Sign in</button>
              </li>
              <li>
                <Link to="/registration" class="button button__primary">Sign Up</Link>
              </li>
            </ul>
            </form>
     
        </div>
      </div>
    )
  }
}

export default Login