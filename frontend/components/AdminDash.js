import React from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Container, Row, Col } from "react-bootstrap";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useState, useEffect,useRef } from "react";
import axios from "axios";
import AdminModal from "./AdminModal";
import Test from "./QrScanner";
import Router from "next/router"




const handleScan = () =>{
  // qr?.current?.openImageDialog()
  console.log("j");
  Router.push('/scanner')
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, port, state) {
  return { name, port, state };
}

const rows = [
  createData("Srijan Majumdar", "Haldia", "West Bengal"),
  createData("Srijan Majumdar", "Haldia", "West Bengal"),
  createData("Srijan Majumdar", "Haldia", "West Bengal"),
  createData("Srijan Majumdar", "Haldia", "West Bengal"),
  createData("Srijan Majumdar", "Haldia", "West Bengal"),
  createData("Srijan Majumdar", "Haldia", "West Bengal"),
];
export default function AdminDash() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = () => {
    // setValue(newValue);
  };

  // PENDING
  const [pending, setPending] = useState([]);

  const getPending = async () => {
    const res = await axios.get(
      "http://localhost:5000/application/getpending",
      { withCredentials: true }
    );
    setPending(res.data);
    // console.log(res.data);
  };

  // IN-PROCESS
  const [inprocess, setInProcess] = useState([]);

  const getInProcess = async () => {
    const res = await axios.get(
      "http://localhost:5000/application/getinprocess",
      { withCredentials: true }
    );
    setInProcess(res.data);
    // console.log(res.data);
  };

  // APPROVED
  const [approved, setApproved] = useState([]);

  const getApproved = async () => {
    const res = await axios.get(
      "http://localhost:5000/application/getapproved",
      { withCredentials: true }
    );
    setApproved(res.data);
    console.log(res.data);
  };

  // REJECTED
  const [rejected, setRejected] = useState([]);

  const getRejected = async () => {
    const res = await axios.get(
      "http://localhost:5000/application/getrejected",
      { withCredentials: true }
    );
    setRejected(res.data);
    // console.log(res.data);
  };

  useEffect(() => {
    getPending();
    getInProcess();
    getApproved();
    getRejected();
  }, []);

  const [open, setOpen] = React.useState({});
  const handleNext = (id) => {
    let idx = pending.findIndex((ele) => ele._id == id);
    console.log(idx);
    setOpen({ [pending[idx]._id]: false });
    idx++;
    let sz = pending.length;
    if (idx >= sz) idx = 0;
    setOpen({ [pending[idx]._id]: true });
  };
  const handlePrev = (id) => {
    let idx = pending.findIndex((ele) => ele._id == id);
    console.log(idx);
    setOpen({ [pending[idx]._id]: false });
    idx--;
    if (idx < 0) idx = 0;
    setOpen({ [pending[idx]._id]: true });
  };

  const handleReview = async (_id) => {
    setOpen({ [_id]: true });
    const res = await axios.put(
      "http://localhost:5000/application/approve",
      { id: _id },
      { withCredentials: true }
    );
    console.log(res);
  };
  const handleReject = async (props) => {
    // console.log(props)
    const body = { id: props };
    // console.log(body);
    const res = await axios.put(
      "http://localhost:5000/application/reject",
      body,
      { withCredentials: true }
    );
    if (res.status == 200) window.location.reload();
  };
  return (
    <>
      <div className="backgroundDash"></div>
      <div className="textureDash">
        <Container className="container-top">
          <Row className="Admindash-top">
            <Col xs={0} md={8}>
              <h6>Ministry of Ports, Shipping & Waterways</h6>
              <h2 className="proj-name mt-6">SEAGI-LOCKER</h2>
            </Col>
            <Col xs={0} md={4}>
              <Button
                variant="contained"
                className="abc ml-5"
                onClick={() => handleScan()}
              >
                Scan License
              </Button>
            </Col>
          </Row>
          <Row className="tableContainer">
            <Box sx={{ width: "100%", typography: "body1" }}>
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
                <TabPanel value="1">
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>Application ID</StyledTableCell>
                          <StyledTableCell align="right">Port</StyledTableCell>
                          <StyledTableCell align="right">State</StyledTableCell>
                          <StyledTableCell align="right"></StyledTableCell>
                          <StyledTableCell align="right"></StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {pending.map((row) => (
                          <StyledTableRow key={row._id}>
                            <StyledTableCell component="th" scope="row">
                              {String(row._id).toUpperCase().substring(0,10)}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {"Haldia"}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {"West Bengal"}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              <Button
                                variant="contained"
                                onClick={() => handleReview(row._id)}
                              >
                                Review
                              </Button>
                              <Button
                                variant="contained"
                                className="abc ml-5"
                                onClick={() => handleReject(row._id)}
                              >
                                Reject
                              </Button>
                              <AdminModal
                                open={open}
                                setOpen={setOpen}
                                row={row}
                                handleNext={handleNext}
                                handlePrev={handlePrev}
                              />
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>
                <TabPanel value="2">
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>Name</StyledTableCell>
                          <StyledTableCell align="right">Port</StyledTableCell>
                          <StyledTableCell align="right">State</StyledTableCell>
                          <StyledTableCell align="right"></StyledTableCell>
                          <StyledTableCell align="right"></StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {inprocess.map((row) => (
                          <StyledTableRow key={row.user.name}>
                            <StyledTableCell component="th" scope="row">
                              {String(row._id).toUpperCase().substring(0,10)}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {"Haldia"}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {"West Bengal"}
                            </StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>
                <TabPanel value="3">
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>Name</StyledTableCell>
                          <StyledTableCell align="right">Port</StyledTableCell>
                          <StyledTableCell align="right">State</StyledTableCell>
                          <StyledTableCell align="right"></StyledTableCell>
                          <StyledTableCell align="right"></StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {approved.map((row) => (
                          <StyledTableRow key={row.user.name}>
                            <StyledTableCell component="th" scope="row">
                              {String(row._id).toUpperCase().substring(0,10)}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {"Haldia"}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {"West Bengal"}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              <Button
                                variant="contained"
                                onClick={() => handleReject(row._id)}
                              >
                                Reject
                              </Button>
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>
                <TabPanel value="4">
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>Name</StyledTableCell>
                          <StyledTableCell align="right">Port</StyledTableCell>
                          <StyledTableCell align="right">State</StyledTableCell>
                          <StyledTableCell align="right"></StyledTableCell>
                          <StyledTableCell align="right"></StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rejected.map((row) => (
                          <StyledTableRow key={row.user.name}>
                            <StyledTableCell component="th" scope="row">
                              {String(row._id).toUpperCase().substring(0,10)}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {"Haldia"}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {"West Bengal"}
                            </StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>
              </TabContext>
            </Box>
          </Row>
        </Container>
      </div>
    </>
  );
}
