import Link from "next/link";
import Router from "next/router"
import React from "react";
import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Row, Col } from "react-bootstrap";
import Otp from 'react-otp-input';
import axios from "axios";
import ErrComponent from "./errComponent";

const LoginA = ({ setIsDone, setAadhaar }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  const name = useRef();
  const aadhar = useRef();

  //Send OTP
  const handleLogin = async (e) => {
    e.preventDefault();

    const entry = {
      name: name.current.value,
      aadhaar: aadhar.current.value,
      isChecked: isChecked
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
                  placeholder ={(!isChecked)?"Aadhar":"InDos"}
                  className="input"
                  ref={aadhar}
                />
                <input type="checkbox" id="ngo" name="ngo" value="ngo"checked={!isChecked}
          onChange={handleOnChange} className="check"/>
           <label for="ngo">Login with Aadhaar No.</label>

           <input type="checkbox" id="rest" name="rest" value="rest" checked={isChecked}
          onChange={handleOnChange} className="check ml-5"/>
           <label for="rest">Login with InDos No.</label> 
                <button
                  className="btn btn-login btn-custom mt-2"
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
  const [err, setErr] = useState(false);

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
        Router.push('/dashboard')
      } else setErr(true)
    } catch (e) {
      if(e.response.status == 401) setErr(true)
      console.log(e, 'nnnn')
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
                  {"Enter 6 digit verification code sent to your number"}
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
                {err && <ErrComponent msg={"Incorrect OTP"}/>}
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
     const entry = {
       username : username.current.value,
       password : password.current.value
     }
    try {
      let res = await axios.post('http://localhost:5000/auth/admin', entry,{ withCredentials:true })
      if (res.status === 200) {
        console.log('Verified');
        Router.push('/adminDashboard')
      } else setErr(true)
    } catch (e) {
      console.log(e)
    }
    // console.log(entry);
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
                  onClick={(e) => handleSubmit(e)}
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
