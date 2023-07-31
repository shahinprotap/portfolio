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
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import mystyle from "../Style.module.css";

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
            <MenuIcon color="action" />

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
              <Tab label="home" />
              <Tab label="about" />
              <Tab label="contact" />
              <Tab label="service" />
              <Tab label="news" />
            </Tabs>
            <Button>LogIn</Button>
            <Button>SignUp</Button>

            <Button sx={{ display: { xs: "none", md: "block" } }}>
              <SearchIcon />
              <input type="text" placeholder="Search.."></input>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
