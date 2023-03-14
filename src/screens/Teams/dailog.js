import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";

const TeamDailog = ({ open, close, data }) => {
console.log(data);
 
  return (
    <Dialog open={open} onClose={close}>


<img src={data.image} style={{height:'100px',width:'100px',
marginTop:'5px', }} />

      <DialogTitle
        id="responsive-dialog-title"
        sx={{
          color:'		#245998',
          fontSize: "30px",
          fontWeight: "bold",
          fontFamily:'cursive',
        }}
      >
      <Typography variant="h4" style={{ textAlign: "center" }}>
Goal Keeper
      </Typography>
      </DialogTitle>

      <DialogContent sx={{
        fontSize:'20px',
        fontWeight:'bold',
        textTransform:'capitalize',
        color: "	#001433",
        textAlign:'center',
        fontFamily:'cursive',
      }}>
  {data.name}

   
 
      </DialogContent>
      

      <DialogTitle
        id="responsive-dialog-title"
        sx={{
          color: "	#4dff00",
          fontFamily:'cursive',
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
      <Typography variant="h5" style={{ textAlign: "center" }}>
      FORWARDS
      </Typography>
      </DialogTitle>
      <DialogContent sx={{
        fontSize:'20px',
        fontFamily:'cursive',
        fontWeight:'bold',
        textTransform:'capitalize',
        color:'	#001433',
        textAlign:'center'

      }}>
  {data.names}
   
 
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

export default TeamDailog;