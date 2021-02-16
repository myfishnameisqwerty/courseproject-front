import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class OrderSummary extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Order Summary</h3>
        <div>
          <span>{`Subtotal: ${this.props.totalSum}`}</span>
        </div>
        <div>
          <span>{`Shipping: ${this.props.totalShip}`}</span>
        </div>
        <div>
          <span>
            <b>{`Total ${this.props.totalSum + this.props.totalShip}₪`}</b>
          </span>
        </div>
        <button
          type="button"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          className="btn btn-danger mt-5"
          style={{ backgroundColor: "rgb(226, 80, 31)", width: "220px" }}
        >
          Buy
        </button>
        {this.createModal()}
      </div>
    );
  }
  createModal() {
    return (
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        style={{widows: '200px'}}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title" id="exampleModalLongTitle">
              Log in
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center">
                <input type="email" name="email" id="email" className="mb-3" placeholder="Enter you email"/>
                <input type="password" name="password" id="password" className="ml-3" placeholder="password"/><br/>
                <button
                type="button"
               
                data-dismiss="modal"
                className="btn btn-danger" style={{ backgroundColor: "rgb(226, 80, 31)" }}
              >
                Log in
              </button>
            </div>
            <div className="modal-footer" >
              
                
              <button type="button" className="btn btn-second" data-dismiss="modal" onClick={
                () => window.location.href = '/payment'
              }>
              Continue as guest
              </button>
              

              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const MenuColor = {
  color: "rgb(226, 80, 31)",
  fontWeight: "bold",
};
export default OrderSummary;
