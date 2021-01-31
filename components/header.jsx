import React, { Component } from 'react';

class Header extends Component {
    render() { 
        return(
            <header id='head'>
                <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light"
                style={gradientTopButtom}>
                    <h4 style={whiteText}>Company logo</h4>
                    <div className='container-ms mx-auto'>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        
                        {/* <div className='mx-auto'> */}
                        
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#head"
                                    style={whiteText}>Home <span className="sr-only">(current)</span></a>
                                </li>
                                
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                    style={whiteText}>View dishes
                                    </a>
                                    <div className="dropdown-menu " aria-labelledby="navbarDropdown" style ={gradientButtomTop}>
                                        <a className="dropdown-item castomDropMenuHover" href="#" style={whiteText}>For home</a>
                                        <a className="dropdown-item castomDropMenuHover" href="#" style={whiteText}>More then 10 people</a>
                                    </div>
                                </li> 
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search your next meal" aria-label="Search"></input>
                            <button className="castomButtonHover btn btn-outline-light my-2 my-sm-0" type="submit">GO!</button>
                                  
                        </form>
                        {/* </div> */}
                        
                        </div>
                        </div>
                        <div className='loginOptions'>
                            <button className="text-danger btn btn-light my-2 my-sm-0 orangeColor" >Log In</button>
                            <button className="castomButtonHover ml-2 btn btn-outline-light my-2 my-sm-0" >Sign Up</button>       
                        </div>
                        <i className="ml-2 fas fa-shopping-cart fa-2x" style={whiteText}></i> 
                        
                    
                    
                </nav>
            </header>
            

            
         );
    }   
}   

const whiteText = {
    color: 'white'
}
const gradientTopButtom = {
    background: "linear-gradient(rgb(172, 18, 18) , rgb(255, 136, 0))"
}
const gradientButtomTop = {
    background: "linear-gradient(rgb(255, 136, 0), rgb(172, 18, 18))",

}

export default Header;