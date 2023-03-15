import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { Box } from "@mui/system";

export default function DetailCard({ dat }) {
  let Image = dat.image;
  let Images = dat.images;
  return (
    <>
      <Grid item xs={12} md={12}>
        <Card>
          <CardActionArea
            sx={{
              padding: "50px",
              border: "3px solid #4dff00",
            }}
          >
            <CardContent>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  color: "#001433",
                  fontFamily: "sans-serif",
                  fontSize: "28px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {dat.name}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: "#001433",
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                  textAlign: "center",
                  paddingTop: "10px",
                }}
              >
                {dat.time}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#001433",
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                  textAlign: "center",
                  paddingTop: "10px",
                }}
              >
                {dat.venue}
              </Typography>
            </CardContent>

            <Box
              sx={{
                textAlign: "center",
                borderRadius: "10px",
                paddingTop: "30px",
                height: "120px",
                display: "flex",
                justifyContent: "space-evenly",
                // border: "2px solid #4dff00",
              }}
            >
              <CardContent>
                <img
                  src={Image}
                  style={{
                    height: "100px",
                    width: "100px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {dat.playnames}
                </Typography>
              </CardContent>

              <Typography
                sx={{
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
              >
                5 - 3
              </Typography>
              <CardContent>
                <img
                  src={Images}
                  style={{
                    height: "100px",
                    width: "100px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {dat.playname}
                </Typography>
              </CardContent>
            </Box>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
}
