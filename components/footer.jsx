import React, { Component } from 'react';
class Footer extends Component {
    
    render() { 
        return ( 
            <footer className='bg-dark text-light'>
                <div className='container text-center'>
                © 2021 MyFishNameIsQwerty.  All rights reserved.
                <br/>
                <i className=" mr-2 fab fa-facebook fa-2x"></i>
                <i className=" fab fa-telegram fa-2x"></i>
                </div>
            </footer>
         );
    }
}
 
export default Footer;