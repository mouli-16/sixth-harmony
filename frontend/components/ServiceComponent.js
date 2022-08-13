import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function ServiceComponent() {
  return (
    <div className="service-container-bg">
      <Container className="service-container">
        <Row>
          <Col xs={12} md={3}>
            <h1> Getting Started</h1>
          </Col>
          <Col xs={12} md={3}>
            <h1> Register Yourself</h1>
          </Col>
          <Col xs={12} md={3}>
            <h1> Verify Yourself</h1>
          </Col>
          <Col xs={12} md={3}>
            <h1> Browse Documents</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServiceComponent;
