import React, { Component } from "react";
import Carousel from "../Carousel/Carousel";
import "./shopCartElement.css";
class ShopElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: Math.random(),
      orderedProduct: [
        {
          id: 1,
          name: "Chebureki",
          desc:
            "Cheburek is made from unleavened dough filled with ground meat, onions and spices, fried in oil. It is a common street food in Russia.",
          star: 5,
          price: 10,
          min: 10,
          max: 100,
          pictures: ["img/cheb1.jpg", "img/cheb2.jpg", "img/cheb3.jpg"],
          additives: { onion: "3", sauce: "5" },
          variations: { beef: "12", mutton: "15", chicken: "10" },
          alegens: ["al1", "al2"],
          tags: ["meat", "kosher"],
        },
      ],
      orderInfo: {
        variation: 0,
        additives: ["onion", "sauce"],
        numToBuy: "24",
      },
    };
  }
  render() {
    return (
      <div className="orderDetails">
        <div className="container d-flex justify-content-around">
          <Carousel
            key={Math.random()}
            pictures={this.state.orderedProduct[0].pictures}
          />
          <div>
            <h4>{this.state.orderedProduct[0].name}</h4>
            {this.state.orderInfo.variation !== 0 ? (
              <div>
                <span>
                  <b>Variation:</b>
                </span>
                <span>{` ${this.state.orderInfo.variation} `}</span>
              </div>
            ) : (
              <React.Fragment />
            )}
            {typeof this.state.orderInfo.additives[0] !== "undefined" ? (
              <div>
                <span>
                  <b>Additives:</b>
                </span>
                {this.state.orderInfo.additives.map((v) => (
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
              {console.log(
                typeof this.state.orderInfo.additives[0] === "undefined"
              )}
              <span>{` ${this.calcUnitPrice()}`}</span>
            </div>
            <div>
              <span>
                <b>Amount:</b>
              </span>
              <span>{` ${this.state.orderInfo.numToBuy}`}</span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
  calcUnitPrice() {
    const variation = this.state.orderInfo.variation;
    const orderAdditives = this.state.orderInfo.additives;
    const orderedProduct = this.state.orderedProduct[0];
    let unitPrice = orderedProduct.price;
    if (variation !== 0) 
      unitPrice = Number(orderedProduct.variations[variation]);
    if (typeof orderAdditives[0] !== "undefined") {
        orderAdditives.forEach(
          (el) => (unitPrice += Number(orderedProduct.additives[el.toString()]))
        );
      }
    
    return unitPrice
  }
}

export default ShopElement;
