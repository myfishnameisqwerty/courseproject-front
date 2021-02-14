import React, { Component } from 'react';
class OrderSummary extends Component {
    constructor(props) {
        super(props);
       
    }
    render() { 
        return ( 
            <div>
                <h3>Order Summary</h3>
                <div><span>{`Subtotal: ${this.props.totalSum}`}</span></div>
                <div><span>{`Shipping: ${this.props.totalShip}`}</span></div>
                <div><span><b>{`Total ${this.props.totalSum+this.props.totalShip}₪`}</b></span></div>
                <button type="button" className="btn btn-danger mt-5" style={{backgroundColor: "rgb(226, 80, 31)", width:"220px"}}>Buy</button>
            </div>
         );
    }
}
const MenuColor = {
    color: "rgb(226, 80, 31)",
    fontWeight: "bold",
  };
export default OrderSummary;