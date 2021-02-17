import React, { Component } from "react";
import Location from "../location/location"

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isOpen: false
    };
    this.handleToggleClose = this.handleToggleClose.bind(this)
        this.handleToggleOpen = this.handleToggleOpen.bind(this)
  }
  render() {
    return (
      <div className="contactUs text-center mt-5 position-relative">
        <p>
          This is a website support. If you have found a bug or problem or you
          want to contact with the website creator, please fill the follow form.
        </p>
        <input
          ref={(input) => (this.email = input)}
          type="email"
          name="email"
          id="email"
          style={{ width: "250px" }}
          placeholder="email@domain.com"
        />{" "}
        <br />
        <textarea
          ref={(area) => (this.area = area)}
          className="mt-3"
          name="textarea"
          id="textarea"
          cols="60"
          rows="10"
          style={{ resize: "none" }}
        />
        <br />
        <button
          onClick={() => {
            this.onClickSubmit();
          }}
          className="mt-3 btn btn-danger"
          type="submit"
          style={{ backgroundColor: "rgb(226, 80, 31)" }}
        >
          Submit
        </button>
        <div>address: Lorem, ipsum dolor.</div>
        <div>more info, phone, etc</div>
       


        <Location
                    isMarkerShown
                    isOpen={this.state.isOpen}
                    handleToggleClose = {this.handleToggleClose}
                    handleToggleOpen = {this.handleToggleOpen}
                    loadingElement={<div>Loading....</div>}
                    containerElement={<div style={{height: '100%'}} className="map"></div>}
                    mapElement={<div style={{height: '400px', width:'50%', margin:'auto'}} className="inner-map"></div>}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVtHhDa2ErB1UuzEc1t3dXozBGaSHiQZk&v=3.exp&libraries=geometry,drawing,places"

                />
       
      </div>
    );
  }
  handleToggleClose(){
    this.setState({isOpen: false})
}
handleToggleOpen(){
    this.setState({isOpen: true})
}
  onClickSubmit() {
    this.verifyInput();
  }
  verifyInput() {
    let valid = 0;
    function applyError(inputRef) {
      inputRef.style.backgroundColor = "rgb(253, 138, 138)";
      valid -= 1;
    }
    function cleanError(inputRef) {
      inputRef.style.backgroundColor = "white";
      valid++;
    }
    applyError(this.email);
    applyError(this.area);
    const lastAtPos = this.email.value.lastIndexOf("@");
    const lastDotPos = this.email.value.lastIndexOf(".");
    if (
      lastAtPos < lastDotPos &&
      this.email.value.match(/@/g).length == 1 &&
      lastAtPos > 0 &&
      lastDotPos > 2 &&
      this.email.value.length - lastDotPos > 2
    ) {
      cleanError(this.email);
    } else {
      alert("email has to be valid");
    }

    if (this.area.value.length < 15) {
      alert("Not enough info");
    } else {
      cleanError(this.area);
    }
    return valid === 0 ? true : false;
  }
}

export default ContactUs;
