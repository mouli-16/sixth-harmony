import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import axios from "axios";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useRef } from "react";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import OTPInput from "./OTPInput";
import { Container, Row, Col } from "react-bootstrap";

import { Component } from 'react';
import Otp from 'react-otp-input';
import { width } from "@mui/system";


const LoginA = ({ setIsDone, setAadhaar }) => {
  const name = useRef();
  const aadhar = useRef();

  //Send OTP
  const handleLogin = async (e) => {
    e.preventDefault();

    const entry = {
      name: name.current.value,
      aadhaar: aadhar.current.value,
    };
    console.log(entry);

    try {
      let res = await axios.post('http://localhost:5000/auth/otp', entry)
      console.log(res)
      if (res.status == 200) {
        setAadhaar(aadhar.current.value);
        setIsDone(true);
      }

    } catch (e) {
      console.log(e)
    }

  }


  return (
    <>
      <div className="background "></div>
      <div className="texture mb-10">
        <Container className="container-top ">
          <Row className="login-top">
            <Col xs={12} md={5} className="login-top-right shadow">
              <h6>Ministry of Ports, Shipping & Waterways</h6>
              <h2 className="header-name mt-4 mb-4" >SEAGI-LOCKER</h2>
              <form className="input-form">
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
                  onClick={(e) => handleLogin(e)}
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

const LoginB = ({ aadhaar }) => {
  console.log(aadhaar, 'AAA');

  const [otp, setOtp] = useState('');

  // state = { otp: '' };

  const handleChange = (OTP) => setOtp(OTP);

  //verify OTP
  const handleVerify = async (e) => {
    e.preventDefault();
    console.log(otp)
    // setIsDone(true);
    const entry = {
      otp,
      aadhaar
    };
    console.log(entry);

    try {
      let res = await axios.post('http://localhost:5000/auth/verify', entry,{ withCredentials:true })
      if (res.status === 200) {
        console.log('Verified');
      }
    } catch (e) {
      console.log(e)
    }

  };

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
                {/* <OTPInput numInputs={6} /> */}

                <Otp className="otp mt-6"
                  value={otp}
                  onChange={handleChange}
                  numInputs={6}
                  shouldAutoFocus={true}
                  separator={<div className="span mr-3 ml-3"></div>}
                  containerStyle={
                    { fontSize: 25, }
                  }
                />

                <Link href="/dashboard">
                  <button
                    className="btn btn-login btn-custom btn-verify w-2/3"
                    onClick={(e) => handleVerify(e)}

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

const AdminLogin = () => {
  const username = useRef();
  const password = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
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
              <h2>ADMIN PANEL</h2>
              <form>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input"
                  ref={username}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input"
                  ref={password}
                />
                <Link href="/adminDashboard">
                  <button
                    className="btn btn-login btn-custom"
                  // onClick={(e) => handleSubmit(e)}
                  >
                    Login
                  </button>
                </Link>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};


const LoginContainer = ({ isAdmin }) => {
  const [isDone, setIsDone] = useState(false);
  const [aadhaar, setAadhaar] = useState();
  return <>{isAdmin ? <AdminLogin /> : (!isDone && !aadhaar ? <LoginA setIsDone={setIsDone} setAadhaar={setAadhaar} /> : <LoginB aadhaar={aadhaar} />)}</>;
};

export default LoginContainer;
