import myStyle from "../Style.module.css";
import { Button, Grid, Typography } from "@mui/material";
import profile from "../assets/img/shahin.png";

const FeaturePost = () => {
  return (
    <>
      <Grid
        container
        className={myStyle.Cover}
        sx={{ placeItems: "center", mt: 2 }}
      >
        <Grid item xs={12} md={4} sx={{ mt: 1, ml: 2 }}>
          <img
            className={myStyle.coverRedius}
            height={300}
            width={"auto"}
            src={profile}
            alt="profile "
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h3">I AM SHAHIN ALAM</Typography>
          <Typography variant="h5" sx={{ my: 2 }}>
            Hey, Thanks for stopping by. I am Shahin, an entrepreneur, Web
            Developer, agency operator based in Dhaka, Bangladesh. On an average
            day, I work 30 hours on my agencies, content creation game & Web
            3.0.
          </Typography>
          <Button>Read More...</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FeaturePost;
