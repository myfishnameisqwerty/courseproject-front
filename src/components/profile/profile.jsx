import React, { Component } from "react";
import { Card,  Form, Button,  Col } from "react-bootstrap";
import auth from "../../auth";

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
    auth.loadUserData()

  }
  onUpdateUserProfile() {
    auth.loadUserData()
   
  }
  render() {
    console.log("auth.user", auth.user);
    return auth.user?(
      <div className="mt-4 d-flex flex-md-wrap justify-content-around">
        
        <Card style={{ width: "350px" }}>
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
                defaultValue={auth.user.email}
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
    ):<p>loading...</p>
  }
}
