import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/header.jsx";
import MainPage from "./components/MainPage/mainPage.jsx";
import Footer from "./components/Footer/footer.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      itemsArray: [],
    };
  }
  render() {
    return (
      <Router>
        <Header />
        <MainPage itemsArray={this.state.itemsArray}/>
        <Footer />
      </Router>
    );
  }
  componentDidMount(){
    this.loadStore()
  }

  loadStore(){
    axios.get("http://localhost:3000/itemsArray").then(res => {
            const itemsArray = res.data
            this.setState({itemsArray})
        })
  }
}
export default App;
