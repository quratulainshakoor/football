import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Grid } from "@mui/material";
import { Box } from "@mui/system";



export default function TeamCard({ datas, handleClick }) {
  let Image = datas.image;
  return (
    <>
      <Grid item xs={12} md={3}>
        <Card>
          <CardActionArea
            sx={{
           
              padding: "30px",
              border: "3px solid #4dff00",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <img
                src={Image}
                style={{
              
                  height: "200px",
                  width: "200px",
                }}
              />
            </Box>

            <CardContent>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  color: "#001433",
                  fontFamily:'cursive',
                  fontSize: "30px",
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingTop: "10px",
                }}
              >
                {datas.team}
              </Typography>
            </CardContent>

            <Box sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                style={{
                  border: "2px solid black",
                  fontFamily:'cursive',
                  padding: "10px 20px",
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "white",
                }}
                onClick={() => handleClick(datas.id)}
              >
              Team  Player
              </Button>
            </Box>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
}
