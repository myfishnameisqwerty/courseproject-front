import React, { Component } from "react";
import './Login.css'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={desighn}>
        
          <form >
            <div class="pt-5 mb-5">
              <label for="exampleInputEmail1" class="form-label">
               <b>Email address</b> 
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
               <b>Password</b> 
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Remember password
              </label>
            </div>
            <button id="login" type="submit" class="btn btn-danger">
              Login
            </button>
          </form>
        
      </div>
    );
  }
}
const desighn = {

  margin: "auto",
  width: "350px",
  // minHeight: "700px",
};

export default Login;
