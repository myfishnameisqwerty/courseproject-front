import React, { Component } from "react";
import Carousel from "../Carousel/Carousel";
import ProductShortDesc from "../ProductShortDesc/ProductShortDesc";
import Stars from "../Stars/Stars";
import ItemPrice from "../ItemPrice/ItemPrice";
import "./ProductFullInfo.css";
import axios from 'axios';

class ProductFullInfo extends Component {
  constructor(props) {
    super(props);
    
    // this.product = this.props.itemsArray.filter(
    //   (el) => el.id == this.props.match.params.id
    // )[0];
    this.product = null
    this.state = {
      price: 0,
      numToBuy: 0,
      selectedVariation: 0,
      selectedAdditives: [],
      additivesPrice: 0,
      notations : ""
    };
  }

  componentDidMount(){
    const id = this.props.match.params.id
    axios.get(`http://localhost:3000/itemsArray/${id}`).then((response) => {
      this.product = response.data;
      this.setState({
        price: this.product.price,
        numToBuy: this.product.min,
        selectedVariation: 0,
        selectedAdditives: [],
        notations : ""
      });
    })
  }

  render() {
    return (this.product) ? (
      <div className="mc">
        <Stars star={this.product.star} />
        <div className="productFullInfo mt-1 mb-5">
          <Carousel key={Math.random()} pictures={this.product.pictures} />
        </div>

        <ProductShortDesc
          key={Math.random()}
          name={this.product.name}
          desc={this.product.desc}
          min={this.product.min}
          max={this.product.max}
          price={this.state.price+this.state.additivesPrice}
        />

        <div className="mt-5  d-flex flex-wrap  justify-content-between">
          {this.product.variations.length !== 0 ? (
            <div className="variations">
              <p>
                <b>Variations:</b>
              </p>
              <select
                name="variations"
                id="variations"
                onChange={(e) => {
                  const variation = JSON.parse(e.target.value)
                  this.setState({
                    price:variation.price,
                    selectedVariation: variation.variation,
                  });
                }}
              >
                <option disabled selected hidden>
                  Choose variation
                </option>
                {(this.product.variations).map((item) => {
                  return (
                    <option value={JSON.stringify(item)}>
                      {`${item.variation} - ${item.price}₪`}
                    </option>
                  );
                })}
              </select>
            </div>
          ) : (
            <React.Fragment />
          )}
          {this.product.additives.length !== 0 ? (
            <div className="additives">
              <p>
                <b>Additives:</b>
              </p>
              {this.product.additives.map((item) => {
                return (
                  <div>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id={JSON.stringify(item)}
                      autoComplete="off"
                      onChange={(event) => {
                        let selectedAdditives = [
                          ...this.state.selectedAdditives,
                        ];
                        if (event.target.checked === true) {
                          selectedAdditives.push(item.additive);

                          this.setState({
                            additivesPrice:
                              this.state.additivesPrice +
                              Number(item.price),
                            selectedAdditives,
                          });
                        } else {
                          selectedAdditives.splice(
                            selectedAdditives.indexOf(item),
                            1
                          );

                          this.setState({
                            additivesPrice:
                              this.state.additivesPrice -
                              Number(item.price),
                            selectedAdditives,
                          });
                        }
                      }}
                    />
                    <label htmlFor={JSON.stringify(item)} className="ml-1">
                      {`${item.additive} - ${item.price}₪`}
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
            onChange={(e)=>{
              this.setState({notations: e.target.value})
            }}
          ></textarea>
        </div>
        <ItemPrice
          numberOfUnitsToBuy={this.numberOfUnitsToBuy.bind(this)}
          element={this.product}
          productState={this.state}
        />
      </div>
    ) : (<div>Loading...</div>);
  }
  numberOfUnitsToBuy(value) {
    this.setState({ numToBuy: value });
  }
}

export default ProductFullInfo;
