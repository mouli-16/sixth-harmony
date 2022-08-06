import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useRef } from "react";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import OTPInput from "./OTPInput";
import { Container, Row, Col } from "react-bootstrap";
const LoginA = ({ setIsDone }) => {
  const name = useRef();
  const aadhar = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();

      setIsDone(true);
      const entry = {
        name: name.current.value,
        aadhaarNumber: aadhar.current.value,
      };
      console.log(entry);


  };

  return (
    <>
      <div className="background"></div>
      <div className="texture">
        <Container className="container-top">
          <Row className="login-top">
            <Col xs={12} md={6} className="login-top-right shadow">
              <h6>Ministry of Ports, Shipping & Waterways</h6>
              <h2>SEAGI-LOCKER</h2>
              <form>
                <input
                  type="text"
                  name="first"
                  placeholder="Name"
                  className="input"
                  ref={name}
                />
                <input
                  type="text"
                  name="last"
                  placeholder="Aadhar"
                  className="input"
                  ref={aadhar}
                />
                <button
                  className="btn btn-login btn-custom"
                  onClick={(e) => handleSubmit(e)}
                >
                  Login
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

const LoginB = () => {
  return (
    <>
      <div className="background"></div>
      <div className="texture">
        <Container className="container-top">
          <Row className="login-top">
            <Col xs={12} md={6} className="login-top-right shadow">
              <h6>Ministry of Ports, Shipping & Waterways</h6>
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h5">
                  Verify
                </Typography>
                <Typography>
                  {"Enter 6 digit verification code sent to 91XXXXX724"}
                </Typography>
                <OTPInput numInputs={6} />
                <Link href="/dashboard">
                <button
                  className="btn btn-login btn-custom btn-verify"
                  // onClick={(e) => handleSubmit(e)}
                >
                  Verify
                </button>
                </Link>
              </Box>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

const LoginContainer = () => {
  const [isDone, setIsDone] = useState(false);
  return <>{!isDone ? <LoginA setIsDone={setIsDone} /> : <LoginB />}</>;
};

export default LoginContainer;
