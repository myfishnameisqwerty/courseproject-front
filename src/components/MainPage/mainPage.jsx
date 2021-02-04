import React, { Component } from "react";
import "./mainPage.css";
import Gallery from "../Gallery/Gallery";
import Login from "../Login/Login";
import ProductFullInfo from "../ProductFullInfo/ProductFullInfo"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

class MainPage extends Component {
  render() {
    this.val = {
      id:1,
      name: "Chebureki",
      desc:
        "Cheburek is made from unleavened dough filled with ground meat, onions and spices, fried in oil. It is a common street food in Russia.",
      star: 5,
      price: 10,
      min: 10,
      max: 100,
      pictures: ["img/cheb1.jpg", "img/cheb2.jpg", "img/cheb3.jpg"],
      additives:[{'onion':'3'}, {'sauce':'5'}],
      variations:[{'beef': '12'}, {'mutton': '15'}, {'chicken': 10}],
      alegens:['al1','al2'],
      tags: ["meat", "kosher"],
    }
    return (
      <main className="bg-light ">
        <div className="shadow" style={{ minHeight: "700px" }}>
          <ProductFullInfo element={this.val}/>
          {/* <Switch>
            <Route path="/catalog" component={Gallery} />
            <Route path="/login" component={Login} />
          </Switch> */}
        </div>
      </main>
    );
  }
}

export default MainPage;
