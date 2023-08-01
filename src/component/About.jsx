import {
  Grid,
  Typography,
  IconButton,
  TextField,
  Button,
  Box,
} from "@mui/material";
import {
  Call,
  FmdGood,
  Email,
  Twitter,
  Facebook,
  Instagram,
  YouTube,
  LinkedIn,
  Pinterest,
} from "@mui/icons-material";

// import mystyle from "./style.module.css"

const About = () => {
  return (
    <>
      {/* <h1 className={mystyle.textCenter}></h1>    */}

      <Grid
        container
        sx={{ width: "100%", mt: "5" }}
        rowSpacing={5}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} md={4}>
          <h2 style={{ paddingTop: 10 }}>Contact Details</h2>
          <br />
          <Typography variant="body2">
            Here to optimize your online presence with SEO expertise
          </Typography>
          <br />
          <Box sx={{ placeItems: "center", textAlign: "left" }}>
            <Typography>
              <IconButton color="inherit">
                <FmdGood />
              </IconButton>{" "}
              Mohakhali, Dhaka 1212
            </Typography>
            <Typography>
              <IconButton color="primary">
                <Call />
              </IconButton>
              Mobile: +8801847226465
            </Typography>
            <Typography>
              <IconButton color="error">
                <Email />
              </IconButton>{" "}
              Email: contact@Shahinprotap.com
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <h2 style={{ paddingTop: 10 }}>Important Links</h2>
          <br />
          <hr />
          <Box>
            <IconButton
              color="info"
              href="https://www.facebook.com/sbdigitalsolutions23"
              target="_blank"
            >
              <Facebook />
            </IconButton>
            <IconButton color="primary">
              <Twitter />
            </IconButton>
            <IconButton color="error">
              <Pinterest />
            </IconButton>
            <IconButton color="secondary">
              <Instagram />
            </IconButton>
            <IconButton color="error">
              <YouTube />
            </IconButton>
            <IconButton color="info">
              <LinkedIn />
            </IconButton>
          </Box>
          <hr />
        </Grid>

        <Grid item xs={12} md={4}>
          <h2 style={{ paddingTop: 10 }}>Join My Mailing List</h2>

          <br />
          <Typography variant="body2">
            Sign up to receive email updates on the latest blogs, offers and
            more.
          </Typography>
          <Box sx={{ textAlign: "left" }}>
            <TextField
              sx={{ my: 2 }}
              fullWidth
              type="email"
              label="Email"
              name="email"
              id="email"
            />
            <Button
              sx={{ mb: 2, alignItems: "flex-start" }}
              variant="outlined"
              type="submit"
              size="medium"
            >
              SignUp
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
