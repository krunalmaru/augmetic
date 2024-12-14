// import { AppBar, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material'
// import React, { useState } from 'react'
// import { navItems } from '../utils/constant'
// import { Link } from 'react-router-dom'

// const Header = () => {
//     const [isDrawerOpen, setDrawerOpen] = useState(false);

//     const toggleDrawer = (open) => (event) => {
//       if (
//         event.type === "keydown" &&
//         (event.key === "Tab" || event.key === "Shift")
//       ) {
//         return;
//       }
//       setDrawerOpen(open);
//     };

//   return (
//     <>
//     <AppBar position="static">
//       <Toolbar>
//         {/* Menu Icon for small screens */}
//         <IconButton
//           size="large"
//           edge="start"
//           color="inherit"
//           aria-label="menu"
//           sx={{ mr: 2 }}
//         >
//           {/* <MenuIcon /> */}
//         </IconButton>

//         {/* Title */}
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Augmetic
//         </Typography>
//         {/* {
//             navItems?.map((ele)=>{
//                 return(
//                     <Link to={ele.to} className='navlinks' >{ele.title}</Link>
//                 )
//             })
//         } */}
//          <Button color="inherit">Login</Button>
//          <Button color="inherit">Sign Up</Button>
//       </Toolbar>
//     </AppBar>
//      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
//      <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
//        <ListItem button>
//          <ListItemText primary="Home" />
//        </ListItem>
//        <ListItem button>
//          <ListItemText primary="About" />
//        </ListItem>
//        <ListItem button>
//          <ListItemText primary="Contact" />
//        </ListItem>
//      </List>
//    </Drawer>
//    </>

//   )
// }

// export default Header

import React, { useState } from "react";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Ensure the menu icon is imported
import { Link } from "react-router-dom"; // Ensure your app is set up with React Router
import { navItems } from "../utils/constant";


const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // Toggle drawer state
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      {/* AppBar for the header */}
      <AppBar position="static" className="appbar">
        <Toolbar>
          {/* Menu Icon for opening the drawer */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 ,display:{lg:'none',sm:'none'}}}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Augmetic
          </Typography>

          {/* Navigation items for larger screens */}
          {navItems?.map((ele) => (
            <Button
              key={ele.to}
              color="inherit"
              component={Link}
              to={ele.to}
              sx={{ display: { xs: "none", sm: "inline-flex" } }}
            >
              {ele.title}
            </Button>
          ))}

          {/* Authentication Buttons */}
        </Toolbar>
      </AppBar>

      {/* Drawer for smaller screens */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          sx={{ width: 250 }}
        >
          {navItems?.map((ele) => (
            <ListItem button key={ele.to} component={Link} to={ele.to}>
              <ListItemText primary={ele.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
