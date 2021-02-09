import React from "react";

function ItemPrice({ min, maxOfItem, numberOfUnitsToBuy, total }) {
  const starLikeStyle = {
    color: "red"}
  return (
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
          onChange={(e) => {
            
            numberOfUnitsToBuy(Number(e.target.value))
            
          }}
        />
        <i className="fas fa-shopping-cart ml-1" style={starLikeStyle}></i>
        {/* <i className="fas fa-plus ml-1 " style={starLikeStyle}></i> */}
      </div>
      <p className="pb-5 text-secondary">
        <b>Total price: {total}₪</b>
      </p>
    </div>
  </React.Fragment>
  )

};
export default ItemPrice;
