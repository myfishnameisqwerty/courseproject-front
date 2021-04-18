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
      selectAll: false,
      checkboxes: []  
     };
    this.removeOrder = this.removeOrder.bind(this);
    this.updateTotals = this.updateTotals.bind(this);
    this.updateSelectedOrders = this.updateSelectedOrders.bind(this);
    this.setIsChecked = this.setIsChecked.bind(this)
  }
  componentDidMount() {
    localStorage.setItem("homefood-selectedOrdersIndexes", JSON.stringify([]))
    localStorage.setItem("homefood-selectedTotal", 0)
    const orders = JSON.parse(localStorage.getItem("homefood-ordersInProcess"));
    if (orders){ 
      this.setState({ orders });
      this.setState({checkboxes: Array(orders.length||0).fill(false)  });

    }
  }
  // componentDidUpdate  (){
  //   this.state.checkboxes.reduce((prev,curr)=>prev+curr?this.orders.:0,0)
  // }
  updateSelectedOrders(i) {
    let selectedOrders = localStorage.getItem("homefood-selectedOrdersIndexes")?JSON.parse(localStorage.getItem("homefood-selectedOrdersIndexes")):[]
    selectedOrders&&selectedOrders.indexOf(i)!==-1?
    selectedOrders = selectedOrders.filter((el) => el !== i):
    selectedOrders.push(i)
    localStorage.setItem("homefood-selectedOrdersIndexes", JSON.stringify(selectedOrders))
  }
  updateTotals(totalSum) {
    let stateTotalSun= this.state.totalSum
    stateTotalSun+=totalSum
    localStorage.setItem("homefood-selectedTotal", stateTotalSun)
    this.setState({ totalSum:stateTotalSun  });
  }
  removeOrder(orderId) {
    let orders = [...this.state.orders];
    orders = orders.filter((order) => order.orderInfo.orderId !== orderId);
    localStorage.setItem("homefood-ordersInProcess", JSON.stringify(orders));
    this.setState({ orders });
    window.location.reload();
  }
  onSelectHandler(){
    this.setState({selectAll:this.selectAllRef.checked})
  }
  setIsChecked(index){
    const newCheckboxes = [...this.state.checkboxes]
    newCheckboxes[index]=!newCheckboxes[index]
    this.setState({checkboxes:newCheckboxes})
    if(newCheckboxes.every(a=>a))this.setState({selectAll:true})
    if(newCheckboxes.some(a=>!a))this.setState({selectAll:false})

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
              ref={selectAll=> this.selectAllRef=selectAll}
              onClick={()=>{
                 this.onSelectHandler()
                 const newCheckboxes= [...this.state.checkboxes].fill(!this.state.selectAll)
                 this.setState({checkboxes:newCheckboxes})
                //  this.state.orders.reduce((prex,curr)=>{

                //  },0)
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
                isChecked={this.state.checkboxes[i]}
                setIsChecked={this.setIsChecked}
              />
            );
          })}
        </div>
        <div
          className="float-right col-md col-lg-3"
          style={{ backgroundColor: "white" }}
        >
          <OrderSummary
            orders={this.state.orders}
          />
        </div>
      </div>
    );
  }
}

export default ShopCart;
