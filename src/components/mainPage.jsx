import React, { Component } from "react";
import Gallery from "./Gallery"
import Login from "./Login";
class MainPage extends Component {
  
  render() { 
    return (
      <main className="bg-light ">
        {/* <Gallery/> */}
        <Login/>
      </main>
    );
  }
  
}


export default MainPage;
