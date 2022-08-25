import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Box from "@mui/material/Box";
import axios from 'axios';
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
function Registration() {

  const [validated, setValidated] = useState(false);
   
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault()
    
    if (form.checkValidity() === false) {
      console.log("Invalid");
      event.stopPropagation()
    }

    var body = {
      firstname:first,
      lastname:second,
      phone:phone,
      dob,
      pan,
      state,
      city,
      zip,
      address
    }

    console.log(body);
    setValidated(true);
     
    try{
      const res = await axios.post('http://localhost:5000/application/personal',body,{ withCredentials:true })
      console.log(res);
    }catch(e){
      console.log(e);
    }

   
  };
  
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [phone, setPhone] = useState();
  const [dob, setDob] = useState();
  const [pan, setPan] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [address, setAddress] = useState();

  return (

    <div className="pr-5 ml-2">
      <div className="shadow-lg rounded-lg">
        <div className="flex  mt-4 ">
           <div className="font-sans font-semibold text-lg m-4 text-blue-900">
                      Vessel Registration! 
        </div>
        <div className="flex p-5">
         <div className="w-full ml-10 mt-10">
         {/* <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Pending" value="1" />
                    <Tab label="In-Process" value="2" />
                    <Tab label="Approved" value="3" />
                    <Tab label="Rejected" value="4" />
                  </TabList>
                </Box>
                </TabContext>
                </Box> */}
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
       <Row className="mb-3 d-flex">
        <Form.Group as={Col} md="5">
         <Form.Label>First name</Form.Label>
         <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue=""
            onChange={e=> setFirst(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="5">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue=""
            onChange={e=> setSecond(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row >
         <Row className="mb-100">
         <Form.Group as={Col} md="5" >
           <Form.Label>Phone No.</Form.Label>
           <InputGroup hasValidation>
           <InputGroup.Text >+91</InputGroup.Text>
           <Form.Control
              type="text"
              placeholder="phone number"
              onChange={e=> setPhone(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
             Give a valid number!
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        </Row>
        <Row className="mb-100 mt-3">
        <Form.Group as={Col} md="5" >
          <Form.Label>D.O.B</Form.Label>
          <Form.Control type="text" placeholder="dd/mm/yyyy"  onChange={e=> setDob(e.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid date.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-100 mt-3">
        <Form.Group as={Col} md="5" >
          <Form.Label>Pan Card Number</Form.Label>
          <Form.Control type="text" placeholder="XXXX XXXX XXXX"  onChange={e=> setPan(e.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Please provide a number.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3 mt-3" >
        <Form.Group as={Col} md="5" >
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City"  onChange={e=> setCity(e.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="5" >
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State"  onChange={e=> setState(e.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
       
      </Row>
      
      <Row className="mb-3 mt-3">
      <Form.Group as={Col} md="5" >
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address"  onChange={e=> setAddress(e.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid address.
          </Form.Control.Feedback>
        </Form.Group>  
      <Form.Group as={Col} md="5" >
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip"  onChange={e=> setZip(e.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3 mt-3">
      <input type="file"/>
        <button className="bg-blue-900 text-white h-12 rounded-xl px-6">Upload Ownership Doc</button>
       </Row>
       <Row className="mb-3 mt-3">
      <input type="file"/>
        <button className="bg-blue-900 text-white h-12 rounded-xl px-6">Upload Builder's Certificate</button>
       </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      
    <Button className="btn btn-danger text-black" type="submit">SUBMIT</Button>
   
    </Form>
        </div>

        </div>
      </div>
    </div>
    </div>
  
    );
}

export default Registration;
