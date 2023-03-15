import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Grid } from "@mui/material";
import { Box } from "@mui/system";

export default function PlayerCard({ data, handleClick }) {
  let Image = data.image;
  return (
    <>

      <Grid item xs={12} md={4}>
        <Card>
          <CardActionArea
            sx={{
              height: "400px",
        
              overFlow: "hidden",
              padding: "30px",
              border: "3px solid #4dff00",
        
              "&:hover": {
                backgroundColor: "grey",
              
              },
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <img
                src={Image}
                style={{
                  border: "4px solid black",
                  borderRadius: "50%",
                  height: "150px",
                  width: "150px",
                }}
              />
            </Box>

            <CardContent>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  color: "#001433",
                  fontFamily:'sans-serif',
                  fontSize: "30px",
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingTop: "10px",
                }}
              >
                {data.name}
              </Typography>
            </CardContent>

            <Box sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                style={{
                  fontFamily:'sans-serif',
                  border: "2px solid	black",
                  padding: "10px 20px",
                  fontSize: "15px",
                  fontWeight: "bold",
                  color:'white'
                }}
                onClick={() => handleClick(data.id)}
              >
              More Info
              </Button>
            </Box>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
}
