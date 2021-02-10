import React, { Component } from "react";
import Carousel from "../Carousel/Carousel";
import "./shopCartElement.css";
class ShopElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unitPrice : 0
    };
  }
  componentDidMount(){
    this.calcUnitPrice()
  }
  render() {
    const orderInfo = this.props.orderInfo
    const fullItemInfo = this.props.fullItemInfo
    return (
      <div className="orderDetails">
        <div className=" d-flex justify-content-around align-items-center">
          <Carousel
            key={Math.random()}
            pictures={fullItemInfo.pictures}
          />
          <div>
            <h4>{fullItemInfo.name}</h4>
            {orderInfo.variation !== 0 ? (
              <div>
                <span>
                  <b>Variation:</b>
                </span>
                <span>{` ${orderInfo.variation} `}</span>
              </div>
            ) : (
              <React.Fragment />
            )}
            {typeof orderInfo.additives[0] !== "undefined" ? (
              <div>
                <span>
                  <b>Additives:</b>
                </span>
                {orderInfo.additives.map((v) => (
                  <span>{` ${v} `}</span>
                ))}
              </div>
            ) : (
              <React.Fragment />
            )}
          </div>
          
          <div>
            <div>
              <span>
                <b>Unit price:</b>
              </span>
              <span>{` ${this.state.unitPrice}₪`}</span>
            </div>
            <div>
              <span>
                <b>Amount:</b>
              </span>
              <span>{` ${orderInfo.quantity}`}</span>
            </div>
            <div>
              <span>
                <b>Total price:</b>
              </span>
              <span>{` ${this.state.unitPrice*orderInfo.quantity}₪`}</span>
            </div>
          </div>
          
          <i className="far fa-minus-circle fa-4x" onClick={()=>this.props.removeOrder(orderInfo.orderId)}></i>
        
        </div>
      </div>
    );
  }
  calcUnitPrice() {
    const variation = this.props.orderInfo.variation;
    const orderAdditives = this.props.orderInfo.additives;
    const orderedProduct = this.props.fullItemInfo;
    let unitPrice = orderedProduct.price;
    if (variation !== 0) 
      unitPrice = Number(orderedProduct.variations[variation]);
    if (typeof orderAdditives[0] !== "undefined") {
        orderAdditives.forEach(
          (el) => (unitPrice += Number(orderedProduct.additives[el.toString()]))
        );
      }
    
    this.setState({unitPrice}) 
    this.props.updateTotalSum(unitPrice*this.props.orderInfo.quantity)
  }
}

export default ShopElement;
