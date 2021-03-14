import React, { Component } from "react";
import { Modal, Card, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../../auth";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      result: [],
    };
  }
  handleCloseModal() {
    this.setState({ modalShow: false });
    if (this.state.result[0]) this.props.history.push("/login");
  }

  render() {
    return (
      <Container
        className="d-flex align-items-center justify-content-center"
        
      >
        <div style={{ width: "350px", minWidth: "350px" }}>
          <Card className="mt-5">
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              <Form>
              <Form.Group id="fullName">
                  <Form.Label>Full name</Form.Label>
                  <Form.Control
                    type="text"
                    ref={(input) => (this.nameRef = input)}
                    required
                  />
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    ref={(input) => (this.emailRef = input)}
                    required
                  />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={(input) => (this.passwordRef = input)}
                    required
                  />
                </Form.Group>
                <Form.Group id="passwordConfirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    ref={(input) => (this.passwordConfirmRef = input)}
                    required
                  />
                </Form.Group>
                <Button
                  onClick={async (e) => {
                    e.preventDefault();
                    if (this.nameRef.value.length > 0){

                      if (
                        this.passwordRef.value === this.passwordConfirmRef.value
                      )
                        this.setState({
                          modalShow: true,
                          result: await auth.signup(
                            this.emailRef.value,
                            this.passwordRef.value,
                            this.nameRef.value
                          )
                        });
                      else
                        this.setState({
                          modalShow: true,
                          result: [false, "There is no match between passwords"],
                        });
                    }
                    else{
                      this.setState({
                        modalShow: true,
                        result: [false, "Enter your name"],
                      });
                    }
                  }}
                  variant="danger"
                  className="w-100"
                  type="submit"
                  style={{ backgroundColor: "rgb(226, 80, 31)" }}
                >
                  Sign Up
                </Button>
                
                <Modal
                  show={this.state.modalShow}
                  onHide={() => this.handleCloseModal()}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Sign Up status</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <p>{this.state.result[1]}</p>
                  </Modal.Body>
                </Modal>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/logIn"> Log In</Link>
          </div>
        </div>
      </Container>
    );
  }
}
export default SignUp;
