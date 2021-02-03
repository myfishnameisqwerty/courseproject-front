import React, { Component } from "react";
import Gallery from "./Gallery"
import Login from "./Login";
import { Route, BrowserRouter as Router} from 'react-router-dom'
class MainPage extends Component {
  
  render() { 
    return (
      <main className="bg-light " style={{minHeight: "700px"}}>
        <Router>
        <Route path="/catalog" component={Gallery}/>
        <Route path="/login" component={Login}/>
        </Router>
        
      </main>
    );
  }
  
}


export default MainPage;
