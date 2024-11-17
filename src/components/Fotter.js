import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Logo2 from "./img/logo2.svg";
const Fotter = () => {
  return (
    <div>
      <Container>
        <Row className="my-4">
          <Col lg={4} md={12} sm={12}>
            <ul className="ulstyle">
              <li>
                <Link to="./" className="text-decoration-none text-dark">
                  Home
                </Link>
              </li>
              <li>
                <Link to="About" className="text-decoration-none text-dark">
                  About
                </Link>
              </li>
              <li>
                <Link to="Services" className="text-decoration-none text-dark">
                  Services
                </Link>
              </li>
              <li>
                <Link to="Contact" className="text-decoration-none text-dark">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className="text-center">
              <img src={Logo2} className="logowdth" />
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div>
              <p className="pp">Love Nature by Tyler Moore</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Fotter;
