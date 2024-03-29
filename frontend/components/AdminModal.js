import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import Moment from "moment";
import axios from "axios";

import { useTheme } from "@mui/material/styles";


const style = {
  boxShadow: 24,
};

export default function ClientDialog(props) {
  console.log(props.row);
  const theme = useTheme();
  const handleClose = () => {
    props.setOpen(false);
  };

  const reviewed = async () => {
    const body = { id: props.row._id };
    console.log(body);
    const res = await axios.put(
      "http://localhost:5000/application/approve",
      body,
      { withCredentials: true }
    );
    if (res.status == 200) window.location.reload();
    console.log(res);
    props.setOpen(false);
  };

  return (
    <div >
      <Dialog open={props.open[props.row._id]} onClose={handleClose} PaperProps={{style:{
        height:'50%',
        width:'80%'
      }}}>
        <DialogTitle>
          <Typography align="center"
            sx={{
              fontSize: "2.125rem",
              fontWeight: 800,
              mr: 1,
              mt: 1.75,
              mb: 0.75,
              
              // color: theme.palette.secondary[200],
            }}
          >
            Application Details:
          </Typography>
        </DialogTitle>
        <DialogContent margin="100px">
          <DialogContentText>
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: 500,
                padding:2
              }}
            >
              <b> 1. Name :</b> {props.row.user.name}
            </Typography>
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: 500,
                padding:2
              }}
            >
              <b> 2. Address :</b> {props.row.address}
            </Typography>
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: 500,
                padding:2
              }}
            >
              <b> 3. D.O.B :</b> {Moment(props.row.dob).format("DD-MM-YYYY")}
            </Typography>
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: 500,
                padding:2
              }}
            >
              <b> 4. Application ID :</b>
              {props.row._id}
            </Typography>
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: 500,
                padding:2
              }}
            >
              <b> 5. Status : </b>
              {props.row.status}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => props.handlePrev(props.row._id)}
            sx={{
              backgroundColor:"red"
            }}
          >
            Prev
          </Button>
          <Button
            variant="contained"
            onClick={() => props.handleNext(props.row._id)}
          >
            Next
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
