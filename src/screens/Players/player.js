import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import Grid from "@mui/material/Grid";
import PlayerCard from "../../asserts/Card/card";
import { data } from "../../asserts/Card/mockupData";
import UIDailog from "../../asserts/DailogBox";
import { Container } from "@mui/system";

const Player = () => {
  const [open, setOpen] = useState(false);
  const [filterData, setFilterData] = useState("");

  const handleOpen = (id) => {
    setOpen(true);
    console.log(id);

    let filterData = data.filter((val) => val.id === id);
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
            color: "	#001433",
            fontWeight: "bold",
            textDecoration:'underline'
          }}
        >
          Our Players
        </Typography>
        <Container>
          <Grid container spacing={2}>
            {data.map((val, i) => (
              <PlayerCard key={i} data={val} handleClick={handleOpen} />
            ))}
          </Grid>
        </Container>
        <UIDailog
          open={open}
          close={handleClose}
          data={filterData.length === 0 ? [] : filterData[0]}
        />
      </Box>
    </>
  );
};

export default Player;
