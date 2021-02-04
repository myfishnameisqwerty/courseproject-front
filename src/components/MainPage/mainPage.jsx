import React, { Component } from "react";
import "./mainPage.css";
import Gallery from "../Gallery/Gallery";
import Login from "../Login/Login";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

class MainPage extends Component {
  render() {
    return (
      <main className="bg-light ">
        <div className="shadow" style={{ minHeight: "700px" }}>
          <Switch>
          {/* <Route exact path="/catalog/:id" component={Product}/> */}

            <Route path="/catalog" component={Gallery} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </main>
    );
  }
}

export default MainPage;
