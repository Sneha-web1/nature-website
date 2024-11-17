import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import './img/bg1.jpg';
import img1 from './img/lapipic1.png';
import img2 from './img/pic1.png';
import img3 from './img/pic2.png'; 

const NormalForm = () => {
  const countries = ["India", "China", "Iran", "Japan", "Italy", "Greece"];

  const statesByCountry = {
    India: ["Kanpur", "Allahabad", "Delhi", "Mumbai"],
    China: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"],
    Iran: ["Tehran", "Mashhad", "Isfahan", "Karaj"],
    Japan: ["Tokyo", "Osaka", "Kyoto", "Yokohama"],
    Italy: ["Rome", "Milan", "Naples", "Turin"],
    Greece: ["Athens", "Thessaloniki", "Patras", "Heraklion"]
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [DOB, setDOB] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [countryData, setCountryData] = useState(countries);
  const [stateData, setStateData] = useState([]);
  const [isHovered, setIsHovered] = useState(false); // State to track hover state

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDOBChange = (event) => {
    setDOB(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    setStateData(statesByCountry[event.target.value] || []);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <div className="img-control">
            <div>
              <img
                src={img2}
                className="me-2"
              />
            </div>
            <div>
              <img
                src={img3}
                className="ms-2"
              />
            </div>
          </div>
            <h1 className="text-center mt-5 text-primary ">
              LOG IN FORM
            </h1>
        </Col>
        <Col xs={6}>
          
          <Form className="bgcolor">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={handleNameChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
              <Form.Text className=" text-white">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>DOB</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter Name"
                onChange={handleDOBChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                onChange={handleConfirmPasswordChange}
              />
            </Form.Group>
            <FloatingLabel>
              <Form.Select onChange={handleCountryChange} value={country} aria-label="Floating label select example">
                <option value="">Choose The Country</option>
                {
                  countryData.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))
                }
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel>
              <Form.Select aria-label="Floating label select example" className="mt-3">
                <option value="">Choose The State</option>
                {
                  stateData.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))
                }
              </Form.Select>
            </FloatingLabel>


            <div className="text-center">
              <Button variant="primary" type="submit"  className="mt-2">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NormalForm;
