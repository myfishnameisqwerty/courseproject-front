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
      itemsArray: [
        {
          id:1,
          name: "Chebureki",
          desc:
            "Cheburek is made from unleavened dough filled with ground meat, onions and spices, fried in oil. It is a common street food in Russia.",
          star: 5,
          price: 10,
          min: 10,
          max: 100,
          pictures: ["img/cheb1.jpg", "img/cheb2.jpg", "img/cheb3.jpg"],
          additives:[{'onion':'3'}],
          variations:[{'beef': '12'}, {'mutton': '15'}, {'chicken': 10}],
          alegens:['al1','al2'],
          tags: ["meat", "kosher"],
        },
        {
          id:2,
          name: "Roast beef",
          desc:
            "Roast beef is a traditional English dish of beef which is roasted. Essentially prepared as a main meal, the leftovers are often used in sandwiches and sometimes are used to make hash.",
          star: 3,
          price: 140,
          min: 2,
          max: 10,
          pictures: ["img/rb1.jpg", "img/rb2.jpg", "img/rb3.jpg"],
          additives:[{'onion':'3'}, {'sauce':'5'}],
          variations:[{'rare': '140'}, {'mw': '140'}, {'wd': 140}],
          alegens:[],
          tags: ["meat", "kosher"],
        },
        {
          id:3,
          name: "Humus",
          desc:
            "Hummus is a Middle Eastern dip, spread, or savory dish made from cooked, mashed chickpeas blended with tahini, lemon juice, and garlic.",
          star: 4,
          price: 30,
          min: 5,
          max: 20,
          pictures: ["img/hummus.jpg"],
          additives:[{'onion':'3'}, {'sauce':'5'}],
          variations:[{'var1': '30'}, {'var2': '35'}, {'var3': 32}],
          alegens:['al1','al2'],
          tags: ["salad", "kosher", "parve"],
        },
        {
          id:4,
          name: "Napoleon",
          desc:
            "Description. Napoleon Cake is a classic Russian cakes, made of very thin and flaky puff pastry cake layers and a smooth, rich and luscious pastry cream in between the layers.",
          star: 4,
          price: 90,
          min: 1,
          max: 3,
          pictures: ["img/np1.jpg", "img/np2.jpg"],
          additives:[{'more sugar':'0'}, {'less sugar' : '0'}],
          variations:[],
          alegens:['milk'],
          tags: ["sweets", "dairy", "kosher"],
        },
        {
          id:5,
          name: "Salmon",
          desc:
            "If you pan-fry fish at home in a tablespoon of olive oil, most of the fat is healthy unsaturated fat, and you don't get any trans fat. ",
          star: 5,
          price: 50,
          min: 4,
          max: 20,
          pictures: ["img/sf1.jpg", "img/sf2.jpg"],
          additives:[{'onion':'3'}, {'sauce':'5'}],
          variations:[{'crispy': '50'}, {'baked': '60'}, {'oven': 55}],
          alegens:[],
          tags: ["fish", "kosher", "parve"],
        },
        {
          id:6,
          name: "Shrimps",
          desc:
            "As with other seafood, shrimp is high in protein but low in food energy. A shrimp-based meal is also a significant source of cholesterol.",
          star: 4,
          price: 40,
          min: 1,
          max: 50,
          pictures: ["img/Shrimps1.jpg", "img/Shrimps2.jpg"],
          additives:[{'onion':'3'}, {'sauce':'5'}],
          variations:[],
          alegens:[],
          tags: ["fish"],
        },
      ],
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
        
           {/* <Route path={"/catalog/id"+this.state.selectElement.id} component={<ProductFullInfo element={this.state.selectedElement}/>} /> */}
           {/* <ProductFullInfo element={this.state.itemsArray[0]}/> */}
        <div className="filterResults mt-2 float-right">
          <Sorter
            sortMapByInOrder={this.sortMapByInOrder}
            itemsArray={this.state.itemsArray}
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

    for (const item of this.state.itemsArray) {
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
