import React, { Component } from "react";
import { Switch } from "react-router-dom";
import Filter from "../Filter/Filter";
import GalleryDisplay from "../GalleryDisplay/GalleryDisplay";
import Sorter from "../Sorter/Sorter";
import ProductFullInfo from "../ProductFullInfo/ProductFullInfo"
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtredArray: [],
      selectedElement: [],
    };
    this.filterArray = this.filterArray.bind(this);
    this.sortMapByInOrder = this.sortMapByInOrder.bind(this);
    this.selectElement = this.selectElement.bind(this)
  }
  render() {
    return (
      <React.Fragment>
        <div className="filterResults mt-2 float-right">
          <Sorter
            sortMapByInOrder={this.sortMapByInOrder}
            itemsArray={this.props.itemsArray}
          />
        </div>
        <div className="row">
          <div className="col-2">
            <Filter filterArray={this.filterArray} />
          </div>

          <div className="col-10">
            <div className="container pb-5 col-10">
              <div className="row">
                <GalleryDisplay galleryList={this.state.filtredArray} selectElement={this.state.selectElement} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  sortMapByInOrder(by, order) {
    let list = this.state.filtredArray;
    if (list) {
      list.sort((a, b) => (a[by] > b[by] ? -1 * order : 1 * order));
      this.setState({ filtredArray: list });
    }
  }
  filterArray(tags) {
    let tmpArr = [];
    let arr = [...this.props.itemsArray]
    for (const item of arr) {
      for (const tag of tags) {
        if (item["tags"].includes(tag)) {
          if (tmpArr.indexOf(item) === -1) {
            tmpArr.push(item);
            break;
          }
        }
      }
    }
    this.setState({ filtredArray: tmpArr });
  }
  selectElement(selected){
    this.setState({selectedElement: selected})
  }
}

export default Gallery;
