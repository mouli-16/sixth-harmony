import React from "react";
import Link from 'next/link'
import { Container, Row, Col } from "react-bootstrap";

function TopContainer() {
  return (
    <>
      <div className="background"></div>
      <div className="texture">
        <Container className="container-top">
          <Row className="section-top">
            <Col xs={12} md={6} className="section-top-left">
              <img className="img-fluid" src="/assets/SHIP.png" />
            </Col>
            <Col xs={12} md={6} className="section-top-right shadow">
              {/* <div className="plate-img-container">
                <img
                  className="plate-img img-fluid"
                  src="/assets/plate-two.png"
                />
                <img
                  className="plate-img img-fluid"
                  src="/assets/plate-three.png"
                />
              </div> */}
              <h6>Ministry of Ports, Shipping & Waterways</h6>
              <h1>SEAGI-LOCKER</h1>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
              <Link href="/login">
              <button className="btn btn-custom">Login</button></Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default TopContainer;
