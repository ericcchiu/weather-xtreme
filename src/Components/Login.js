import React, { Component } from "react";
import $ from "jquery";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // TODO: Update state when user changes the input forms

    // TODO: When a user clicks submit, send a post request
    // to our server with the user data
    return (
      <div className="main-form">
        <h2>Login</h2>
        <input type="text" placeholder="Enter Your Name..." />
        <input type="text" placeholder="Enter Your Email Address..." />
        <input type="password" placeholder="Enter Your Password..." />
        <button>Login</button>
      </div>
    );
  }
}

export default Login;
