import React, { Component } from 'react';
class Footer extends Component {
    
    render() { 
        return ( 
            <footer className='bg-dark text-light' >
                <div className='container text-center ' >
               <p style={footerTextColor}>© 2021 MyFishNameIsQwerty.  All rights reserved.</p> 
                <br/>
                <i className=" mr-2 fab fa-facebook fa-2x"></i>
                <i className=" fab fa-telegram fa-2x"></i>
                </div>
            </footer>
         );
    }
}
const footerTextColor = {color: 'rgb(255, 136, 0)'} 
export default Footer;