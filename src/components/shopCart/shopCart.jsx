import React, { Component } from 'react';
import ShopElement from "../shopCartElement/shopCartElement"
import './shopCart.css'
class ShopCart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            orders: [],
            totalSum: 0
         }
        this.removeOrder = this.removeOrder.bind(this)
        this.updateTotalSum = this.updateTotalSum.bind(this)
    }
    componentDidMount(){
        const orders =JSON.parse(localStorage.getItem("homefood-ordersInProcess")) 
        if (orders)
            this.setState({orders})
    }
    updateTotalSum(totalSum){
        
        totalSum += this.state.totalSum
        

        this.setState({totalSum})

    }
    removeOrder(orderId){
        let orders = [...this.state.orders]
        orders = orders.filter(order => order.orderInfo.orderId !== orderId)
        localStorage.setItem("homefood-ordersInProcess", JSON.stringify(orders))
        this.setState({orders})
        window.location.reload()
    }
    render() { 
        const orders = this.state.orders
        return (
            <div>
                <div className="ordersList">

                {orders.map(order => {
                    return <ShopElement orderInfo={order.orderInfo} fullItemInfo={order.fullItemInfo} removeOrder={this.removeOrder} updateTotalSum={this.updateTotalSum}/>
                })}
                </div>
                <div className="total">
                    {this.state.totalSum}
                </div>

            </div>
        );
    }
}
 
export default ShopCart;