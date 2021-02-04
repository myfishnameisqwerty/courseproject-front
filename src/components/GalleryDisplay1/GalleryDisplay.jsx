import React from "react";
import PlaceAnItem from "../PlaceAnItem1/PlaceAnItem";
import "./GalleryDisplay.css"
const GalleryDisplay = ({ galleryList }) => {
  return ( 
    galleryList.length>0?
    galleryList.map(
    (el) => (
      
        <PlaceAnItem
          key={Math.random()}
          element = {el}
        />
      
    )
  ):<p>Nothing to display. Try an other filter options.</p>
  
    
  )
};

export default GalleryDisplay;
