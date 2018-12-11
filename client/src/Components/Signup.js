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
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event, name) {
    const newState = { ...this.state };
    console.log(newState);
    newState[name] = event.target.value;

    this.setState(newState);
  }

  handleSignup() {

  }

  render() {
    // TODO: Update state when user changes the input forms

    // TODO: When a user clicks submit, send a post request
    // to our server with the user data
    return (
      <div className="main-form">
        <h2>Signup</h2>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name..."
          onChange={(event) => this.handleInputChange(event, 'name')} />
        <input type="text"
          name="email"
          placeholder="Enter Your Email Address..."
          onChange={(event) => this.handleInputChange(event, 'email')} />
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password..."
          onChange={(event) => this.handleInputChange(event, 'password')} />
        <button onClick={this.handleSignup}>Signup</button>
      </div>
    );
  }
}

export default Signup;
