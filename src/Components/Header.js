import React, { Component } from "react";
import {
  FormControl,
  Navbar,
  Nav,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import logo from "./logo192.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";

class Header extends Component {
  render() {
    return (
      <Router>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Link to="/">
              <Navbar.Brand href="/">
                <img
                  src={logo}
                  height="30"
                  width="30"
                  className="d-inline-block align-top"
                  alt="logo"
                />
                {" React site"}
              </Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavLink to="/" exact className="nav-link">
                  Home
                </NavLink>
                <NavLink to="/about" className="nav-link">
                  About Us
                </NavLink>
                <NavLink to="/contacts" className="nav-link">
                  Contacts
                </NavLink>
                <NavLink to="/blog" className="nav-link">
                  Blog
                </NavLink>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
      </Router>
    );
  }
}

export default Header;
