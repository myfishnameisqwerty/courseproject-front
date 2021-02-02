import React, { Component, useState } from "react";
import "../filter.css";
import CheckBoxElement from "./CheckBoxElement";
const Filter = ({ ...rest }) => {
  return (
    <div {...rest}>
      <div className="h-100 ">
        <div className="row align-items-center h-100 position-fixed">
          <div className="nav-filter">
            <CheckBoxElement name="kosher" />
            <CheckBoxElement name="parve" />
            <CheckBoxElement name="meat" />
            <CheckBoxElement name="fish" />
            <CheckBoxElement name="dairy" />
            <CheckBoxElement name="salads" />
            <CheckBoxElement name="sweets" />
            <label htmlFor="date" style={MenuColor}>
              Available on
            </label>
            <br />
            <input type="date" name="date" id="date" />
            <br />
            <br />
            <button
              type="button"
              className="btn btn-outline-danger mb-5 pl-4 pr-4"
              id="searchNav"
              style={MenuColor} onClick={()=>{
                console.log(getCheckBoxes());
              }}
            >
              Submit search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuColor = {
  color: "rgb(226, 80, 31)",
  fontWeight: "bold",
};
function getCheckBoxes(){
  let ch = document.getElementsByTagName('checkbox')
  return ch
}
export default Filter;
