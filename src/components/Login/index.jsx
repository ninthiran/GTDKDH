import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import api, { PostData } from "../../services/ClientDataServices";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      userid: "",
      password: "",
      UserID: "",
      redirectToReferrer: false,
      errorUserIDMessage: "",
      errorPaswordMessage: ""
    };
  }

  login = () => {
    const userid = this.state.userid;
    this.state.userid == ""
      ? this.setState({ uerror: true })
      : this.setState({ uerror: false });

    const password = this.state.password;
    this.state.password == ""
      ? this.setState({ perror: true })
      : this.setState({ perror: false });
    console.log(userid);
    if (userid && password) {
      PostData("login", this.state).then(result => {
        console.log(result.data);
        let responseJson = result.data;

        if (responseJson.UserID) {
          sessionStorage.setItem("userData", responseJson.UserID);
          sessionStorage.setItem("UserName", responseJson.UserName);
          this.setState({ redirectToReferrer: true });
        }
      });
    } else {
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // if (this.state.redirectToReferrer) {
    //   return <Redirect to={"/home"} />;
    // }

    if (sessionStorage.getItem("userData")) {
      return <Redirect to={"/UserFeed"} />;
    }

    return (
      <div className="row" id="Body">
        <div className="medium-5 login">
          <div className="box-form">
            <div className="center-box">
              <div className="box-login-tab" />
              <div className="box-login-title">
                <div className="i i-login" />
                <h4 style={{ textAlign: "center" }}>LOGIN</h4>
              </div>
              <div className="box-login">
                <div className="fieldset-body" id="login_form">
                  <p className="field">
                    <label>User ID</label>
                    <input
                      type="text"
                      name="userid"
                      placeholder="GDK***"
                      onChange={this.onChange}
                    />
                    {this.state.uerror ? (
                      <span className="error">
                        Enter valid User ID example: GDK001
                      </span>
                    ) : null}
                  </p>
                  <p className="field">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="******"
                      onChange={this.onChange}
                    />
                    {this.state.perror ? (
                      <span className="error">Enter valid Password</span>
                    ) : null}
                  </p>

                  <label className="checkbox">
                    <input
                      type="checkbox"
                      value="TRUE"
                      title="Keep me Signed in"
                    />
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
          </div>
          {/* <a href="/signup">Registration</a> */}
        </div>
      </div>
    );
  }
}

export default Login;
