import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { Box } from "@mui/system";

export default function MatchCard({ matchdata }) {
  let Image = matchdata.image;
  let Images = matchdata.images;
  return (
    <>
      <Grid item xs={12} md={4}>
        <Card>
          <CardActionArea
            sx={{
              padding: "20px",
              border: "3px solid #4dff00",
              
            }}
          >
            <CardContent>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  color: "#001433",
                  fontFamily: "cursive",
                  fontSize: "30px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {matchdata.name}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: "#001433",
                  fontFamily: "cursive",
                  fontSize: "15px",
                  textAlign: "center",
                  paddingTop: "10px",
                }}
              >
                {matchdata.time}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#001433",
                  fontFamily: "cursive",
                  fontSize: "15px",
                  textAlign: "center",
                  paddingTop: "10px",
                }}
              >
                {matchdata.venue}
              </Typography>
            </CardContent>

            <Box
              sx={{
                textAlign: "center",
                borderRadius: "10px",
                paddingTop: "10px",
                height: "120px",
                // border: "2px solid #4dff00",
              }}
            >
              <img
                src={Image}
                style={{
                  paddingRight: "20px",
                  height: "100px",
                  width: "100px",
                }}
              />
              VS
              <img
                src={Images}
                style={{
                  paddingLeft: "20px",
                  height: "100px",
                  width: "100px",
                }}
              />
            </Box>

            {/* <Box sx={{ textAlign: "center" }}>
      
            </Box> */}
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
}
