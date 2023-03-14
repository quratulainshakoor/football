import React from 'react'
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import Grid from "@mui/material/Grid";

import { Container } from "@mui/system";
import { matchdata } from './mockups';
import MatchCard from './matchcard';
const Matches = () => {
  return (
    <>
          <Box>
        <Typography
          variant="h2"
          style={{
            textAlign: "center",
            marginTop: "150px",
            marginBottom: "50px",
            color: '#001433',
            fontWeight: "bold",
            textDecoration:'underline'
          }}
        >
          UpComing Matches
        </Typography>
        <Container>

          <Grid container spacing={2}>
            {matchdata.map((val, i) => (
              <MatchCard key={i} matchdata={val} />
            ))}
          </Grid>
        </Container>
   
      </Box>
    </>
  )
}

export default Matches
