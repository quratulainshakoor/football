import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";

const UIDailog = ({ open, close, data }) => {
console.log(data);
 
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle
        id="responsive-dialog-title"
        sx={{
          color: "#245998",
          fontFamily:'sans-serif',
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
      <Typography variant="h2" style={{ textAlign: "center" }}>
Player Performence
      </Typography>
      </DialogTitle>

      <DialogContent sx={{
        fontSize:'20px',
        fontWeight:'bold',
        fontFamily:'sans-serif',
        textTransform:'capitalize',
        color:'	#001433'

      }}>
      {Object.keys(data).map(key => {
        return (
          <div key={key}>
            <p>
              {key}: {data[key]}
            </p>

           
          </div>
        );
      })}
 
      </DialogContent>

      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          style={{
            padding: "10px 20px",
            fontSize: "15px",
            backgroundColor: "#245998",
            color: "eee",
          }}
          onClick={close}
        >
         close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UIDailog;
