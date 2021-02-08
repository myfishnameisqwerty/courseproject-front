import React, { Component } from "react";

class Sorter extends Component {
  render() {
    return (
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={(event) => {
          let val = JSON.parse(event.target.value);
          this.props.sortMapByInOrder(
            val.sortBy,
            val.order
          );
        }
      }
      style={{border: 'none'}}
      >
        <option disabled selected hidden >
          Sort By
        </option>
        <option value='{"sortBy":"star", "order": 1}'>By rating</option>
        <option value='{"sortBy":"price", "order": -1}'>By lowest price</option>
        <option value='{"sortBy":"price", "order": 1}'>By highest price</option>
      </select>
    );
  }
}

export default Sorter;
