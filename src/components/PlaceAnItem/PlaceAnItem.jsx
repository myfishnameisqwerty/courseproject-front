import React from "react";
import ItemAbout from "../ItemAbout/ItemAbout";
import ItemPrice from "../ItemPrice/ItemPrice";

const PlaceAnItem = ({ name, desc, min, max, star, price, pictures }) => {
    return (
      <div className="mt-5 mb-5 col-md-5 col-lg-3 col-xl-2 col-xxl-2 " style={myBorder}>
        <ItemAbout
          key={Math.random()}
          name={name}
          desc={desc}
          min={min}
          max={max}
          star={star}
          price={price}
          pictures={pictures}
        />
        <ItemPrice key={Math.random()} min={min} maxOfItem={max} price={price} />
      </div>
    );
  };
  const myBorder = {
    borderColor:  "rgb(226, 119, 31)",
    borderWidth: "2px",
    borderStyle: "solid",
    // padding: 10px;
    borderRadius: "30px",
    margin: "10px"
  }
export default PlaceAnItem;