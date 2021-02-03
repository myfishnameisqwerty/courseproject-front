import React, { Component } from 'react';
import './App.css'
import Header from './components/header.jsx';
import MainPage from './components/mainPage.jsx';
import Footer from './components/footer.jsx';

class App extends Component{
   constructor(){
      super()
      
   }
   render(){
      return(
         <React.Fragment>
            <Header />
            <MainPage/>
            <Footer />
         </React.Fragment>

      );
   }

}
export default App;
