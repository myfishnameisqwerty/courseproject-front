import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import PendingOrders from "../pendingOrders/pendingOrders";
import {auth} from "../../firebase"
import firebaseWrapper from "../../auth"
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberInBasket: 0,
      orders: null,
      user: 'guest'
    };
    this.addcallSearchRef = this.addcallSearchRef.bind(this);
    this.callSearchRef = React.createRef();
  }
  componentDidMount() {
    this.loadOrdersInProcess();
    this.loadUser();
  }
  loadOrdersInProcess() {
    const orders = JSON.parse(localStorage.getItem("homefood-ordersInProcess"));
    const numberInBasket = orders ? orders.length : 0;
    this.setState({ numberInBasket, orders });
  }
  loadUser(){
    if (auth.currentUser){
      const user = auth.currentUser.displayName?auth.currentUser.displayName:auth.currentUser.email
      console.log("auth.currentUser.displayName", auth.currentUser.displayName);
      this.setState({user})
    }
  }

  render() {
    console.log(`+++++++++++++++++++++${auth.currentUser}++++++++++++++++++++++`);
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
                  <NavLink className="nav-link" to="/blog" exact style={whiteText}>
                    Our blog
                  </NavLink>
                </li>
                <li className="nav-item active">
                <NavLink
                      to="/catalog"
                      className="nav-link"
                      style={whiteText}
                    >
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
          {auth.currentUser?
          <div className="loginOptions">
          <NavLink to="/account/profile">
          <button className="castomButtonHover ml-2 btn btn-outline-light my-2 my-sm-0">
          {this.state.user}
          </button>
          </NavLink>
          
            <button className="text-danger btn btn-light my-2 my-sm-0 orangeColor"
            onClick={()=>{firebaseWrapper.logout()
            window.location.reload()}}>
              Log out
            </button>
          
          
        </div>
          :<div className="loginOptions">
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
          </div>}
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
        </nav>
      </header>
    );
  }
  showShortOrderInfo(){
    const orders = this.state.orders
    if (orders)
    return (
      orders.map((order) => {
        return (
          <PendingOrders
          key={Math.random()}
            orderInfo={order.orderInfo}
            fullItemInfo={order.fullItemInfo}
          />
        );
      })
    )
    
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
