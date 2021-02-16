import React, { Component } from "react";
import PendingOrders from "../pendingOrders/pendingOrders";
import "./shopCart.css";
import OrderSummary from "../orderSummary/orderSummary";
class ShopCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      totalSum: 0,
      totalShip: 0,
      selectAll: true,
    };
    this.removeOrder = this.removeOrder.bind(this);
    this.updateTotals = this.updateTotals.bind(this);
    this.updateSelectedOrders = this.updateSelectedOrders.bind(this);
  }
  componentDidMount() {
    localStorage.setItem("homefood-selectedOrdersIndexes", JSON.stringify([]))
    localStorage.setItem("homefood-selectedTotal", 0)
    const orders = JSON.parse(localStorage.getItem("homefood-ordersInProcess"));
    if (orders) this.setState({ orders });
  }
  updateSelectedOrders(i) {
    let selectedOrders = localStorage.getItem("homefood-selectedOrdersIndexes")?JSON.parse(localStorage.getItem("homefood-selectedOrdersIndexes")):[]
    selectedOrders&&selectedOrders.indexOf(i)!==-1?
    selectedOrders = selectedOrders.filter((el) => el !== i):
    selectedOrders.push(i)
    localStorage.setItem("homefood-selectedOrdersIndexes", JSON.stringify(selectedOrders))
  }
  updateTotals(totalSum, totalShip) {
    totalSum += this.state.totalSum;
    totalShip += this.state.totalShip;
    localStorage.setItem("homefood-selectedTotal", totalSum)
    this.setState({ totalSum, totalShip });
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
      <div className="shopCart row mt-5">
        <div
          className="float-left col col-lg-9"
          style={{ backgroundColor: "white" }}
        >
          <div className="ml-2">
            <input
              type="checkbox"
              name="selectAll"
              id="selectAll"
              checked={this.state.selectAll}
              onChange={(e) => {
                this.setState({ selectAll: e.target.checked });
              }}
            />
            <label className="ml-2" htmlFor="selectAll">
              Select all
            </label>
          </div>
          
          {orders.map((order, i) => {
            return (
              <PendingOrders
                orderInfo={order.orderInfo}
                fullItemInfo={order.fullItemInfo}
                removeOrder={this.removeOrder}
                updateTotals={this.updateTotals}
                selectAll={this.state.selectAll}
                index={i}
                updateSelectedOrders={this.updateSelectedOrders}
              />
            );
          })}
        </div>
        <div
          className="float-right col-md col-lg-3"
          style={{ backgroundColor: "white" }}
        >
          <OrderSummary
            totalSum={this.state.totalSum}
            totalShip={this.state.totalShip}
            orders={this.state.orders}
          />
        </div>
      </div>
    );
  }
}

export default ShopCart;
