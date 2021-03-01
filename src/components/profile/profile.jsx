import React, { Component } from "react";
import { Card, Modal, Form, Button, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import firebase, { auth } from "../../firebase";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      city: ""
    };
  }
  componentDidMount() {
    this.setState({
      fname:
        auth.currentUser.displayName.split(" ")[0] !== "undefined"
          ? auth.currentUser.displayName.split(" ")[0]
          : "",
      lname:
        auth.currentUser.displayName.split(" ").slice(1)[0] !== "undefined"
          ? auth.currentUser.displayName.split(" ").slice(1)[0]
          : "",
        city:auth.currentUser.city
    });

  }
  onUpdateUserProfile() {
    let user = auth.currentUser;
    
    user.updateProfile({
        displayName: `${this.state.fname} ${this.state.lname}`,
        city: this.state.city
    });
  }
  render() {
    
    return (
      <div className="mt-4 d-flex flex-md-wrap justify-content-around">
        <Card
          className="d-flex align-items-center justify-content-center"
          style={{ width: "48%" }}
        >
          <Card.Body>
            <Form className="text-center">
              <Form.Row>
                <img
                  src="https://randomuser.me/api/portraits/lego/6.jpg"
                  className="rounded-circle"
                  style={{ width: "100px" }}
                />
              </Form.Row>
              {/* <Form.Label>{auth.currentUser.displayName!=='undefined undefined'?auth.currentUser.displayName:""}</Form.Label> */}
              <Form.Label>{auth.currentUser.displayName}</Form.Label>
              <Form.Label>{auth.currentUser.city}</Form.Label>
            </Form>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "white" }}>
            Upload Picture
          </Card.Footer>
        </Card>

        <Card style={{ width: "48%" }}>
          <Card.Header as="h3" style={{ backgroundColor: "white" }}>
            Profile
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={this.state.fname}
                onChange={(e) => this.setState({ fname: e.target.value })}
                required
              />
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={this.state.lname}
                onChange={(e) => this.setState({ lname: e.target.value })}
                required
              />
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                defaultValue={auth.currentUser.email}
                required
              />
              <Form.Label>City</Form.Label>
              <Form.Row>
                <Form.Group as={Col} controlId="formCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Choose..."
                    onChange={(e) => this.setState({city:e.target.value})}
                  >
                    <option>Choose...</option>
                    <option value="Tel-Aviv">Tel-Aviv</option>
                    <option value="Ramat-Gan">Ramat-Gan</option>
                    <option value="Rishon Lezion">Rishon Lezion</option>
                    <option value="Holon">Holon</option>
                    <option value="Givataim">Givataim</option>
                    <option value="Bat-Yam">Bat-Yam</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
            </Form>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "white" }}>
            <Button
              variant="danger"
              className="float-right"
              style={{ backgroundColor: "rgb(226, 80, 31)" }}
              type="submit"
              onClick={this.onUpdateUserProfile()}
            >
              SAVE DETAILS
            </Button>
          </Card.Footer>
        </Card>
      </div>
    )
  }
}
