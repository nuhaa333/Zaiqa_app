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
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import Badge from "@mui/material/Badge";
import { useCart } from "../cartContext";

//import AccountCircleIcon from '@mui/icons-material/AccountCircle';

//import logoImage from "../assets/logo.png";

const Navbar = () => {
  const { totalQuantity } = useCart();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { label: "Home", path: "/", icon: <HomeIcon /> },
    { label: "Menu", path: "/menu", icon: <RestaurantMenuIcon /> },
    { label: "Contact", path: "/contact", icon: <ContactMailIcon /> },
    { label: "Login", path: "/login", icon: <LoginIcon /> },
    //{ label: "Profile", path: "/profile", icon: <AccountCircleIcon /> },
    { label: "Cart", path: "/cart", icon: <ShoppingCartIcon /> },
    { label: "Reservation", path: "/reservation", icon: <EventSeatIcon /> },
  ];

  return (
    <>
      <AppBar position="static" sx={{ background: "#2D2D2D" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center">
            <Typography
              variant="h5"
              sx={{
                color: "rgba(255, 255, 255, 0.9)",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.2)", // frosted glow
                fontWeight: "bold",
                px: 2,
                py: 1,
                background: "rgba(11, 61, 145, 0.3)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)", // for Safari support
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: 2,
              }}
            >
              Zaiqa
            </Typography>
          </Box>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", sm: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4, // Increased spacing between links
              alignItems: "center",
            }}
          >
            {navLinks.map(({ label, path, icon }) => (
              <NavLink
                key={label}
                to={path}
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "#00bcd4" : "white",
                  textDecoration: "none",
                  fontWeight: isActive ? "600" : "500",
                  borderBottom: isActive ? "2px solid #00bcd4" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                })}
              >
                {label === "Cart" ? (
                  <Badge badgeContent={totalQuantity} color="error" showZero>
                    {icon}
                  </Badge>
                ) : (
                  <>
                    {label}
                  </>
                )}
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
            backgroundColor: "rgba(30, 60, 90, 0.5)", // dark bluish tone with moderate opacity
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
            {navLinks.map(({ label, path, icon }) => (
              <ListItem
                button
                key={label}
                component={NavLink}
                to={path}
                sx={({ isActive }) => ({
                  py: 2,
                  color: "#fff",
                  backgroundColor: isActive
                    ? "rgba(255, 255, 255, 0.1)"
                    : "transparent",
                })}
              >
                <Box sx={{ marginRight: 2 }}>
                  {label === "Cart" ? (
                    <Badge badgeContent={totalQuantity} color="error" showZero>
                      {icon}
                    </Badge>
                  ) : (
                    icon
                  )}
                </Box>
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
