import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logoImage from '../assets/logo.png';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "Contact", path: "/contact" },
    { label: "Login", path: "/login" },
    { label: "Cart", path: "/cart" },
    { label: "Reservation", path: "/reservation" },
  ];

  return (
    <>
      <AppBar position="static" sx={{ background: 'linear-gradient(to right, #d4145a, #fbb03b)' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center">
            <img src={logoImage} alt="zaiqa" style={{ height: 70, width: 100 }} />
          </Box>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 4, // Increased spacing between links
              alignItems: 'center',
            }}
          >
            {navLinks.map(({ label, path }) => (
              <NavLink
                key={label}
                to={path}
                className="nav-link"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '500',
                }}
              >
                {label}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            background: 'linear-gradient(to right, #fbb03b,rgb(249, 117, 167))', // Light gradient
          },
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List sx={{ py: 2 }}>
            {navLinks.map(({ label, path }) => (
              <ListItem
                button
                key={label}
                component={NavLink}
                to={path}
                sx={{
                  py: 2, // vertical padding to increase space between items
                  color: '#333',
                }}
              >
                <ListItemText primary={label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;

/*
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logoImage from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header>
            <div id="navbar">
                <div className="logo">
                    <img src={logoImage} alt="zaiqa" />
                </div>
                <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" onClick={closeMenu} end>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/menu" className="nav-link" onClick={closeMenu}>Menu</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login" className="nav-link" onClick={closeMenu}>Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/cart" className="nav-link" onClick={closeMenu}>Cart</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/reservation" className="nav-link" onClick={closeMenu}>Reservation</NavLink>
                    </li>
                </ul>

                <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
*/
