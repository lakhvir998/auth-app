import React from "react"
import { navigate } from "gatsby"
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
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
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-6 col-sm-12">
            <h1>Log in</h1>
            { error &&
              <Alert color="danger">
                Incorrect Username/Password.
              </Alert>
            }
            <Form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            //navigate(`/app/profile`)
          }}
        >
          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="text" name="username" placeholder="Username eg: john" onChange={this.handleUpdate}/>
          </FormGroup>

          <FormGroup>
            <Label for="username">Password</Label>
            <Input type="password" name="password" placeholder="password" onChange={this.handleUpdate}/>
          </FormGroup>
         
          <Button type="submit" color="primary">Submit</Button>
        </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login