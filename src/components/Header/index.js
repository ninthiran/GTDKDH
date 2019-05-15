import React, { Component } from "react";
import logo from "./logo.png";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="callout primary" id="Header">
        <div className="row column">
          <img src={logo} alt="logo" />
          {sessionStorage.getItem("userData") ? (
            <span className="sessionName">
              {sessionStorage.getItem("UserName")}
            </span>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Header;
