import React, { Component } from "react";
import { Card, Modal, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import authentication from "../../auth";
import { connect } from 'react-redux';
import { updateUserNavbar } from '../../actions/actions';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      result: [],
    };
  }
  handleCloseModal() {
    this.setState({ modalShow: false });
    if (this.state.result[0]) this.props.history.push("/account/profile");
  }
  render() {
    return (
      <Container
        className="d-flex align-items-center justify-content-center"
      >
        <div style={{ width: "350px", minWidth: "350px" }}>
          <Card className="mt-5">
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              <Form>
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
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Remember me"
                    ref={(input) => (this.checkRef = input)}
                  />
                </Form.Group>
                <Button
                  onClick={async (e) => {
                    e.preventDefault();
                    await this.setState({
                      modalShow: true,
                      result: await authentication.login(
                        this.emailRef.value,
                        this.passwordRef.value
                      ),
                    });
                    // this.props.updateUserNavbar(auth.currentUser)
                  }}
                  variant="danger"
                  className="w-100"
                  type="submit"
                  style={{ backgroundColor: "rgb(226, 80, 31)" }}
                >
                  Log In
                </Button>
                <h4 className="text-center mt-2">or</h4>
                <Button
                  onClick={async (e) => {
                    e.preventDefault();
                    await this.setState({
                      modalShow: true,
                      result: await authentication.googleLogin(
                        this.emailRef.value,
                        this.passwordRef.value
                      ),
                    });
                  }}
                  variant="danger"
                  className="w-100"
                  type="submit"
                  style={{ backgroundColor: "#dd4b39", borderColor: "#dd4b39", marginTop: "5px" }}
                >
                 <i className="fab fa-google" style={{float:'left', fontSize: "25px"}}> </i>Log In with google
                </Button>
                <Modal
                  show={this.state.modalShow}
                  onHide={() => this.handleCloseModal()}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Login status</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <p>{this.state.result[1]}</p>
                  </Modal.Body>
                </Modal>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to={"/signUp"}>Sign up</Link>
          </div>
        </div>
      </Container>
    );
  }
}
export default connect(state => ({
  user: state.global.user
}), {updateUserNavbar}) (Login);
