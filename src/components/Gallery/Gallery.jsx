import React, { Component } from "react";
import Filter from "../Filter/Filter";
import GalleryDisplay from "../GalleryDisplay/GalleryDisplay";
import Sorter from "../Sorter/Sorter";
import queryString from "query-string";
import { connect } from "react-redux";
import {fetchProducts} from "../../actions/actions"

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtredArray: [],
      selectedElement: [],
    };
    this.filterArray = this.filterArray.bind(this);
    this.sortMapByInOrder = this.sortMapByInOrder.bind(this);
    this.selectElement = this.selectElement.bind(this);
    
  }
  
  render() {
    const {products} = this.props
  
    return (
      
      <React.Fragment>
        <div className="filterResults mt-2 float-right">
          <Sorter
            sortMapByInOrder={this.sortMapByInOrder}
            itemsArray={products}
          />
        </div>
        <div className="row">
          <div className="col-2">
            <Filter filterArray={this.filterArray} />
          </div>

          <div className="col-10">
            <div className="container pb-5 col-10">
              <div className="row">
                <GalleryDisplay
                  galleryList={this.state.filtredArray}
                  selectElement={this.state.selectElement}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount(){
    this.props.fetchProducts()
    this.initFilter()
  }
  componentDidUpdate(prevProps){
    if (this.props.location.search!==prevProps.location.search){
      this.initFilter()
    }
  }
  
  initFilter() {
    let search = queryString.parse(this.props.location.search)   
    if (typeof search.q !== "undefined") {
      search = search.q.slice(1, search.q.length - 1).toLowerCase()
      if (!(search.split('').filter(ch => Number(ch)).length) && search!=""){
        let filtred = this.props.products.filter((val) => {
          if (val.name.toLowerCase().includes(search)) {
            return val;
          } else if (val.desc.toLowerCase().includes(search)) {
            return val;
          }
        })
        this.setState({filtredArray:filtred})
        // this.setState((state, props) => ({
        //   filtredArray: [...state.filtredArray, { }]
        // }));
      }
      
    }

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
    let arr = [...this.props.products];
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
  selectElement(selected) {
    this.setState({ selectedElement: selected });
  }
}

export default connect(state => ({
  products: state.global.items
}), {fetchProducts}) (Gallery);
