import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Registration() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
 
    <div className="pr-5 ml-2">
      <div className="shadow-lg rounded-lg">
        <div className="flex  mt-4 ">
           <div className="font-sans font-semibold text-lg m-4 text-blue-900">
                      Register For License here! 
        </div>
        <div className="flex p-5">
         <div className="w-full ml-10 mt-10">

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
       <Row className="mb-3 d-flex">
        <Form.Group as={Col} md="5">
         <Form.Label>First name</Form.Label>
         <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue=""
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
             
            />
            <Form.Control.Feedback type="invalid">
             Give a valid number!
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        </Row>
        <Row className="mb-100">
        <Form.Group as={Col} md="5" >
          <Form.Label>D.O.B</Form.Label>
          <Form.Control type="text" placeholder="dd/mm/yyyy" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid date.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-100">
        <Form.Group as={Col} md="5" >
          <Form.Label>Pan Card Number</Form.Label>
          <Form.Control type="text" placeholder="XXXX XXXX XXXX" required />
          <Form.Control.Feedback type="invalid">
            Please provide a number.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="5" >
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="5" >
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="5" >
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      
    <Button className="btn btn-danger" type="submit">SUBMIT</Button>
   
    </Form>
        </div>

        </div>
      </div>
    </div>
    </div>
  );
}

export default Registration;
