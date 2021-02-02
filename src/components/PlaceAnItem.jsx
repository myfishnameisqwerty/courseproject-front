import React from "react";
import ItemAbout from "./ItemAbout";
import ItemPrice from "./ItemPrice";

const PlaceAnItem = ({ name, desc, min, max, star, price, pictures }) => {
    return (
      <div className="mt-5 mb-5 col-md-5 col-lg-4 ">
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
export default PlaceAnItem;