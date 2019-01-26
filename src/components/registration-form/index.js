import React from "react"
import { navigate, Link } from "gatsby"



class RegistrationForm extends React.Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    error: false
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const {username, password, confirmPassword} = this.state
    if(!username || !password || !confirmPassword) {
      this.setState({
        error: true
      })
    } else {
      this.setState({
        error: false
      })
      navigate(`/app/login`)
    }
   
  }

  render() {
    // if (isLoggedIn()) {
    //   navigate(`/app/profile`)
    // }
    const {error} = this.state
 
    return (
      <>
        { error &&
            <ul class="errors">
              <li>Fill reqired fields.</li>
            </ul>
        }
        <h2>Creat a new account</h2>
        <form
              method="post"
              onSubmit={event => {
              this.handleSubmit(event)
            
              }}
            >
          <ul class="auth-form">
            <li>
              <label for="username">Email</label>
              <input type="email" name="username" placeholder="Email eg: john@example.com" onChange={this.handleUpdate}/>
            </li>
            
       

            <li>
              <label for="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.handleUpdate}/>
            </li>

            <li>
              <label for="confirmPassword">Confirm Password</label>
              <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={this.handleUpdate}/>
            </li>
            <li>
              <button type="submit" class="button button__primary">Register</button>
            </li>
            <li>
              <Link to="/" class="button button__primary">Already have an account? LogIn</Link>
            </li>
          </ul>
        </form>
      </>
          
    )
  }
}

export default RegistrationForm