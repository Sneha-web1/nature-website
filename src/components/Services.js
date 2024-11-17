import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner1 from "./img/banner1.jpg";
import Img6 from "./img/Img6.jpg";
import Img7 from "./img/Img7.jpg";
import Button from "react-bootstrap/Button";
const Services = () => {
  return (
    <div>
      <div className="imgSetup2">
        <h1 className="about-heading">our services</h1>
      </div>
      <Container>
        <Row className="mt-5 ">
          <Col lg={6} md={6} sm={12}>
            <div className="text-center">
              <img src={Banner1} />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="p25">
              <p className="web-head1">Web Design</p>
              <p className="web-discription">
                Tell your visitor how your service can improve their life.
                Connect with the problem that they’re trying to solve and
                address any objections you think they might have.
              </p>
              <p className="web-content">
                What is the biggest benefit your customer will get from this?
                Keep your target audience in mind.
              </p>
              <p className="form1">From $99</p>
              <Button variant="primary mleft0">Start a Project</Button>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 ">
          <Col lg={6} md={6} sm={12}>
            <div className="text-center">
              <img src={Img6} />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="p25">
              <p className="web-head1">Graphic Design</p>
              <p className="web-discription">
                Tell your visitor how your service can improve their life.
                Connect with the problem that they’re trying to solve and
                address any objections you think they might have.
              </p>
              <p className="web-content">
                What is the biggest benefit your customer will get from this?
                Keep your target audience in mind.
              </p>
              <p className="form1">From $99</p>
              <Button variant="primary mleft0">Start a Project</Button>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 ">
          <Col lg={6} md={6} sm={12}>
            <div className="text-center">
              <img src={Img7} />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="p25">
              <p className="web-head1">Content Creation</p>
              <p className="web-discription">
                Tell your visitor how your service can improve their life.
                Connect with the problem that they’re trying to solve and
                address any objections you think they might have.
              </p>
              <p className="web-content">
                What is the biggest benefit your customer will get from this?
                Keep your target audience in mind.
              </p>
              <p className="form1">From $99</p>
              <Button variant="primary mleft0">Start a Project</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="back-color">
        <Container>
          <Row>
            <Col lg={7} md={12} sm={12}>
              <div>
                <p className="p1">Why Love Nature</p>
                <p className="p2">
                  Your customers just learned what services you offer. Tell them
                  why they should work with you or your team, for example you
                  could highlight your experience and positive client reviews.
                </p>
                <p className="p3">
                  The badges illustrate this. We also focus on key benefits they
                  will get while using our services, namely quick turnaround
                  times and dedicated support. You could also use them to show
                  awards you won for your best work.
                </p>
              </div>
            </Col>
            <Col lg={5} className="disp-768-540">
              <Row>
                <Col lg={6}>
                  <i aria-hidden="true" class="fas fa-award font40 mb-5"></i>
                  <p className="p--">8 Years Experience</p>
                </Col>
                <Col lg={6}>
                  <i aria-hidden="true" class="fas fa-star font40 mb-5"></i>
                  <p className="p--1">5 Star Rating</p>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <i aria-hidden="true" class="fas fa-sync-alt font40 mt-5"></i>
                  <p className="p--2">8 Years Experience</p>
                </Col>
                <Col lg={6}>
                  <i
                    aria-hidden="true"
                    class="fas fa-life-ring font40-1 mt-5"
                  ></i>
                  <p className="p--3">Dedicated Support</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Services;
