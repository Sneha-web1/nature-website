import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Banner1 from "./img/banner1.jpg";
import Banner2 from "./img/banner2.jpg";
import Banner3 from "./img/banner3.jpg";
import Comma from "./img/comma.svg";
import User from "./img/user.png";
import LeafImg from "./img/leaf-img.jpg";
import Button from "react-bootstrap/Button";
const Home = () => {
  return (
    <>
      <div className="bgImgsetup">
        <div className="spacing">
          <h1 className="p1-content">we all love</h1>
          <h1 className="heading1">nature</h1>
          <p className="p2-content">
            Look deep into nature, and you will <br />
            understand everything better.
          </p>
          <button type="button" className="btn2">
            Get Started
          </button>
        </div>
      </div>
      <div>
        <div>
          <h1 className="heading2">Our Services</h1>
          <Container>
            <Row>
              <Col lg={4} md={4} sm={12}>
                <Card className="wdthcard">
                  <Card.Img variant="top" src={Banner1} />
                  <Card.Body>
                    <Card.Title>Web Design</Card.Title>
                    <Card.Text>
                      Focus on how you can help and benefit your user. Use
                      simple words so that you don't confuse people.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <Card className="wdthcard">
                  <Card.Img variant="top" src={Banner2} />
                  <Card.Body>
                    <Card.Title>Graphic Design</Card.Title>
                    <Card.Text>
                      Focus on how you can help and benefit your user. Use
                      simple words so that you don't confuse people.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <Card className="wdthcard">
                  <Card.Img variant="top" src={Banner3} />
                  <Card.Body>
                    <Card.Title>Content Creation</Card.Title>
                    <Card.Text>
                      Focus on how you can help and benefit your user. Use
                      simple words so that you don't confuse people.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="back-color">
          <div className="text-center">
            <img src={Comma} />
          </div>
          <p className="p3-content">
            “Original and with an innate understanding of their <br />
            customer’s needs, the team at Love Nature are <br />
            always a pleasure to work with.”
          </p>
          <div className="text-center">
            <img src={User} className="userImg" />
          </div>
          <p className="text-center">Jane Miller</p>
        </div>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="padding-spacing ">
                <p className="para1">ABOUT US</p>
                <p className="para2">
                  Tell website visitors who you are and why they should choose
                  your business.
                </p>
                <p className="para3">
                  Because when a visitor first lands on your website, you’re a
                  stranger to them. They have to get to know you in order to
                  want to read your blog posts, subscribe to your email
                  newsletter, or buy what you’re selling.
                </p>
                <Button variant="primary">Find Out More</Button>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <img src={LeafImg} className="LeafImg1" />
            </Col>
          </Row>
        </Container>
        <Container fluid className="bgImgsetup3">
          <Row className="text-center">
            <Col xs={12} md={12} sm={12}>
              <h1 className="head-1">QUESTIONS?</h1>
              <p className="para-1">
                Whether you’re curious about features, a free trial, or <br />
                even press, we’re here to answer any questions.
              </p>
              <Button variant="primary btn-talk">Let's Talk Now</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
