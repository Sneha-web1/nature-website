import React from "react";
import Logo from "../components/img/logo.svg";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
const Navigation = () => {
  const Navigate = useNavigate();
  const About = (item) => {
    Navigate(item);
  };
  return (
    <div className=" navrelative">
      <Navbar expand="lg navbarcolor">
        <Container>
          <Navbar.Brand href="./">
            <img src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link to="#" onClick={() => About("./")} className="navhover">
                Home
              </Nav.Link>
              <Nav.Link
                to="#"
                onClick={() => About("./About")}
                className="navhover"
              >
                About
              </Nav.Link>
              <Nav.Link
                to="#"
                onClick={() => About("./Services")}
                className="navhover"
              >
                Services
              </Nav.Link>
              <Nav.Link
                to="#"
                onClick={() => About("./Contact")}
                className="navhover"
              >
                Contact
              </Nav.Link>
              <div className="center">
                <Button variant="primary btn-num">202-555-0188</Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
