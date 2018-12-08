import React, { Component } from "react";
import $ from "jquery";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  render() {
    // TODO: Update state when user changes the input forms

    // TODO: When a user clicks submit, send a post request
    // to our server with the user data
    return (
      <div className="main-form">
        <h2>Signup</h2>
        <input type="text" placeholder="Enter Your Name..." />
        <input type="text" placeholder="Enter Your Email Address..." />
        <input type="password" placeholder="Enter Your Password..." />
        <button onClick={this.handleSignup}>Signup</button>
      </div>
    );
  }
}

export default Signup;
