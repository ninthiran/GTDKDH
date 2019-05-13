import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { PostData } from "../../services/PostData";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      redirectToReferrer: false
    };
  }

  login = () => {
    if (this.state.username && this.state.password) {
      PostData("login", this.state).then(result => {
        let responseJson = result;
        if (responseJson.userData) {
          sessionStorage.setItem("userData", JSON.stringify(responseJson));
          this.setState({ redirectToReferrer: true });
        }
      });
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to={"/home"} />;
    }

    if (sessionStorage.getItem("userData")) {
      return <Redirect to={"/home"} />;
    }

    return (
      <div className="row" id="Body">
        <div className="medium-5 login">
          <div class="box-form">
            <div class="box-login-tab" />
            <div class="box-login-title">
              <div class="i i-login" />
              <h4 style={{ textAlign: "center" }}>LOGIN</h4>
            </div>
            <div class="box-login">
              <div class="fieldset-body" id="login_form">
                <p class="field">
                  <label for="user">Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={this.onChange}
                  />
                  <span id="valida" class="i i-warning" />
                </p>
                <p class="field">
                  <label for="pass">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.onChange}
                  />
                  <span id="valida" class="i i-close" />
                </p>

                <label class="checkbox">
                  <input
                    type="checkbox"
                    value="TRUE"
                    title="Keep me Signed in"
                  />{" "}
                  Keep me Signed in
                </label>

                <input
                  type="submit"
                  className="button"
                  value="Login"
                  onClick={this.login}
                />
              </div>
            </div>
          </div>
          {/* <a href="/signup">Registration</a> */}
        </div>
      </div>
    );
  }
}

export default Login;
