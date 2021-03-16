import React, { Component } from "react";
import "./filter.css";
import CheckBoxElement from "../CheckBoxElement/CheckBoxElement";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../../actions/actions";
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
            <br />
            <br />
            <NavLink to="/catalog">
              
            <button
              type="button"
              className="btn btn-outline-danger mb-5 pl-4 pr-4"
              id="searchNav"
              style={MenuColor}
              onClick={() => {
                this.props.filterProducts(this.props.products, this.state.tags)
                this.props.filterArray(this.state.tags)
              }}
            >
              Submit search
            </button>
          
            </NavLink>
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

export default connect(state => ({
  products: state.global.items,
  filtred: state.global.items
}),{filterProducts, sortProducts}) (Filter);
