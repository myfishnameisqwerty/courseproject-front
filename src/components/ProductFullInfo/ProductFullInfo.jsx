import React, { Component } from "react";
import Carousel from "../Carousel/Carousel";
import ProductShortDesc from "../ProductShortDesc/ProductShortDesc";
import Stars from "../Stars/Stars";
import ItemPrice from "../ItemPrice/ItemPrice";
import "./ProductFullInfo.css";

class ProductFullInfo extends Component {
  constructor(props) {
    super(props);
    this.element = this.props.itemsArray.filter(
      (el) => el.id == this.props.match.params.id
    );
    this.state = {
      price: this.element[0].price,
      numToBuy: this.element[0].min,
      variation: 0,
      additives: []
    };
    
  }
  render() {
    return (
      <div className="mc">
        <Stars key={Math.random()} star={this.element[0].star} />
        <div className="productFullInfo mt-1 mb-5">
          <Carousel key={Math.random()} pictures={this.element[0].pictures} />
        </div>

        <ProductShortDesc
          key={Math.random()}
          name={this.element[0].name}
          desc={this.element[0].desc}
          min={this.element[0].min}
          max={this.element[0].max}
          price={this.state.price}
        />

        <div className="mt-5  d-flex flex-wrap  justify-content-between">
          {typeof this.element[0].variations[0] !== "undefined" ? (
            <div className="variations">
              <p>
                <b>Variations:</b>
              </p>
              <select
                name="variations"
                id="variations"
                onChange={(e) => {
                  let price = this.state.price
                  price = Number(
                    Object.entries(JSON.parse(e.target.value))[0][1])
                  this.state.additives.forEach(el =>{
                    this.element[0].additives.forEach(i => {
                      if (i[el]) price += Number(i[el])
                    })
                    })
                    // console.log(this.element[0].additives[1]['sauce']);
                  this.setState({
                    price,
                    variation: Object.entries(JSON.parse(e.target.value))[0][0]
                  });
                }}
              >
                <option disabled selected hidden>
                  Choose variation
                </option>

                {this.element[0].variations.map((item) => {
                  return (
                    <option value={JSON.stringify(item)}>
                      {Object.entries(item)[0][0] +
                        " - " +
                        Object.entries(item)[0][1] +
                        "₪"}
                    </option>
                  );
                })}
              </select>
            </div>
          ) : (
            <React.Fragment />
          )}
          {typeof this.element[0].additives[0] !== "undefined" ? (
            <div className="additives">
              <p>
                <b>Additives:</b>
              </p>
              {this.element[0].additives.map((item) => {
                return (
                  <div>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id={Object.entries(item)[0][0]}
                      autocomplete="off"
                      onChange={(event) => {
                        if (event.target.checked === true){
                          let additives = [...this.state.additives]
                          additives.push(Object.entries(item)[0][0])
                          this.setState({
                            price:
                              this.state.price +
                              Number(Object.entries(item)[0][1]),
                            additives
                          });
                        }
                        else{
                          let additives = [...this.state.additives]
                          additives.splice(additives.indexOf(Object.entries(item)[0][0]),1)
                          this.setState({
                            price:
                              this.state.price -
                              Number(Object.entries(item)[0][1]),
                            additives
                          });
                        }
                      }}
                    />
                    <label for={Object.entries(item)[0][0]} className="ml-1">
                      {Object.entries(item)[0][0] +
                        " - " +
                        Object.entries(item)[0][1] +
                        "₪"}
                    </label>
                  </div>
                );
              })}
            </div>
          ) : (
            <React.Fragment />
          )}
          {typeof this.element[0].alegens[0] !== "undefined" ? (
            <div className="alergens">
              <p>
                <b>Alergens:</b>
              </p>
              {this.element[0].alegens.map((item) => (
                <div className="alergen"> {item}</div>
              ))}
            </div>
          ) : (
            <React.Fragment />
          )}

          <textarea
            name="notations"
            id="notations"
            cols="60"
            rows="7"
            placeholder="Let us know, if you have an allergy or you want to make additional customization."
          ></textarea>
        </div>
        <ItemPrice
          numberOfUnitsToBuy={this.numberOfUnitsToBuy.bind(this)}
          element={this.element[0]}
          productState={this.state}
          

        />
      </div>
    );
  }
  numberOfUnitsToBuy(value) {
    this.setState({ numToBuy: value });
  }
}

export default ProductFullInfo;
