import React, { Component, useState } from "react";
import "../filter.css";
const Filter = ({ ...rest }) => {
  //   const [arr, SetArr] = useState(
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quis ut vitae quidem nulla maxime nam suscipit modi voluptatibus vero. Alias hic dolores excepturi sequi quas enim, vitae illum ducimus"
  //   );
  return (
    <div {...rest}>
      <div className="h-100 ">
        <div className="row align-items-center h-100 position-fixed">
          <div className=" nav-filter">

            <CheckboxElement name='kosher'/>
            <CheckboxElement name='meat'/>
            <CheckboxElement name='fish'/>
            <CheckboxElement name='dairy'/>
            <CheckboxElement name='salads'/>
            <CheckboxElement name='sweets'/>
            <label htmlFor="date" style={MenuColor}>Available on</label>
            <br/>
            <input type="date" name="date" id="date" />
            <br/><br/>
            <button type="button" class="btn btn-outline-danger" id='searchNav'
            style={MenuColor}>Submit search</button>
          </div>
        </div>
      </div>
    </div>
  );
};
const CheckboxElement = ({name}) => {
    return (
    <React.Fragment>
        <input type="checkbox" name={name} id={name} />
        <label htmlFor={name} className="ml-2 text-capitalize"
        style={MenuColor}>
           {name}
        </label>
        <br />
    </React.Fragment>);
};
const MenuColor = {
    color: 'rgb(226, 80, 31)',
    fontWeight: 'bold'
}
export default Filter;
