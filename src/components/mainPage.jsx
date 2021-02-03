import React, { Component } from "react";
import Filter from "./Filter";
// import "../mainPage.css";
import GalleryDisplay from "./GalleryDisplay";
import Sorter from "./Sorter";
class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      itemsArray : [
        {
          name: "Chebureki",
          desc:
            "Cheburek is made from unleavened dough filled with ground meat, onions and spices, fried in oil. It is a common street food in Russia.",
          star: 5,
          price: 10,
          min: 10,
          max: 100,
          pictures: ["img/cheb1.jpg", "img/cheb2.jpg", "img/cheb3.jpg"],
          tags: ["meat", "kosher"],
        },
        {
          name: "Roast beef",
          desc:
            "Roast beef is a traditional English dish of beef which is roasted. Essentially prepared as a main meal, the leftovers are often used in sandwiches and sometimes are used to make hash.",
          star: 3,
          price: 140,
          min: 2,
          max: 10,
          pictures: ["img/rb1.jpg", "img/rb2.jpg", "img/rb3.jpg"],
          tags: ["meat", "kosher"],
        },
        {
          name: "Humus",
          desc:
            "Hummus is a Middle Eastern dip, spread, or savory dish made from cooked, mashed chickpeas blended with tahini, lemon juice, and garlic.",
          star: 4,
          price: 30,
          min: 5,
          max: 20,
          pictures: ["img/hummus.jpg"],
          tags: ["salad", "kosher", "parve"],
        },
        {
          name: "Napoleon",
          desc:
            "Description. Napoleon Cake is a classic Russian cakes, made of very thin and flaky puff pastry cake layers and a smooth, rich and luscious pastry cream in between the layers.",
          star: 4,
          price: 90,
          min: 1,
          max: 3,
          pictures: ["img/np1.jpg", "img/np2.jpg"],
          tags: ["sweets", "dairy", "kosher"],
        },
        {
          name: "Salmon",
          desc:
            "If you pan-fry fish at home in a tablespoon of olive oil, most of the fat is healthy unsaturated fat, and you don't get any trans fat. ",
          star: 5,
          price: 50,
          min: 4,
          max: 20,
          pictures: ["img/sf1.jpg", "img/sf2.jpg"],
          tags: ["fish", "kosher", "parve"],
        },
        {
          name: "Shrimps",
          desc:
            "As with other seafood, shrimp is high in protein but low in food energy. A shrimp-based meal is also a significant source of cholesterol.",
          star: 4,
          price: 40,
          min: 1,
          max: 50,
          pictures: ["img/Shrimps1.jpg", "img/Shrimps2.jpg"],
          tags: ["fish" ],
        },
      ],
      filtredArray : []
     }
     this.filterArray = this.filterArray.bind(this)
     this.sortMapByInOrder = this.sortMapByInOrder.bind(this)
  }
  render() { 
    return (
      <main className="bg-light ">
      <div className="filterResults mt-2 float-right">
        <Sorter sortMapByInOrder={this.sortMapByInOrder} itemsArray={this.state.itemsArray} />

      </div>
      <div className="row">
        <div className="col-2">
        <Filter filterArray={this.filterArray}/>
        </div>
        
        <div className="col-10">
          <div className="container pb-5 col-10">
            <div className="row">
              {/* {console.log(this.state.itemsArray)} */}
              <GalleryDisplay galleryList={this.state.filtredArray} />
              </div>
          </div>
        </div>
      </div>
    </main>
    );
  }
  sortMapByInOrder(by, order) {
    let list = this.state.filtredArray
    if (list){
      list.sort((a, b) => (a[by] > b[by] ? -1 * order : 1 * order));
      this.setState({filtredArray:list})
    }
    
  }
  filterArray(tags){
    let tmpArr = []
    
      for (const item of this.state.itemsArray) {
        for (const tag of tags) {
          if (item['tags'].includes(tag)){
            if (tmpArr.indexOf(item)===-1){
              tmpArr.push(item)
              break
              }
          }
        }
        
      }
      
    console.log(tmpArr);
    this.setState({filtredArray:tmpArr})
  }
}


export default MainPage;
