import myStyle from "../Style.module.css";
import { Grid, Typography, Card, Box, Slider } from "@mui/material";
import Lottie from "lottie-react";
import animationData from "../assets/img/developer.json";

const CoverPost = () => {
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Lottie
            style={{ width: "auto", height: 600 }}
            animationData={animationData}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <h1 style={{ paddingTop: 10 }}>My Special Skill Field Here.</h1>
          <Box>
            <Card sx={{ minWidth: 275, minHeight: 80, my: 2 }}>
              <div className={myStyle.Dplx}>
                <Typography variant="h6" color="GrayText">
                  HTML
                </Typography>
                <Typography variant="h6" color="GrayText">
                  95%
                </Typography>
              </div>
              <Box paddingX={3} paddingY={1}>
                <Slider
                  defaultValue={95}
                  aria-label="Small"
                  color="secondary"
                  valueLabelDisplay="auto"
                />
              </Box>
            </Card>
            <Card sx={{ minWidth: 275, minHeight: 80, my: 2 }}>
              <div className={myStyle.Dplx}>
                <Typography variant="h6" color="GrayText">
                  CSS
                </Typography>
                <Typography variant="h6" color="GrayText">
                  80%
                </Typography>
              </div>
              <Box paddingX={3} paddingY={1}>
                <Slider
                  defaultValue={80}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  color="secondary"
                />
              </Box>
            </Card>
            <Card sx={{ minWidth: 275, minHeight: 80, my: 2 }}>
              <div className={myStyle.Dplx}>
                <Typography variant="h6" color="GrayText">
                  javaScript
                </Typography>
                <Typography variant="h6" color="GrayText">
                  75%
                </Typography>
              </div>
              <Box paddingX={3} paddingY={1}>
                <Slider
                  defaultValue={75}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  color="secondary"
                />
              </Box>
            </Card>
            <Card sx={{ minWidth: 275, minHeight: 80, my: 2 }}>
              <div className={myStyle.Dplx}>
                <Typography variant="h6" color="GrayText">
                  React.js
                </Typography>
                <Typography variant="h6" color="GrayText">
                  70%
                </Typography>
              </div>
              <Box paddingX={3} paddingY={1}>
                <Slider
                  defaultValue={70}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  color="secondary"
                />
              </Box>
            </Card>
            <Card sx={{ minWidth: 275, minHeight: 80, my: 2 }}>
              <div className={myStyle.Dplx}>
                <Typography variant="h6" color="GrayText">
                  Node.js
                </Typography>
                <Typography variant="h6" color="GrayText">
                  50%
                </Typography>
              </div>
              <Box paddingX={3} paddingY={1}>
                <Slider
                  defaultValue={50}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  color="secondary"
                />
              </Box>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CoverPost;
