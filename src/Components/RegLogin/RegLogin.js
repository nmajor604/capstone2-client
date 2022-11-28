import React, { Component } from "react";
import SellerHome from "../SellerHome/SellerHome.js";
import axios from "axios";

const baseUrl = "http://localhost:5050";
const signupUrl = `${baseUrl}/signup`;
const loginUrl = `${baseUrl}/login`;

class RegLogin extends Component {
  state = {
    isSignedUp: false,
    isLoggedIn: false,
    isLoginError: false,
    errorMessage: "",
  };

  handleSignup = (e) => {
    e.preventDefault();
    axios.post(signupUrl, {
      username: username.current.value,
      name: name.current.value,
      password: password.current.value
    })
    .then((res) => {
      this.setState({isSignedUp: true});
    })
    // Here send a POST request to signupUrl with username, name and password data
  };

  handleLogin = (e) => {
    e.preventDefault();
    axios.post(loginUrl, {
      username: username.current.value,
      password: password.current.value
    })
    .then((res) => {
      this.setState({
        isLoggedIn: true,
        isLoginError: false,
        errorMessage: " "
    });
      sessionStorage.setItem("Token", res.data.accessToken);
      setToken(res.data.accessToken);
      
    })
    .catch((error) => {
      if (error.response.status === 403){
        this.setState(
          {isLoginError: true,
          errorMessage: "Login failed"
        })
      }
    })
    
    // Here send a POST request to loginUrl with username and password data
  };

  renderSignUp() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSignup}>
          <div className="form-group">
            Username: <input type="text" name="username" />
          </div>
          <div className="form-group">
            Name: <input type="text" name="name" />
          </div>
          <div className="form-group">
            Password: <input type="password" name="password" />
          </div>
          <button type="submit" className="btn btn-primary">
            Signup
          </button>
        </form>
      </div>
    );
  }

  renderLogin = () => {
    const { isLoginError, errorMessage } = this.state;
    return (
      <div>
        <h1>Login</h1>
        {isLoginError && <label className="error">{errorMessage}</label>}
        <form onSubmit={this.handleLogin}>
          <div className="form-group">
            Username: <input type="text" name="username" />
          </div>
          <div className="form-group">
            Password: <input type="password" name="password" />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  };

  render() {
    const { isLoggedIn, isSignedUp } = this.state;

    // Handle the Signup/Login
    if (!isSignedUp) return this.renderSignUp();
    if (!isLoggedIn) return this.renderLogin();

    return (
      <div className="App">
        <SellerHome />
      </div>
    );
  }
}

export default RegLogin;