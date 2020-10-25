import React, { Component } from "react";
import { Nav, Container, Tab, Row, Col } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <Container className="mt-2">
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Framework</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} className="mt-3">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <img
                    width="100%"
                    src="https://jfitzgeraldgroup.com/wp-content/uploads/2016/10/graphic-design-tools-Feature_1290x688_MS-1080x675.jpg"
                  />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img
                    width="100%"
                    src="https://cdn.vox-cdn.com/thumbor/awirDSUK4dsK_Qj89aSLgdzCV2A=/0x0:1423x1081/920x613/filters:focal(599x428:825x654):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67169854/microsoftteams.0.0.png"
                  />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img
                    width="100%"
                    src="https://miro.medium.com/max/770/1*unmVsOH7qujPeBwFN5Y2Zw.png"
                  />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img
                    width="100%"
                    src="https://ares.decipherzone.com/blog-manager/uploads/banner_webp_14f4ae2e-7083-4e84-8687-aa2e511a6a68.webp"
                  />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img width="100%" src="https://i.morioh.com/990d21e6a2.png" />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

export default About;
