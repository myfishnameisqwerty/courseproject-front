import React, { Component } from "react";
import Carousel from "../Carousel/Carousel";
import ProductShortDesc from "../ProductShortDesc/ProductShortDesc";
import Stars from "../Stars/Stars";
import ItemPrice from "../ItemPrice/ItemPrice";
import "./ProductFullInfo.css";

class ProductFullInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: this.props.element.price,
      numToBuy : this.props.element.min,
    };
    this.changed =[];
    this.numberOfUnitsToBuy=this.numberOfUnitsToBuy.bind(this)
  }
  render() {
    return (
      <div className="mt-5" className="mc">
        <Stars star={this.props.element.star} />
        <div className="mt-1 mb-5">
          <Carousel
            key={Math.random()}
            pictures={this.props.element.pictures}
          />
        </div>

        <ProductShortDesc
          name={this.props.element.name}
          desc={this.props.element.desc}
          min={this.props.element.min}
          max={this.props.element.max}
          price={this.state.price}
        />

        <div className="mt-5 d-flex flex-wrap  justify-content-between">
          
            
              {typeof this.props.element.variations[0] !== "undefined" ? (
                <div className="variations">
                  <p>
                    <b>Variations:</b>
                  </p>
                  <select
                    name="variations"
                    id="variations"
                    onChange={(e) => {
                      this.setState({
                        price: Number(
                          Object.entries(JSON.parse(e.target.value))[0][1]
                        ),
                      })

                    }}
                  >
                    <option disabled selected hidden>
                      Choose variation
                    </option>

                    {this.props.element.variations.map((item) => {
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
            

            {typeof this.props.element.additives[0] !== "undefined" ? (
              <div className="additives">
                <p>
                  <b>Additives:</b>
                </p>
                {this.props.element.additives.map((item) => {
                  return (
                    <div>
                      <input
                        type="checkbox"
                        class="btn-check"
                        id={Object.entries(item)[0][0]}
                        autocomplete="off"
                        onChange={(event) => {
                          if (event.target.checked == true)
                            this.setState({
                              price:
                                this.state.price +
                                Number(Object.entries(item)[0][1]),
                            });
                          else
                            this.setState({
                              price:
                                this.state.price -
                                Number(Object.entries(item)[0][1]),
                            });
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

            {typeof this.props.element.alegens[0] !== "undefined" ?(
            <div className="alergens">
              <p><b>Alergens:</b></p>
              {this.props.element.alegens.map((item)=>
                <div className="alergen"> {item}</div>
               
              )}
            </div>
              
            ): (
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
          key={Math.random()}
          min={this.props.element.min}
          maxOfItem={this.props.element.max}
          numberOfUnitsToBuy={this.numberOfUnitsToBuy}
          total = {this.state.price*this.state.numToBuy}
        />
      </div>
    );
  }
  numberOfUnitsToBuy(value){
    this.setState({numToBuy : value})
  }
}

export default ProductFullInfo;
