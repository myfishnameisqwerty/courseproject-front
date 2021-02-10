import React, { Component } from 'react';
import ShopElement from '../shopCartElement';
class ShopingCart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            orders: [{orderId: Math.random(), orderInfo: <ShopElement/>}]
         }
    }
    // componentDidMount(){
        
    // }
    // addItem(){
        
    // }
    render() { 
        return ( 1 );
    }
}
 
export default ShopingCart;