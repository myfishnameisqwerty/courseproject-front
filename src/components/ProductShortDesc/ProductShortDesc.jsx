import React from "react";
export default function ProductShortDesc({ name, desc, min, max, price }) {
    
    const starLikeStyle = {
        color: "red",
    };
    return (
    <div className="productDesc">
      <p id="foodName">
        <b>{name}</b>
      </p>
      <p id="foodDesc">{desc}</p>
      <p id="minimum">
        Minimum order of <b>{min}</b>
      </p>
      <p id="maximum">
        Maximum order of <b>{max}</b>
      </p>
      <div className="price" style={starLikeStyle}>
        <b className="float-end">Unit price: {price}₪</b>
      </div>
    </div>
  );
}
