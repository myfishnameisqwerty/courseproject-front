import React, { Component } from "react";
import ItemAbout from "../ItemAbout/ItemAbout"
import { NavLink } from "react-router-dom";
import "./home.css";
import axios from "axios";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProducts: null,
      saleProducts: [],
      topProducts: [
        {
          id: 6,
          name: "Sandwich",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolorem",
          picture: "img/sandwich-4k.jpg",
        },
        {
          id: 2,
          name: "Pizza",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolorem",
          picture: "img/sample-4k.jpg",
        },
      ],
    };
  }
  componentDidMount(){
    axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/products`)
    .then( res => {
      let {data} = res
      this.setState({newProducts:data})
    })
  }
  render() {
    return (
      <div>
         
        <div className="carouselImageBox">
          <div id="rotate" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {this.state.topProducts.map((cur, i) => this.imgSlide(cur, i))}
            </div>
            <a
              className="carousel-control-prev"
              href={"#rotate"}
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href={"#rotate"}
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      <div className="container ">
          <h3 className="text-center">NEW </h3>
          <div className="d-flex justify-content-between align-items-center">
            <div className="hover" onClick={()=>{
                let newProducts=[...this.state.newProducts]
                
                newProducts = newProducts.concat(newProducts.splice(0,4))
                this.setState({newProducts})
            }}>
                <i className="fas fa-chevron-left"></i></div>
          {this.state.newProducts?
          this.state.newProducts.map((el, i) => {
              return (i<4?
                    <div style={{width: "20%"}}>

                        <ItemAbout
                          key={Math.random()}
                          element={el}
                        />
                        
                          <NavLink to={`/catalog/${el.id}`} style={{color: "red"}}><b>Learn more...</b></NavLink>
                    </div>
                    :<React.Fragment/>
              )
          })
        :
        <img src="img/loading-opaque.gif"/>}
          <div className="hover" onClick={()=>{
              
                let newProducts=[...this.state.newProducts]
                let removed = newProducts.splice(-4)
                newProducts = removed.concat(newProducts)
                this.setState({newProducts})
            }}>
          <i className="fas fa-chevron-right"></i></div>
          </div>
      </div>
      </div>
    );
  }
  imgSlide = (cur, i) => {
    let classes = "carousel-item";
    if (i === 0) classes += " active";
    return (
      <div className={classes}>
        <img className="d-block w-100" src={`/${cur.picture}`} />
        <div className="card-img-overlay">
          <div className="h-100 row align-items-center text-center text-white">
            <div className="col">
              <h1 className="card-title">
                <b>{cur.name}</b>
              </h1>
              <p className="card-text">{cur.desc}</p>
              <NavLink to={`/catalog/${cur.id}`} style={{color: "red"}}>
                  
              <button type="button " className="btn btn-outline-light mb-3">
                Buy now
              </button>
              </NavLink>
              <div className="top">TOP prodact</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Home;
