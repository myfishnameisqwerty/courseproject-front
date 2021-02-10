import React, { Component } from "react";
import Carousel from "../Carousel/Carousel";
import ProductShortDesc from "../ProductShortDesc/ProductShortDesc";
import Stars from "../Stars/Stars";
import ItemPrice from "../ItemPrice/ItemPrice";
import "./ProductFullInfo.css";

class ProductFullInfo extends Component {
  constructor(props) {
    super(props);
    this.product = this.props.itemsArray.filter(
      (el) => el.id == this.props.match.params.id
    )[0];
    this.state = {
      price: this.product.price,
      numToBuy: this.product.min,
      selectedVariation: 0,
      selectedAdditives: [],
    };
  }
  render() {
    return (
      <div className="mc">
        <Stars key={Math.random()} star={this.product.star} />
        <div className="productFullInfo mt-1 mb-5">
          <Carousel key={Math.random()} pictures={this.product.pictures} />
        </div>

        <ProductShortDesc
          key={Math.random()}
          name={this.product.name}
          desc={this.product.desc}
          min={this.product.min}
          max={this.product.max}
          price={this.state.price}
        />

        <div className="mt-5  d-flex flex-wrap  justify-content-between">
          {Object.keys(this.product.variations).length !== 0 ? (
            <div className="variations">
              <p>
                <b>Variations:</b>
              </p>
              <select
                name="variations"
                id="variations"
                onChange={(e) => {
                  let price = this.state.price;
                  price = Number(
                    this.product.variations[JSON.parse(e.target.value)]
                  );
                  this.state.selectedAdditives.forEach((additiv) => {
                    price += Number(this.product.additives[additiv]);
                    
                  });
                  
                  this.setState({
                    price,
                    selectedVariation: JSON.parse(e.target.value),
                  });
                }}
              >
                <option disabled selected hidden>
                  Choose variation
                </option>
                {Object.keys(this.product.variations).map((item) => {
                  return (
                    <option value={JSON.stringify(item)}>
                      {`${item} - ${this.product.variations[item]}₪`}
                    </option>
                  );
                })}
              </select>
            </div>
          ) : (
            <React.Fragment />
          )}
          {Object.keys(this.product.additives).length !== 0 ? (
            <div className="additives">
              <p>
                <b>Additives:</b>
              </p>
              {Object.keys(this.product.additives).map((item) => {
                return (
                  <div>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id={JSON.stringify(item)}
                      autocomplete="off"
                      onChange={(event) => {
                        let selectedAdditives = [
                          ...this.state.selectedAdditives,
                        ];
                        if (event.target.checked === true) {
                          selectedAdditives.push(item);

                          this.setState({
                            price:
                              this.state.price +
                              Number(this.product.additives[item]),
                            selectedAdditives,
                          });
                        } else {
                          selectedAdditives.splice(
                            selectedAdditives.indexOf(item),
                            1
                          );

                          this.setState({
                            price:
                              this.state.price -
                              Number(this.product.additives[item]),
                            selectedAdditives,
                          });
                        }
                      }}
                    />
                    <label for={JSON.stringify(item)} className="ml-1">
                      {`${item} - ${this.product.additives[item]}₪`}
                    </label>
                  </div>
                );
              })}
            </div>
          ) : (
            <React.Fragment />
          )}
          {typeof this.product.alegens[0] !== "undefined" ? (
            <div className="alergens">
              <p>
                <b>Alergens:</b>
              </p>
              {this.product.alegens.map((item) => (
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
          element={this.product}
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
