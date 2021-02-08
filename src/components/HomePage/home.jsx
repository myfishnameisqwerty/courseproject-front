import React, { Component } from "react";
import ItemAbout from "../ItemAbout/ItemAbout"
import { NavLink } from "react-router-dom";
import "./home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProducts: [
        {
          id: 1,
          name: "Chebureki",
          desc:
            "Cheburek is made from unleavened dough filled with ground meat, onions and spices, fried in oil. It is a common street food in Russia.",
          star: 5,
          price: 10,
          min: 10,
          max: 100,
          pictures: ["img/cheb1.jpg", "img/cheb2.jpg", "img/cheb3.jpg"],
          additives: [{ onion: "3" }],
          variations: [{ beef: "12" }, { mutton: "15" }, { chicken: 10 }],
          alegens: ["al1", "al2"],
          tags: ["meat", "kosher"],
        },
        {
          id: 2,
          name: "Roast beef",
          desc:
            "Roast beef is a traditional English dish of beef which is roasted. Essentially prepared as a main meal, the leftovers are often used in sandwiches and sometimes are used to make hash.",
          star: 3,
          price: 140,
          min: 2,
          max: 10,
          pictures: ["img/rb1.jpg", "img/rb2.jpg", "img/rb3.jpg"],
          additives: [{ onion: "3" }, { sauce: "5" }],
          variations: [{ rare: "140" }, { mw: "140" }, { wd: 140 }],
          alegens: [],
          tags: ["meat", "kosher"],
        },
        {
          id: 3,
          name: "Humus",
          desc:
            "Hummus is a Middle Eastern dip, spread, or savory dish made from cooked, mashed chickpeas blended with tahini, lemon juice, and garlic.",
          star: 4,
          price: 30,
          min: 5,
          max: 20,
          pictures: ["img/hummus.jpg"],
          additives: [{ onion: "3" }, { sauce: "5" }],
          variations: [{ var1: "30" }, { var2: "35" }, { var3: 32 }],
          alegens: ["al1", "al2"],
          tags: ["salad", "kosher", "parve"],
        },
        {
          id: 4,
          name: "Napoleon",
          desc:
            "Description. Napoleon Cake is a classic Russian cakes, made of very thin and flaky puff pastry cake layers and a smooth, rich and luscious pastry cream in between the layers.",
          star: 4,
          price: 90,
          min: 1,
          max: 3,
          pictures: ["img/np1.jpg", "img/np2.jpg"],
          additives: [{ "more sugar": "0" }, { "less sugar": "0" }],
          variations: [],
          alegens: ["milk"],
          tags: ["sweets", "dairy", "kosher"],
        },
        {
          id: 5,
          name: "Salmon",
          desc:
            "If you pan-fry fish at home in a tablespoon of olive oil, most of the fat is healthy unsaturated fat, and you don't get any trans fat. ",
          star: 5,
          price: 50,
          min: 4,
          max: 20,
          pictures: ["img/sf1.jpg", "img/sf2.jpg"],
          additives: [{ onion: "3" }, { sauce: "5" }],
          variations: [{ crispy: "50" }, { baked: "60" }, { oven: 55 }],
          alegens: [],
          tags: ["fish", "kosher", "parve"],
        },
        {
          id: 6,
          name: "Shrimps",
          desc:
            "As with other seafood, shrimp is high in protein but low in food energy. A shrimp-based meal is also a significant source of cholesterol.",
          star: 4,
          price: 40,
          min: 1,
          max: 50,
          pictures: ["img/Shrimps1.jpg", "img/Shrimps2.jpg"],
          additives: [{ onion: "3" }, { sauce: "5" }],
          variations: [],
          alegens: [],
          tags: ["fish"],
        },
      ],
      saleProducts: [],
      topProducts: [
        {
          id: 6,
          name: "Sandwich",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolorem",
          picture: "img/sandwich-4k.jpg",
        },
        {
          id: 2,
          name: "Pizza",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolorem",
          picture: "img/sample-4k.jpg",
        },
      ],
    };
  }
  render() {
    return (
      <div>
         
        <div className="carouselImageBox">
          <div id="rotate" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {this.state.topProducts.map((cur, i) => this.imgSlide(cur, i))}
            </div>
            <a
              className="carousel-control-prev"
              href={"#rotate"}
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href={"#rotate"}
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      <div className="container ">
          <h3 className="text-center">NEW </h3>
          <div className="d-flex justify-content-between align-items-center">
            <div className="hover" onClick={()=>{
                let newProducts=[...this.state.newProducts]
                
                newProducts = newProducts.concat(newProducts.splice(0,4))
                this.setState({newProducts})
            }}>
                <i class="fas fa-chevron-left"></i></div>
          {this.state.newProducts.map((el, i) => {
              return (i<4?
                    <div style={{width: "20%"}}>

                        <ItemAbout
                          key={Math.random()}
                          element={el}
                        />
                        
                          <NavLink to={`/catalog/${el.id}`} style={{color: "red"}}><b>Learn more...</b></NavLink>
                    </div>
                    :<React.Fragment/>
              )
          })}
          <div className="hover" onClick={()=>{
              
                let newProducts=[...this.state.newProducts]
                let removed = newProducts.splice(-4)
                console.log(removed);
                newProducts = removed.concat(newProducts)
                this.setState({newProducts})
            }}>
          <i class="fas fa-chevron-right"></i></div>
          </div>
      </div>
      </div>
    );
  }
  imgSlide = (cur, i) => {
    let classes = "carousel-item";
    if (i === 0) classes += " active";
    return (
      <div className={classes}>
        <img className="d-block w-100" src={`/${cur.picture}`} />
        <div className="card-img-overlay">
          <div className="h-100 row align-items-center text-center text-white">
            <div className="col">
              <h1 className="card-title">
                <b>{cur.name}</b>
              </h1>
              <p className="card-text">{cur.desc}</p>
              <NavLink to={`/catalog/${cur.id}`} style={{color: "red"}}>
                  
              <button type="button " className="btn btn-outline-light mb-3">
                Buy now
              </button>
              </NavLink>
              <div className="top">TOP prodact</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Home;
