import React from "react"
import { navigate } from "gatsby"
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';


class SignUp extends React.Component {
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
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-6">
            <h1>Sign Up</h1>
            { error &&
              <Alert color="danger">
                Fill required fields.
              </Alert>
            }
            <Form
              method="post"
              onSubmit={event => {
              this.handleSubmit(event)
            
              }}
            >
          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="text" name="username" placeholder="Username eg: john" onChange={this.handleUpdate}/>
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" placeholder="password" onChange={this.handleUpdate}/>
          </FormGroup>

          <FormGroup>
            <Label for="confirmPassword">Confirm Password</Label>
            <Input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={this.handleUpdate}/>
          </FormGroup>
         
          <Button type="submit">Submit</Button>
        </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp