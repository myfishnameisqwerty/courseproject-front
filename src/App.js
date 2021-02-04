import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/header.jsx";
import MainPage from "./components/MainPage/mainPage.jsx";
import Footer from "./components/Footer/footer.jsx";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Router>
        <Header />
        <MainPage />
        <Footer />
      </Router>
    );
  }
}
export default App;
