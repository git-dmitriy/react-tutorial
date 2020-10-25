import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

class Contacts extends Component {
  render() {
    return (
      <Container className="mt-3" style={{ width: "500px" }}>
        <h1 className="text-center">Contact Us</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="enter your email" />
            <Form.Text>We'll never share your email with anyone else</Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicComment">
            <Form.Label>Enter your message:</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Contacts;
