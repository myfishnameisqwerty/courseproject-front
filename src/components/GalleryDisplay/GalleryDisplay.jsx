import React from "react";
import PlaceAnItem from "../PlaceAnItem/PlaceAnItem";
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
