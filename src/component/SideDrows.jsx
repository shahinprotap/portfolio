import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LoginIcon from "@mui/icons-material/Login";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AddHomeIcon from "@mui/icons-material/AddHome";
import { Link } from "react-router-dom";

export default function SideDrows({ children }) {
  const [state, setState] = React.useState({
    left: false,
  });
  const sideMenu = [
    {
      url: "/home",
      nav: "Home",
    },
    {
      url: "/about",
      nav: "About",
    },
    {
      url: "/contact",
      nav: "Contact",
    },
    {
      url: "/service",
      nav: "Service",
    },
    {
      url: "/news",
      nav: "News",
    },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {sideMenu.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <AddHomeIcon /> : <AddBusinessIcon />}
              </ListItemIcon>

              <Link
                to={text.url}
                style={{
                  color: "white",
                  fontSize: "20px",
                  textDecoration: "none",
                }}
              >
                <ListItemText primary={text.nav} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <List>
        {["LogIn", "SignUp"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <LoginIcon /> : <LoginIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>{children}</Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
