import React from "react";

const ItemPrice = ({ min, maxOfItem, price }) => (
  <React.Fragment>
    <div>
      <div className="mt-2">
        <input
          type="number"
          name="foodQuant"
          id="numberOfItems"
          defaultValue={min.toString()}
          min={min}
          max={maxOfItem}
          style={{ width: "55px" }}
        />
        <i className="fas fa-plus ml-1 " style={starLikeStyle}></i>
      </div>
      <p className="text-secondary">
        <b>Total price: {price * min}₪</b>
      </p>
    </div>
  </React.Fragment>
);
const starLikeStyle = {
    color: "red",
};
export default ItemPrice;
