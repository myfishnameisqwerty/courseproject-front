import React from "react";
import PlaceAnItem from "../PlaceAnItem/PlaceAnItem";
const GalleryDisplay = ({ galleryList, selectElement }) => {
  return ( 
    galleryList.length>0?
    galleryList.map(
    (el) => (
      
        <PlaceAnItem
          key={Math.random()}
          element = {el}
          selectElement = {selectElement}
        />
      
    )
  ):<p className="mt-5">Nothing to display. Try an other filter options.</p>
  
    
  )
};

export default GalleryDisplay;
