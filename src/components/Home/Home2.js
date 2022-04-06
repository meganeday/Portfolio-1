import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <br />I started learning to code in 2020, and I now work as a 
              <i>
                <b className="purple" > Front-End Salesforce Commerce Cloud Developer  </b>
              </i> 
              to help clients refine and optimize their online commerce platforms using
              <i>
                <b className="purple"> SFCC, Javascript, and Sass. </b>
              </i>
              <br />
              <br />
              I strive to employ my 
              <i>
                <b className="purple"> creative solutions, empathy, &amp; design expertise </b> </i>to improve
              <i>
                <b className="purple"> user experiences.</b>
              </i>
              <br />
              <br />
              I am currently open to
              <i>
                <b className="purple"> new opportunities</b>
              </i>
              &nbsp; as a
              <i>
                <b className="purple"> Front-End Software Engineer.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
