import React, { Component } from "react";
import "./mainPage.css";
import Gallery from "../Gallery/Gallery";
import Login from "../Login/Login";
import Home from "../HomePage/home";
// import ShopElement from "../shopCartElement/shopCartElement"
import ShopCart from "../shopCart/shopCart"
import Payment from "../payment/payment"
import ProductFullInfo from "../ProductFullInfo/ProductFullInfo";
import Blog from "../blog/blog"
import BlogFullInfo from "../blogFullInfo/blogFullInfo"
import ContactUs from "../contactUs/contactUs"
import About from "../about/about"
import axios from 'axios';
import SignUp from '../signUp/signUp'
import Profile from '../profile/profile'
import ProtectedRoute from "../ProtectedRoute/protectedRout"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Control from "../dashboard/control";


class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsArray: [],
    };
  }
  render() {
    return (
      <main className="bg-light ">
        <div className="shadow" style={{ minHeight: "800px" }}>
          <Switch>
          <Route exact path="/" component={Home} />
            <Route
              exact path="/catalog/:id"
              render={(matchProps) => (
                <ProductFullInfo
                  {...matchProps}
                  {...this.props}
                  itemsArray={this.props.itemsArray}
                />
              )}
            />
            <Route exact path={`/catalog?q=`} component={Gallery} />
            <Route
              path="/catalog"
              exact
              render={(matchProps) => (
                <Gallery
                  {...matchProps}
                  {...this.props}
                  itemsArray={this.props.itemsArray}
                />
              )}
            />
            <Route path="/login" component={Login} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/shopcart" component={ShopCart} />
            <Route path="/payment" component={Payment} />
            
            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/:id" component={BlogFullInfo}/>
            <Route path="/contactUs" component={ContactUs}/>
            <Route path="/about" component={About}/>
            <ProtectedRoute path="/dashboard" component={Control}/>
            <ProtectedRoute exact path="/account/profile" component={Profile}/>
            <Route path="*" component={()=> "404 NOT FOUND"}/>
          </Switch>
        </div>
      </main>
    );
  }
  componentDidMount(){
    this.loadStore()
  }

  loadStore(){
    axios.get("http://localhost:3000/itemsArray").then(res => {
            const itemsArray = res.data
            this.setState({itemsArray})
        })
  }
}

export default MainPage;
