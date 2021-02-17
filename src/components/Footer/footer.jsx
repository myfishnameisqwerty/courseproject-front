import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
class Footer extends Component {
    
    render() { 
        return ( 
            <footer className='bg-dark text-light' >
                <div className='container text-center ' >
                    <div style={footerTextColor}>

               <p>© 2021 MyFishNameIsQwerty.  All rights reserved.</p> 
               <NavLink className="mr-2" to="/contactUs" style={removeNavDecore}>Contact Us</NavLink>
               <NavLink className="mr-2 ml-2" to="/about" style={removeNavDecore}>About Us</NavLink>
                    </div>
                <br/>
                <i className=" mr-2 fab fa-facebook fa-2x"></i>
                <i className=" fab fa-telegram fa-2x"></i>
                </div>
            </footer>
         );
    }
}
const footerTextColor = {color: 'rgb(255, 136, 0)'} 
const removeNavDecore = {
    textDecoration:'none', color:'inherit'
}
export default Footer;