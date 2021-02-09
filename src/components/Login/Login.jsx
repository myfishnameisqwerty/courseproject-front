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
            <div className="pt-5 mb-5">
              <label for="exampleInputEmail1" className="form-label">
               <b>Email address</b> 
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
               <b>Password</b> 
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Remember password
              </label>
            </div>
            <button id="login" type="submit" className="btn btn-danger">
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
