import React from "react";
import Img4 from "./img/Img4.jpg";
import { Row, Col, Container } from "react-bootstrap";
import Comma from "./img/comma.svg";
import User2 from "./img/user2.png";

const About = () => {
  return (
    <div>
      <div className="bgImgsetup1">
        <h1 className="about-heading">about us</h1>
      </div>
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <p className="about-p1">
              We’re a highly collaborative and supportive team,
              <br /> coming together on every project to ensure our
              <br /> clients get the very best result.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="text-center">
              <img src={Img4} className="img4" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="pleft">
              <p>Our Mission</p>
              <p>
                Build the best product that creates the most value for our{" "}
                <br />
                customers, use business to inspire and implement environmentally{" "}
                <br />
                friendly solutions.
              </p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="pright">
              <p> Our Values</p>
              <p>
                We strive to go above and beyond for our clients no matter the
                challenge. We aim to deliver our very best work every single day
                across our services.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
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
          <img src={User2} className="userImg" />
        </div>
        <p className="text-center">Emily Davis</p>
      </div>
    </div>
  );
};

export default About;
