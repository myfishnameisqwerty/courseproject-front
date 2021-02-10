import React from "react";
import './itemPrice.css';
import { NavLink } from "react-router-dom";

function ItemPrice({numberOfUnitsToBuy, element, productState }) {
  const starLikeStyle = {
    color: "red"}
  return (
  <React.Fragment>
    <div>
      <div className="mt-2 d-flex">
        <input
          type="number"
          name="foodQuant"
          id="numberOfItems"
          defaultValue={productState.numToBuy}
          min={element.min}
          max={element.max}
          style={{ width: "55px" }}
          onChange={(e) => {
            if (e.target.value > element.max)
              e.target.value = element.max
            else
              numberOfUnitsToBuy(Number(e.target.value))
          }}
        />
        <i className="shopIcon fas fa-shopping-cart ml-3" style={starLikeStyle}></i>
      </div>
      <p className="pb-5 text-secondary">
        <b>Total price: {productState.price*productState.numToBuy}₪</b>
      </p>
    </div>
  </React.Fragment>
  )

};
export default ItemPrice;
