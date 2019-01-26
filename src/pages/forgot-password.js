import React from "react";

class ForgotPassword extends React.Component {
    state = {
        emailSent: false
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            emailSent: true
          })
       
    }

    render() {
        return (
            <div class="container qor-auth qor-auth-light">
  <div class="qor-auth-box">

    
    { this.state.emailSent && 
        <ul>
           <li>Instruction has been sent on your email.</li>
       </ul>
    }
     

    <h2>Forgot Password?</h2>
    <h3>Enter your email address & we'll send you a link to reset your password.</h3>
    <form 
        method="POST" 
        onSubmit={event => {
              this.handleSubmit(event)
            
    }}>
        <ul class="auth-form">
            <li>
            <label for="email">Email</label>
            <input name="email" id="email" type="email" placeholder="Email e.g john@example.com" />
            </li>
            <li>
            <button type="submit" class="button button__primary">Continue</button>
            </li>
        </ul>
    </form>
  </div>
</div>
        );
    }
}

export default ForgotPassword;