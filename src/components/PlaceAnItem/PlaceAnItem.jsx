import React from "react";
import { NavLink } from "react-router-dom";
import ItemAbout from "../ItemAbout/ItemAbout";
import ItemPrice from "../ItemPrice/ItemPrice";
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
        <div className="mt-5" onClick={()=>{
          
          selectElement(props.element.id)
        }}>
          <NavLink to={'/catalog/id'+props.element.id } style={{color: "red"}} onClick={()=> selectElement(props.element)}><b>Learn more...</b></NavLink>
          
        </div>
      </div>
    );
  };
  
export default PlaceAnItem;