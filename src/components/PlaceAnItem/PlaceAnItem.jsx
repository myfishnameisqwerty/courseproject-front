import React from "react";
import ItemAbout from "../ItemAbout/ItemAbout";
import ItemPrice from "../ItemPrice/ItemPrice";
import "./PlaceAnItem.css"
function PlaceAnItem(props) {
  const myBorder = {
    borderColor:  "rgb(226, 119, 31)",
    borderWidth: "2px",
    borderStyle: "solid",
    // padding: 10px;
    borderRadius: "30px",
    margin: "10px",
    
  } 
  return (
      <div className="mt-5 mb-5 col-md-5 col-lg-3 col-xl-2 col-xxl-2 placeAnItem" style={myBorder}>
        <ItemAbout
          key={Math.random()}
          element={props.element}
        />
        <ItemPrice key={Math.random()} min={props.element.min} maxOfItem={props.element.max} price={props.element.price} />
      </div>
    );
  };
  
export default PlaceAnItem;