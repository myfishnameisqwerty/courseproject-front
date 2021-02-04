import React from "react";
import PlaceAnItem from "../PlaceAnItem/PlaceAnItem";
import "./GalleryDisplay.css"
const GalleryDisplay = ({ galleryList }) => {
  return ( 
    galleryList.length>0?
    galleryList.map(
    ({ name, desc, min, max, star, price, pictures }, key) => (
      
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
      
    )
  ):<p style={{minHeight : "700px"}}>Nothing to display. Try an other filter options.</p>
  
    
  )
};

export default GalleryDisplay;
