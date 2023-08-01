import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Typography,
  Container,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import mystyle from "../Style.module.css";
import SideDrows from "./SideDrows";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [valu, setValu] = useState();
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(18,19,19,1) 100%);",
        }}
      >
        <Container>
          <Toolbar>
            <SideDrows>
              <MenuIcon color="action" />
            </SideDrows>
            <Typography variant="h5" className={mystyle.navtitle}>
              Shahin protap
            </Typography>

            <Tabs
              textColor="white"
              value={valu}
              onChange={(e, valu) => setValu(valu)}
              indicatorColor="secondary"
              sx={{ marginLeft: "auto", display: { xs: "none", md: "block" } }}
            >
              <Link to="/">
                <Tab style={{ color: "white" }} label="home" />
              </Link>
              <Link style={{ color: "white" }} to="/service">
                <Tab label="service" />
              </Link>
              <Link to="/contact">
                <Tab style={{ color: "white" }} label="contact" />
              </Link>
              <Link to="/about">
                <Tab style={{ color: "white" }} label="about" />
              </Link>
              <Link style={{ color: "white" }} to="/news">
                <Tab label="news" />
              </Link>
            </Tabs>
            <Link to="/login">
              <Button>LogIn</Button>
            </Link>
            <Link to="/signin">
              <Button>SignUp</Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
