import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Person1 from "./img/person1.jpg";
import Person2 from "./img/person2.jpg";
import Person3 from "./img/person3.jpg";
import Person4 from "./img/person4.jpg";
const Contact = () => {
  return (
    <div>
      <div className="bgImgsetup2">
        <h1 className="contact-heading">Contact Us</h1>
      </div>
      <Container>
        <Row>
          <Col lg={5} md={5}>
            <div className="pd-100">
              <h1 className="h1-heading">You can find us at</h1>
              <div className="m-top-bottom">
                <p>EMAIL</p>
                <p className="l-height">hello@tyler.com</p>
              </div>
              <div className="mb-55">
                <p>PHONE-NUMBER</p>
                <p className="l-height">202-555-0188</p>
              </div>
              <div className="mb-55">
                <p>LOCATION</p>
                <p className="l-height l-2">
                  2360 Hood Avenue, San Diego, CA, 92123
                </p>
              </div>
              <div className="me-5 dd">
                <i className="fa-brands fa-twitter social-icon"></i>
                <i className="fa-brands fa-instagram social-icon"></i>
                <i className="fa-brands fa-youtube social-icon"></i>
              </div>
            </div>
          </Col>
          <Col lg={7} md={7}>
            <div className="pd-100">
              <div>
                <h1 className="h1-heading">Let's get in touch</h1>
                <div className="m30">
                  <input
                    type="name"
                    placeholder="Name"
                    className="input-area"
                  />
                </div>
                <div className="m30">
                  <input
                    type="email"
                    placeholder="Email"
                    className="input-area"
                  />
                </div>
                <textarea
                  className="m30-1 input-area"
                  rows="4"
                  cols="50"
                  name="comment"
                  form="usrform"
                  placeholder="Massege"
                ></textarea>
                <button type="button" className="btn3 mb-5">
                  Get Started
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="back-color">
        <h1 className="conatct-head2">
          We are optimists who love to <br /> work together
        </h1>
        <div>
          <Container>
            <Row>
              <Col lg={3} md={3} sm={12}>
                <div className="text-center">
                  <img src={Person1} className="img-control" />
                </div>
              </Col>
              <Col lg={3} md={3} sm={12}>
                <div className="text-center">
                  <img src={Person2} className="img-control" />
                </div>
              </Col>
              <Col lg={3} md={3} sm={12}>
                <div className="text-center">
                  <img src={Person3} className="img-control" />
                </div>
              </Col>
              <Col lg={3} md={3} sm={12}>
                <div className="text-center">
                  <img src={Person4} className="img-control" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Contact;
