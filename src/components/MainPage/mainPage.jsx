import React, { Component } from "react";
import "./mainPage.css";
import Gallery from "../Gallery/Gallery";
import Login from "../Login/Login";
import Home from "../HomePage/home";
// import ShopElement from "../shopCartElement/shopCartElement"
import ShopCart from "../shopCart/shopCart"
import Payment from "../payment/payment"
import ProductFullInfo from "../ProductFullInfo/ProductFullInfo";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";


class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsArray: [
        {
          id: 1,
          name: "Chebureki",
          desc:
            "Cheburek is made from unleavened dough filled with ground meat, onions and spices, fried in oil. It is a common street food in Russia.",
          star: 5,
          price: 10,
          shipping: 30,
          min: 10,
          max: 100,
          pictures: ["img/cheb1.jpg", "img/cheb2.jpg", "img/cheb3.jpg"],
          additives: { onion: "3" },
          variations: { beef: "12" ,  mutton: "15" ,  chicken: 10 },
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
          shipping: 30,
          min: 2,
          max: 10,
          pictures: ["img/rb1.jpg", "img/rb2.jpg", "img/rb3.jpg"],
          additives: { onion: "3" ,  sauce: "5" },
          variations: { rare: "140" , mw: "140" , wd: 140 },
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
          shipping: 30,
          min: 5,
          max: 20,
          pictures: ["img/hummus.jpg"],
          additives: [],
          variations: { var1: "30" ,  var2: "35" , var3: 32 },
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
          shipping: 30,
          min: 1,
          max: 3,
          pictures: ["img/np1.jpg", "img/np2.jpg"],
          additives: [],
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
          shipping: 30,
          min: 4,
          max: 20,
          pictures: ["img/sf1.jpg", "img/sf2.jpg"],
          additives: { onion: "3" , sauce: "5" },
          variations: { crispy: "50" ,  baked: "60" , oven: 55 },
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
          shipping: 30,
          min: 1,
          max: 50,
          pictures: ["img/Shrimps1.jpg", "img/Shrimps2.jpg"],
          additives: { onion: "3" , sauce: "5" },
          variations: [],
          alegens: [],
          tags: ["fish"],
        },
      ],
    };
  }
  render() {
    return (
      <main className="bg-light ">
        <div className="shadow" style={{ minHeight: "700px" }}>
          <Switch>
          <Route exact path="/" component={Home} />
            <Route
              exact path="/catalog/:id"
              render={(matchProps) => (
                <ProductFullInfo
                  {...matchProps}
                  {...this.props}
                  itemsArray={this.state.itemsArray}
                />
              )}
            />
            <Route exact path={`/catalog?q=`} component={Gallery} />
            <Route
              path="/catalog"
              exact
              render={(matchProps) => (
                <Gallery
                  {...matchProps}
                  {...this.props}
                  itemsArray={this.state.itemsArray}
                />
              )}
            />
            <Route path="/login" component={Login} />
            {/* <Route path="/shop" component={ShopElement} /> */}
            <Route path="/shopcart" component={ShopCart} />
            <Route path="/payment" component={Payment} />
          </Switch>
        </div>
      </main>
    );
  }
}

export default MainPage;
