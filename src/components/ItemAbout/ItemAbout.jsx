import React from "react";
import Carousel from "../Carousel/Carousel";
import ProductShortDesc from "../ProductShortDesc/ProductShortDesc";
import Stars from "../Stars/Stars";
function ItemAbout(props) {
  return (
    <React.Fragment>
      <Stars star={props.element.star} />
      <Carousel key={Math.random()} pictures={props.element.pictures} />

      <ProductShortDesc
        name={props.element.name}
        desc={props.element.desc}
        min={props.element.min}
        max={props.element.max}
        price={props.element.price}
      />
      
    </React.Fragment>
  );
}

export default ItemAbout;
