import React, { Component } from "react";
import Gallery from "./Gallery"
import Login from "./Login";
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
class MainPage extends Component {
  
  render() { 
    return (
      
      <main className="bg-light " style={{minHeight: "700px"}}>
         
        <Switch>
        <Route path="/catalog" component={Gallery}/>
        <Route path="/login" component={Login}/>
        </Switch> 
        
        
         
      </main>
      
    );
  }
  
}


export default MainPage;
