import React, { Component } from "react";
import Select from "react-select";
import "./sorter.css"

class Sorter extends Component {
  constructor(){
    super()
    this.state = {
      value : {label: "Sort By", value:0}
    }
    this.options = [
      { label: "By rating", value: '{"sortBy":"star", "order": 1}'},
      { label: "By lowest price", value: '{"sortBy":"price", "order": -1}'},
      { label: "By highest price", value: '{"sortBy":"price", "order": 1}'},
    ]
  }
  handleChange(value) {
    
    this.setState({ value })
    let val = JSON.parse(value.value);
          this.props.sortMapByInOrder(
            val.sortBy,
            val.order
          );
  }
  render() {
    return (
      <Select
        value={this.state.value}
        options={this.options}
        onChange={value => this.handleChange(value)}
        
      />
        
      
    );
  }
}

export default Sorter;
