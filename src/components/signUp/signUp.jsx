import React, { Component } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";
class SignUp extends Component {
   constructor(props){
       super(props);
       this.state = {}
   }
    render() {
    return (
          <Container className="d-flex align-items-center justify-content-center" style={{minHeight:'100vh'}}>
      <div style={{width:'350px', minWidth:'350px'}}>

        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={(input)=> this.emailRef = input} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={(input) => this.passwordRef = input} required />
              </Form.Group>
              <Form.Group id="passwordConfirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={(input)=> this.passwordConfirmRef = input}
                  required
                />
              </Form.Group>
              <Button variant="danger" className="w-100" type="submit" style={{backgroundColor: 'rgb(226, 80, 31)', }}>
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? Log In
        </div>
      </div>
          </Container>
    );
  }
}
export default  SignUp;