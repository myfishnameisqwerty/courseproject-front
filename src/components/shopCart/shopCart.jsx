import React, { Component } from "react";
import PendingOrders from "../pendingOrders/pendingOrders";
import "./shopCart.css";
import OrderSummary from "../orderSummary/orderSummary"
class ShopCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      totalSum: 0,
      totalShip: 0,
    };
    this.removeOrder = this.removeOrder.bind(this);
    this.updateTotals = this.updateTotals.bind(this);
  }
  componentDidMount() {
    const orders = JSON.parse(localStorage.getItem("homefood-ordersInProcess"));
    if (orders) this.setState({ orders });
  }
  updateTotals(totalSum, totalShip) {
    totalSum += this.state.totalSum;
    totalShip += this.state.totalShip;
    this.setState({ totalSum, totalShip});
  }
  removeOrder(orderId) {
    let orders = [...this.state.orders];
    orders = orders.filter((order) => order.orderInfo.orderId !== orderId);
    localStorage.setItem("homefood-ordersInProcess", JSON.stringify(orders));
    this.setState({ orders });
    window.location.reload();
  }
  render() {
    const orders = this.state.orders;
    return (
      <div className="row mt-5">
        <div className="float-left col col-lg-9" style={{backgroundColor: 'white'}}>
          {orders.map((order) => {
            return (
              <PendingOrders
                orderInfo={order.orderInfo}
                fullItemInfo={order.fullItemInfo}
                removeOrder={this.removeOrder}
                updateTotals={this.updateTotals}
              />
            );
          })}
        </div>
        <div className="float-right col-md col-lg-3" style={{backgroundColor: 'white'}}>
            <OrderSummary totalSum={this.state.totalSum} totalShip={this.state.totalShip} />
            </div>
      </div>
    );
  }
}

export default ShopCart;
