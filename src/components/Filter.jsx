import React, { Component, useState } from "react";
import "../filter.css";
import CheckBoxElement from "./CheckBoxElement";
class Filter extends Component {
  constructor(props){
    super(props);
    this.state = {
      tags : []
    }
    this.addTag = this.addTag.bind(this)
  }
  render() { 
    
    
    return (
      <div className="h-100 ">
        <div className="row align-items-center h-100 position-fixed">
          <div className="nav-filter">
            <CheckBoxElement name="kosher" addTag={this.addTag} />
            <CheckBoxElement name="parve" addTag={this.addTag}/>
            <CheckBoxElement name="meat" addTag={this.addTag}/>
            <CheckBoxElement name="fish" addTag={this.addTag}/>
            <CheckBoxElement name="dairy" addTag={this.addTag}/>
            <CheckBoxElement name="salad" addTag={this.addTag}/>
            <CheckBoxElement name="sweets" addTag={this.addTag}/>
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
              style={MenuColor}
              onClick={() => {
                this.props.filterArray(this.state.tags)
              }}
            >
              Submit search
            </button>
          </div>
        </div>
      </div>
    );
  }
  addTag(tag, e){
    let tags = this.state.tags
    if(e == true)
      tags.push(tag)
    else
      tags.splice(tags.indexOf(tag),1)
  }
}

const MenuColor = {
  color: "rgb(226, 80, 31)",
  fontWeight: "bold",
};

export default Filter;
