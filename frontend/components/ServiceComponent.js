import React from "react";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Col, Container, Row } from "react-bootstrap";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ServiceComponent() {
  return (
    <div className="service-container-bg" >
      {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} lg={3}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Item>4</Item>
        </Grid>
      </Grid> */}
      {/* <Container className="service-container">
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
      </Container> */}
    </div>
  );
}

export default ServiceComponent;
