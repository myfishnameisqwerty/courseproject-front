import DateTimePicker from "react-datetime-picker";
import React, { Component } from "react";
import PendingOrders from "../pendingOrders/pendingOrders";
import { NavLink } from "react-router-dom";
import PayPal from "../PalPal/paypal"
import "./payment.css";

class PaymentProcess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOrders: [],
      totalSum: 0,
      deliveryPrice: 0,
      urgent: 0,
      orderDate: 0,
      delivery: false,
      fields: { name: "", tel: "", email: "", spam: true },
      address: { city: "", street: "", appartment: "" },
    };
  }
  componentDidMount() {
    this.loadOrders();
    this.loadTotal();
    this.setminDate();
  }
  setminDate() {
    let orderDate = new Date();
    orderDate.setDate(orderDate.getDate() + 5);
    this.setState({ orderDate });
  }
  changeOrderDate(date) {
    let inMinRange = new Date();
    inMinRange.setDate(inMinRange.getDate() + 3)
    if (date <= this.state.orderDate) {
      if (date < inMinRange) date = inMinRange;
      this.setState({
        orderDate: date,
        urgent: this.state.totalSum * 0.3,
      });
    } else this.setState({ orderDate: date, urgent: 0 });
  }
  loadTotal() {
    const totalSum = Number(localStorage.getItem("homefood-selectedTotal"));
    this.setState({ totalSum });
  }
  loadOrders() {
    const allOrders = JSON.parse(
      localStorage.getItem("homefood-ordersInProcess")
    );
    const selectedIndexes = JSON.parse(
      localStorage.getItem("homefood-selectedOrdersIndexes")
    );
    const selectedOrders = [];
    if (allOrders && selectedIndexes)
      selectedIndexes.forEach((element) => {
        selectedOrders.push(allOrders[element]);
      });
    this.setState({ selectedOrders });
  }
  onChangeRadioDelivery(event) {
    event.target.value === "pickup"
      ? this.setState({ deliveryPrice: 0, delivery: false })
      : this.state.totalSum < 650
      ? this.setState({ deliveryPrice: 100, delivery: true })
      : this.setState({ deliveryPrice: 0, delivery: true });
  }

  handleChangePersonal(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  }
  handleChangeAddress(e) {
    let address = this.state.address;
    address[e.target.name] = e.target.value;
    this.setState({ address });
  }
  verifyInput() {
    let valid = 0;
    function applyError(inputRef, labelRef) {
      inputRef.style.backgroundColor = "rgb(253, 138, 138)";
      labelRef.style.display = "block";
      valid -= 1;
    }
    function cleanError(inputRef, labelRef) {
      inputRef.style.backgroundColor = "white";
      labelRef.style.display = "none";
      valid++;
    }
    applyError(this.nameRef, this.nameLabRef);
    applyError(this.telRef, this.telLabRef);
    applyError(this.emailRef, this.emailLabRef);
    if (this.nameRef.value.match(/^[a-zA-Z\s\-]+$/)) {
      cleanError(this.nameRef, this.nameLabRef);
    }
    if (this.telRef.value.length === 10) {
      if (this.telRef.value.match(/^[\d]+$/)) {
        const code = ["050", "051", "052", "053", "054", "055", "058"];
        if (
          code.filter((c) => {
            let reg = new RegExp(`^${c}`);
            return this.telRef.value.match(reg);
          })[0] !== "undefined"
        )
          cleanError(this.telRef, this.telLabRef);
      }
    }

    const lastAtPos = this.emailRef.value.lastIndexOf("@");
    const lastDotPos = this.emailRef.value.lastIndexOf(".");
    if (
      lastAtPos < lastDotPos &&
      this.emailRef.value.match(/@/g).length == 1 &&
      lastAtPos > 0 &&
      lastDotPos > 2 &&
      this.emailRef.value.length - lastDotPos > 2
    ) {
      cleanError(this.emailRef, this.emailLabRef);
    }
    return valid === 0 ? true : false;
  }
  onClickOpenPayment() {
    if (this.verifyInput()) {
        console.log(window);
        <PayPal totalSum={this.state.totalSum+this.state.urgent+this.state.deliveryPrice}/>
    }
  }
  deliveryAddress() {
    return (
      <div className='mt-4'>
        <input
          className="mb-2"
          ref={(input) => {
            this.nameRef = input;
          }}
          type="text"
          name="name"
          id="name"
          placeholder="name"
          onChange={(event) => this.handleChangePersonal(event)}
          value={this.state.fields["name"]}
        />
        <br />
        <label
          htmlFor="name"
          ref={(label) => {
            this.nameLabRef = label;
          }}
          style={{ display: "none" }}
        >
          Enter a name.
          <br />
          Name can't contain a symbol or digits.
          <br />
          Max length is 25 characters
        </label>
        <input
          className="mb-2"
          ref={(input) => {
            this.telRef = input;
          }}
          type="tel"
          name="tel"
          id="tel"
          placeholder="telephone"
          onChange={(event) => this.handleChangePersonal(event)}
          value={this.state.fields["tel"]}
        />
        <br />
        <label
          htmlFor="tel"
          ref={(label) => {
            this.telLabRef = label;
          }}
          style={{ display: "none" }}
        >
          Enter a valid cell phone number.
          <br />
          No sighns allowed
        </label>
        <input
          className="mb-2"
          ref={(input) => {
            this.emailRef = input;
          }}
          type="email"
          name="email"
          id="email"
          placeholder="email"
          onChange={(event) => this.handleChangePersonal(event)}
          value={this.state.fields["email"]}
        />
        <label
          htmlFor="email"
          ref={(label) => {
            this.emailLabRef = label;
          }}
          style={{ display: "none" }}
        >
          Not a valid email address.
        </label>
        <br />
        <input
          type="checkbox"
          name="spam"
          id="spam"
          defaultChecked={this.state.fields.spam}
          onClick={(e) => {
            let fields = this.state.fields;
            fields.spam = e.target.checked;
            this.setState({ fields });
          }}
        />{" "}
        Notify me on sales
        {this.state.delivery ? (
          <div>
            <input
              className="mb-2"
              type="text"
              name="city"
              id="city"
              onChange={(event) => this.handleChangeAddress(event)}
              placeholder="City name"
              required
            />
            <br />
            <input
              className="mb-2"
              type="text"
              name="street"
              id="street"
              onChange={(event) => this.handleChangeAddress(event)}
              placeholder="Street"
              required
            />
            <br />
            <input
              className="mb-2"
              type="text"
              name="appartment"
              id="appartment"
              onChange={(event) => this.handleChangeAddress(event)}
              placeholder="appartment number"
            />
            <br />
          </div>
        ) : null}
        <br />
        <button
          className="mt-3 btn btn-danger"
          style={{ backgroundColor: "rgb(226, 80, 31)", width: "180px" }}
          onClick={() => this.onClickOpenPayment()}
        >
          Verify
        </button>
      </div>
    );
  }
  onClickVerifyCoupon() {
    //logic will be implimented after creating a db
  }
  render() {
    const selectedOrders = this.state.selectedOrders;
    return (
      <div className="payment">
        <div>
          <NavLink to="/shopcart">
            <i
              className="far fa-undo-alt fa-3x m-3"
              style={{ color: "rgb(255, 136, 0)" }}
            />
          </NavLink>
          <span>Back to shop cart</span>
        </div>
        <div className="d-flex justify-content-between">
          <div className="mt-5 con-left">
            {selectedOrders.map((order) => {
              return (
                <PendingOrders
                  orderInfo={order.orderInfo}
                  fullItemInfo={order.fullItemInfo}
                />
              );
            })}
          </div>
          <div className="con-rigth mr-3">
            <h4>Total sum for payment</h4>
            <div style={{ fontSize: "20px" }}>
              <b>
                {this.state.totalSum +
                  this.state.urgent +
                  this.state.deliveryPrice}
                ₪
              </b>
              <br />
              <div className="d-flex mt-3">
                <input
                  type="text"
                  name="discount"
                  id="discount"
                  placeholder="Enter you coupon code"
                />
                <button
                  className="ml-2 btn btn-danger"
                  style={{ backgroundColor: "rgb(226, 80, 31)" }}
                  onClick={() => this.onClickVerifyCoupon()}
                >
                  Apply
                </button>
              </div>
            </div>
            <div className="mt-5">
              <p>Select shipping date and time.</p>
              <DateTimePicker
                value={this.state.orderDate}
                onChange={(date) => this.changeOrderDate(date)}
              />
              <p>
                Standart <b>coocking time is 5 days</b>. <br />
                You can also peek <b>urgent 3 days</b> ahead for{" "}
                <b>addition 30%</b> of cost.
              </p>
            </div>
            <div onClick={(event) => this.onChangeRadioDelivery(event)}>
              Select delivery<br/> 
              <input
                type="radio"
                name="delivery"
                id="pickup"
                value="pickup"
                defaultChecked
              />{" "}
              I'll pick up by my self
              <br />
              <input
                type="radio"
                name="delivery"
                id="delivery"
                value="delivery"
              />{" "}
              Deliver me it - { this.state.totalSum>=650?'free':'100₪'}
            </div>
            {this.state.totalSum<650?<p>Deliry is free on buing up to 650 nis.</p>:null}
            {this.deliveryAddress()}
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentProcess;
