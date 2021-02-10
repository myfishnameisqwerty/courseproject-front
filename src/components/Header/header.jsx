import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberInBasket: 0,
    };
    this.addcallSearchRef = this.addcallSearchRef.bind(this);
    this.callSearchRef = React.createRef();
  }
  componentDidMount() {
    const numberInBasket = localStorage.getItem("homefood-ordersInProcess")
      ? JSON.parse(localStorage.getItem("homefood-ordersInProcess")).length
      : 0;
    this.setState({ numberInBasket });
  }
  render() {
    return (
      <header id="head">
        {/* <Router> */}

        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          style={gradientTopButtom}
        >
          <h2 id="logo" style={whiteText}>
            Homemade food
          </h2>
          <div className="container-sm mx-auto">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/" exact style={whiteText}>
                    Home
                  </NavLink>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={whiteText}
                  >
                    View dishes
                  </a>
                  <div
                    className="dropdown-menu "
                    aria-labelledby="navbarDropdown"
                    style={gradientButtomTop}
                  >
                    <NavLink
                      to="/catalog"
                      className="dropdown-item castomDropMenuHover"
                      style={whiteText}
                    >
                      For home
                    </NavLink>

                    <a
                      className="dropdown-item castomDropMenuHover"
                      href="#"
                      style={whiteText}
                    >
                      More then 10 people
                    </a>
                  </div>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search your next meal"
                  aria-label="Search"
                  ref={this.callSearchRef}
                  onChange={this.addcallSearchRef}
                ></input>
                <NavLink
                  to={`/catalog?q="${this.state.request}"`}
                  style={{ color: "red" }}
                >
                  <button
                    className="castomButtonHover btn btn-outline-light my-2 my-sm-0"
                    type="submit"
                  >
                    GO!
                  </button>
                </NavLink>
              </form>
            </div>
          </div>
          <div className="loginOptions">
            <NavLink to="/login">
              <button className="text-danger btn btn-light my-2 my-sm-0 orangeColor">
                Log In
              </button>
            </NavLink>
            <button className="castomButtonHover ml-2 btn btn-outline-light my-2 my-sm-0">
              Sign Up
            </button>
          </div>
          <NavLink to="/shopcart">
            <div className="shopcart">
              <i
                className="ml-2 fas fa-shopping-cart fa-2x"
                style={whiteText}
              ></i>
              <span
                style={{ color: "white", fontSize: "23px" }}
              >{`${this.state.numberInBasket}`}</span>
            </div>
          </NavLink>
        </nav>
      </header>
    );
  }
  addcallSearchRef() {
    this.setState({ request: this.callSearchRef.current.value });
  }
}

const whiteText = {
  color: "white",
};
const gradientTopButtom = {
  background: "linear-gradient(rgb(172, 18, 18) , rgb(255, 136, 0))",
};
const gradientButtomTop = {
  background: "linear-gradient(rgb(255, 136, 0), rgb(172, 18, 18))",
};

export default Header;
