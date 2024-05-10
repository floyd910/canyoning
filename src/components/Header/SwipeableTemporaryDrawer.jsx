import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

import "./Header.css";
export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
        style={{ background: "#d76a03",  height: "100vh" }}
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        
          
            {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon> */}
            <ListItem>
              <Link style={{textDecoration: 'none', color: 'white', fontSize: "18px"}} to="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link style={{textDecoration: 'none', color: 'white', fontSize: "18px"}} to="/tours">Tours</Link>
            </ListItem>
            {/* <ListItem>
              <Link style={{textDecoration: 'none', color: 'white'}} to="/">About Us</Link>
            </ListItem> */}
            <ListItem>
              <Link style={{textDecoration: 'none', color: 'white', fontSize: "18px"}} to="/contact">Contact</Link>
            </ListItem>
         
     
      </List>
    </Box>
  );

  return (
    <div style={{ marginRight: "150px" }}>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuOpenIcon style={{ color: "#d76a03", fontSize: "54px" }} />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
