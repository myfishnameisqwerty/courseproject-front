import React from "react";
import PlaceAnItem from "./PlaceAnItem";
const GalleryDisplay = ({galleryList}) => {
    return (galleryList.map(({ name, desc, min, max, star, price, pictures }, key) => (
        <PlaceAnItem
          key={key}
          name={name}
          desc={desc}
          min={min}
          max={max}
          star={star}
          price={price}
          pictures={pictures}
        />
      )))
    
}
export default GalleryDisplay;