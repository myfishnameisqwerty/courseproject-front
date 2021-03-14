import React, { Component } from "react";
import Carousel from "../Carousel/Carousel";
import "./pendingOrders.css";
class PendingOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unitPrice: 0,
      selected: false,
    };
  }
  componentDidMount() {
    this.calcUnitPrice();
  }

  updateTolats(state){
    if (state){  
      this.props.updateTotals(
        this.state.unitPrice * this.props.orderInfo.quantity
        
      );
    }
    else{

      this.props.updateTotals(
        this.state.unitPrice * this.props.orderInfo.quantity * -1
        
      );
    }
  }
  render() {
    const orderInfo = this.props.orderInfo;
    const fullItemInfo = this.props.fullItemInfo;
    return (
      <div className="orderDetails mb-4 ">
        <div className=" d-flex justify-content-around align-items-center">
          <input
            type="checkbox"
            className="fullInfo check"
            name={orderInfo.orderId + ""}
            id={orderInfo.orderId + ""}
            checked={this.state.selected}
            onChange={(e) => {
              this.setState({selected:e.target.checked})
              this.updateTolats(e.target.checked)
              this.props.updateSelectedOrders(this.props.index)
            }}
          />
          <Carousel key={Math.random()} pictures={fullItemInfo.pictures} />
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
                  <span key={Math.random()}>{` ${v} `}</span>
                ))}
              </div>
            ) : (
              <React.Fragment />
            )}
          </div>

          <div className="fullInfo">
            <div >
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
              <span>{` ${this.state.unitPrice * orderInfo.quantity}₪`}</span>
            </div>
          </div>
          <div className="shortInfo">
              <div>
                <b>Total price:</b>
              </div>
              <span>{` ${this.state.unitPrice * orderInfo.quantity}₪`}</span>
            </div>

          <div className="fullInfo">
            <textarea
              name="note"
              id="note"
              cols="30"
              rows="3"
              style={{ resize: "none" }}
              defaultValue={this.props.orderInfo.notations}
              placeholder="Let us know, if you have an allergy or you want to make additional customization."
            ></textarea>
          </div>
         
          <i
            className="far fa-trash fa-3x fullInfo trash"
            onClick={() => this.props.removeOrder(orderInfo.orderId)}
          ></i>
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
      unitPrice = orderedProduct.variations.filter(v => v.variation === variation)[0].price
    if (typeof orderAdditives[0] !== "undefined") {
      orderAdditives.forEach(
        (el) => (unitPrice += Number(orderedProduct.additives.filter(ad => ad.additive === el)[0].price))
      );
    }

    this.setState({ unitPrice });
  }
}

export default PendingOrders;
