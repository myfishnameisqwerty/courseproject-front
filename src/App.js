import React, { Component } from 'react';
import './App.css'
import Header from './components/header.jsx';
import MainPage from './components/mainPage.jsx';
import Footer from './components/footer.jsx';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'

class App extends Component{
   constructor(){
      super()
      
   }
   render(){
      return(
         <React.Fragment>
            <Router>
            <Header />
            <MainPage/>
            <Footer />
            </Router>
         </React.Fragment>

      );
   }

}
export default App;
