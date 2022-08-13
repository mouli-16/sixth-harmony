import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from './Navigation'
function DashContainer() {
  return (
    <>
      <div className="backgroundDash"></div>
      <div className="textureDash">
        <Container className="container-top">
          <Row className="section-top">
            <Col xs={0} md={4} className="dash-left">
              <Navigation/>
            </Col>
            <Col xs={12} md={8} className="dash-right">
            {/* <h6>Ministry of Ports, Shipping & Waterways</h6> */}
              <h1>WELCOME, SRIJAN MAJUMDAR</h1>
              {/* <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default DashContainer;
