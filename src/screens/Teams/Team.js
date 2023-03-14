
import React,{useState} from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import Grid from "@mui/material/Grid";



import { Container } from "@mui/system";
import TeamCard from "./card";
import { datas } from "./MockupData";
import TeamDailog from "./dailog";


const Team = () => {
  const [open, setOpen] = useState(false);
  const [filterData, setFilterData] = useState("");

  const handleOpen = (id) => {
    setOpen(true);
    console.log(id);

    let filterData = datas.filter((val) => val.id === id);
    setFilterData(filterData);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
 <Box>
        <Typography
          variant="h2"
          style={{
            textAlign: "center",
            marginTop: "150px",
            marginBottom: "50px",
            color: "#001433",
            fontWeight: "bold",
            textDecoration:'underline'
          }}
        >
       Team Performence
        </Typography>
        <Container>
          <Grid container spacing={2}>
            {datas.map((val, i) => (
              <TeamCard key={i} datas={val} handleClick={handleOpen} />
            ))}
          </Grid>
        </Container>
        <TeamDailog
          open={open}
          close={handleClose}
          data={filterData.length === 0 ? [] : filterData[0]}
        />
      </Box>
    </>
  )
}

export default Team
