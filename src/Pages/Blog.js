import React, { Component } from "react";
import { Container, Col, Row, Media, Card, ListGroup } from "react-bootstrap";

class BLog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={9}>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry.
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry.
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry.
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry.
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col md={3}>
            <h5 className="text-center mt-5">Catalog</h5>
            <Card className="mb-5">
              <ListGroup variant="flush">
                <ListGroup.Item>HTML/CSS</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>Python</ListGroup.Item>
                <ListGroup.Item>Java</ListGroup.Item>
                <ListGroup.Item>C++</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card bg="light">
              <Card.Body>
                <Card.Title>Site widget</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BLog;
