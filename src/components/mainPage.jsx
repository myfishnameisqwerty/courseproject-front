import React, { Component } from 'react';
class MainPage extends Component {
    
    render() { 
        return ( 
            <main>
                <div className='container bg-light pb-5'>
                    <br/><br/><br/>
                    <div className='stars' style ={starLikeStyle}>
                        <i className="fas fa-star" ></i>
                        <i className="fas fa-star" ></i>
                        <i className="fas fa-star" ></i>
                        <i className="fas fa-star" ></i>
                        <i className="far fa-star" ></i>
                    </div>
                    <div className='d-md-flex'>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner"
                            style={imageStyle}>
                                
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={imageList[0]} alt="First slide"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={imageList[1]} alt="Second slide"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={imageList[2]} alt="Third slide"
                                    />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        <div className='ml-4'>
                            <p id='foodName'>Chebureki</p>
                            <p id='foodDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nisi, harum incidunt placeat assumenda dignissimos vitae obcaecati dolorem officiis expedita, cum cumque facere veniam impedit dolores saepe nulla sed magni?</p>
                            <p id='minimum'>Minimum order of <b>{minimumOrder}</b> items</p>
                            <p id='maximum'>Maximum order of <b>{maximumOrder}</b> items</p>
                            <div className='price' style ={starLikeStyle}><b>Price for 1: {price}₪</b></div>
                        </div> 
                    </div>
                    
                    <div style ={starLikeStyle}>
                        <div className='d-md-flex mt-2'>
                            <input type="number" name="foodQuant" id="numberOfItems" value={minimumOrder} min={minimumOrder} max={maximumOrder} style={{width:'55px'}}/>
                            <i className="fas fa-plus-circle ml-1 fa-2x"></i>
                        </div>
                        
                        <p><b>Total price: {price*10}</b></p>
                    </div>
                    {/* <div className='foodprice'><b>Total price: {price}</b></div> */}
                    {/* document.querySelector('#numberOfItems').value */}
                    
                </div>
            </main>
        );
    }
}
const minimumOrder = 10;
const maximumOrder = 100;
let imageStyle = {
    width: '300px'
}
const price = 12;
const likes =4;
const starLikeStyle = {
    color: 'red'
}

const imageList = ["https://cdn.lifehacker.ru/wp-content/uploads/2020/01/Kak-prigotovit-idealnye-domashnie-chebureki_1579377232.jpg", "https://www.povarenok.ru/data/cache/2017oct/23/16/2156089_32368-710x550x.jpg", "https://img-global.cpcdn.com/recipes/ee9394e8a939297c/1200x630cq70/photo.jpg"];

export default MainPage;