import React, { Component } from "react";
import Login from "../Login/Login"
import {Modal, Button} from "react-bootstrap"
import authentication from "../../auth";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'

class OrderSummary extends Component {
  constructor(props) {
    super(props);
    this.state ={
      showMadal: null
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }
  handleClose(){
    this.setState({showMadal:false})
  }
  handleShow(){
    if (authentication.isAuthenticated())
      // window.location.href = '/payment'
      // console.log(this.props);
      this.props.history.push('/payment')
      else{

        this.setState({showMadal: true})
        
      }
  }
  
  render() {
    console.log("==>>>>>>>>>>>>", this.props.totalPrice)
    return (
      <div>
        <h3>Order Summary</h3>
        
        <div>
          <span>
            <b>{`Total ${this.props.totalPrice}₪`}</b>
          </span>
        </div>

        <Button variant="btn-danger" onClick={this.handleShow} style={{color: "white", backgroundColor: "rgb(226, 80, 31)", width: "220px" }}>
        Buy
      </Button>

      <Modal show={this.state.showMadal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => window.location.href = '/payment'}>
          Continue as guest
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }

}
const MenuColor = {
  color: "rgb(226, 80, 31)",
  fontWeight: "bold",
};

export default connect(state => ({
  totalPrice: state.global.price
})) (withRouter(OrderSummary));