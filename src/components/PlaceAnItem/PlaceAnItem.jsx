import React from "react";
import { NavLink } from "react-router-dom";
import ItemAbout from "../ItemAbout/ItemAbout";
import "./PlaceAnItem.css"
function PlaceAnItem(props, selectElement) {
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
        
          <NavLink to={`/catalog/${props.element.id}`} style={{color: "red"}}><b>Learn more...</b></NavLink>
          
        
      </div>
    );
  };
  
export default PlaceAnItem;