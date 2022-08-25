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
import { useState, useEffect } from "react";
import axios from "axios";
import AdminModal from "./AdminModal";

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
    backgroundColor: theme.palette.action.hover,
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
    console.log(res.data);
  };

  // IN-PROCESS
  const [inprocess, setInProcess] = useState([]);

  const getInProcess = async () => {
    const res = await axios.get(
      "http://localhost:5000/application/getinprocess",
      { withCredentials: true }
    );
    setInProcess(res.data);
    console.log(res.data);
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
    setApproved(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    getPending();
    getInProcess();
    getApproved();
    getRejected();
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleReview = async(row) => {
    setOpen(true);
    const res = await axios.put(
      "http://localhost:5000/application/approve",{userId:row.user},{ withCredentials: true }
    );
    console.log(res)
  }
  const handleNext = (id) => {
    const _id = (ele) => ele._id == id
    const idx = pending.findIndex(_id);
    console.log(idx);
  }
  const handlePrev = (id) => {
    console.log(id);
  }
  const handleReject = async() => {
    const res = await axios.put(
      "http://localhost:5000/application/reject",
    );
  }
  return (
    <>
      <div className="backgroundDash"></div>
      <div className="textureDash">
        <Container className="container-top">
          <Row className="Admindash-top">
            <Col xs={0} md={6}>
              <h6>Ministry of Ports, Shipping & Waterways</h6>
              <h2 className="proj-name mt-6">SEAGI-LOCKER</h2>
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
                          <StyledTableCell>Name</StyledTableCell>
                          <StyledTableCell align="right">Port</StyledTableCell>
                          <StyledTableCell align="right">State</StyledTableCell>
                          <StyledTableCell align="right"></StyledTableCell>
                          <StyledTableCell align="right"></StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {pending.map((row) => (
                          <StyledTableRow key={row.user.name}>
                            <StyledTableCell component="th" scope="row">
                              {row.user.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {"Haldia"}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {"West Bengal"}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              <Button variant="contained" onClick={(row) => handleReview(row)}>
                                Review
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
                              {row.user.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {"Haldia"}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {"West Bengal"}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                            </StyledTableCell>
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
                              {row.user.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {"Haldia"}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {"West Bengal"}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              <Button variant="contained" onClick={handleReject}>
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
                              {row.user.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {"Haldia"}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {"West Bengal"}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                            </StyledTableCell>
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
