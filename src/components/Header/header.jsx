import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import PendingOrders from "../pendingOrders/pendingOrders";
import { auth, db } from "../../firebase";
import firebaseWrapper from "../../auth";
import { updateUserNavbar } from "../../actions/actions";
import { connect } from "react-redux";
import { Dropdown } from "react-bootstrap";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberInBasket: 0,
      orders: null,
    };
    this.addcallSearchRef = this.addcallSearchRef.bind(this);
    this.callSearchRef = React.createRef();
  }

  componentDidMount() {
    this.loadOrdersInProcess();
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        let data;

        await db.ref().on("value", async (snapshot) => {
          console.log("snapshot", snapshot);
          data = await snapshot.val().users;

          data = await data[user.uid];

          const name = (await data.userName) || data.email;
          const role = await data.role;
          // console.log("data2: ", name);
          this.props.updateUserNavbar(name, role);
          console.log("up: ", this.props.userName, this.props.userRole);
        });
      }
    });
  }
  loadOrdersInProcess() {
    const orders = JSON.parse(localStorage.getItem("homefood-ordersInProcess"));
    const numberInBasket = orders ? orders.length : 0;
    this.setState({ numberInBasket, orders });
  }

  render() {
    console.log("rerander");
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
                <li className="nav-item active">
                  <NavLink
                    className="nav-link"
                    to="/blog"
                    exact
                    style={whiteText}
                  >
                    Our blog
                  </NavLink>
                </li>
                <li className="nav-item active">
                  <NavLink to="/catalog" className="nav-link" style={whiteText}>
                    View dishes
                  </NavLink>
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
          {this.props.userName ? (
            <div className="loginOptions">
              <span className="text-white">{`Hello, ${this.props.userName}`}</span>
              <Dropdown id="profile">
                <Dropdown.Toggle id="dropdown-basic">
                  <i className="p-1 text-white fas fa-user-circle fa-2x" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <NavLink className="text-dark" to="/account/profile">
                      Profile
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink className="text-dark" to="/dashboard">
                      Dashboard
                    </NavLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <div className="dropdown">
                <NavLink to="/shopcart">
                  <div className="dropdown-btn shopcart">
                    <i
                      className="ml-2 p-1 fas fa-shopping-cart fa-2x"
                      style={whiteText}
                    ></i>
                    <span
                      className="pr-3 "
                      style={{ color: "white", fontSize: "23px" }}
                    >{`${this.state.numberInBasket}`}</span>
                  </div>
                  <div className="dropdown-content">
                    {this.showShortOrderInfo()}
                  </div>
                </NavLink>
              </div>
              <button
                className="text-danger btn btn-light my-2 my-sm-0 orangeColor"
                onClick={() => {
                  firebaseWrapper.logout();
                  window.location.reload();
                }}
              >
                Log out
              </button>
            </div>
          ) : (
            <div className="loginOptions">
              <NavLink to="/login">
                <button className="text-danger btn btn-light my-2 my-sm-0 orangeColor">
                  Log In
                </button>
              </NavLink>
              <NavLink to="/signUp">
                <button className="castomButtonHover ml-2 btn btn-outline-light my-2 my-sm-0">
                  Sign Up
                </button>
              </NavLink>
              <div className="dropdown">
                <NavLink to="/shopcart">
                  <div className="dropdown-btn shopcart">
                    <i
                      className="ml-2 fas fa-shopping-cart fa-2x"
                      style={whiteText}
                    ></i>
                    <span
                      style={{ color: "white", fontSize: "23px" }}
                    >{`${this.state.numberInBasket}`}</span>
                  </div>
                  <div className="dropdown-content">
                    {this.showShortOrderInfo()}
                  </div>
                </NavLink>
              </div>
            </div>
          )}
        </nav>
      </header>
    );
  }
  showShortOrderInfo() {
    const orders = this.state.orders;
    if (orders)
      return orders.map((order) => {
        return (
          <PendingOrders
            key={Math.random()}
            orderInfo={order.orderInfo}
            fullItemInfo={order.fullItemInfo}
          />
        );
      });
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

const mapStateToProps = (state) => ({
  userName: state.global.userName,
  userRole: state.global.userRole,
});

export default connect(mapStateToProps, { updateUserNavbar })(Header);
