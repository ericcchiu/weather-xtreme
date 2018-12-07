import React, { Component } from "react";
import $ from "jquery";

import Nav from "./Nav";
import Signup from "./Signup";
import Login from "./Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home"
    };

    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(text) {
    this.setState({ currentPage: text });
  }

  render() {
    const { currentPage } = this.state;
    return (
      <div>
        <Nav handleNavClick={this.handleNavClick} />
        <div className="layout">
          {currentPage === "signup" && <Signup />}
          {currentPage === "login" && <Login />}
        </div>
      </div>
    );
  }
}

export default App;
