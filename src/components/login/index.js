import React from "react"
import { navigate } from "gatsby"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { handleLogin, isLoggedIn } from "../../services/auth"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }

    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-6">
            <h1>Log in</h1>
            <Form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            navigate(`/app/profile`)
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
         
          <Button type="submit">Submit</Button>
        </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login