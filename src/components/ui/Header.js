import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/rtclogo.jpeg";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from "@material-ui/core/styles";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon  from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]:{
      marginBottom: "2em"
    }, 
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em"
    }
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]:{
      height: "7em" 
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em"
    }
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabsContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: "10px",
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
  menu: {
    backgroundColor: theme.palette.common.arcBlue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
    ...theme.typography.tab,
  },
  drawerIconContainer: {
    marginLeft: "auto", 
    "&:hover": {
      backgroundColor: "transparent"
    }
  }, 
  drawerIcon: {
    width: "50px", 
    height: "50px"
  }, 
  drawer: {
    backgroundColor: theme.palette.common.arcBlue, 
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white"
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.arcOrange
  }, 
  drawerItemSelected: {
    opacity: 1
  }
}));

const Header = () => {
  const [Value, setValue] = useState(0);
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    console.log(e.currentTarget);
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };
  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customsoftware" },
    { name: "Mobile App Development", link: "/mobileapps" },
    { name: "Website Development", link: "/websites" },
  ];

  useEffect(() => {
    if (window.location.pathname === "/" && Value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/revolution" && Value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/about" && Value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/services" && Value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contact" && Value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/estimate" && Value !== 5) {
      setValue(5);
    }

    switch (window.location.pathname) {
      case "/":
        if (Value !== 0) {
          setValue(0);
        }
        break;
      case "/revolution":
        if (Value !== 1) {
          setValue(1);
        }
        break;
      case "/about":
        if (Value !== 2) {
          setValue(2);
        }
        break;
      case "/services":
        if (Value !== 3) {
          setValue(3);
          setSelectedIndex(0);
        }
        break;
      case "/customsoftware":
        if (Value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobileapps":
        if (Value !== 2) {
          setValue(2);
          setSelectedIndex(2);
        }
        break;
      case "/websites":
        if (Value !== 3) {
          setValue(3);
          setSelectedIndex(3);
        }
        break;
      case "/contact":
        if (Value !== 4) {
          setValue(4);
        }
        break;
      default:
        break;
    }
  });

  const tabs = (
    <React.Fragment>
                  <Tabs
              value={Value}
              className={classes.tabsContainer}
              onChange={handleChange}
            >
              <Tab
                className={classes.tab}
                label="Home"
                component={Link}
                to="/"
              />
              <Tab
                className={classes.tab}
                label="The revolution"
                component={Link}
                to="/revolution"
              />
              <Tab
                className={classes.tab}
                label="About Us"
                component={Link}
                to="/about"
              />
              <Tab
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                onMouseOver={(event) => handleClick(event)}
                className={classes.tab}
                label="Services"
                component={Link}
                to="/services"
              />
              <Tab
                className={classes.tab}
                label="Contact Us"
                component={Link}
                to="/contact"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              component={Link}
              to="/estimate"
              onClick={() => setValue(5)}
            >
              Free Estimate
            </Button>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              classes={{ paper: classes.menu }}
              MenuListProps={{ onMouseLeave: handleClose }}
              elevation={0}
            >
              {menuOptions.map((option, i) => (
                <MenuItem
                  component={Link}
                  key={option}
                  to={option.link}
                  classes={{ root: classes.menuItem }}
                  onClick={(event) => {
                    handleMenuItemClick(event, i);
                    setValue(3);
                    handleClose();
                  }}
                  selected={i === selectedIndex}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
    </React.Fragment>
  );
   const drawer = (
     <React.Fragment>
       <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS}
                    open={openDrawer} onClose={()=> setOpenDrawer(false)} 
                    onOpen={() => setOpenDrawer(true)} 
                    classes={{paper: classes.drawer}}
        >
                        <List disablePadding>
                        <ListItem divider component={Link} to="/" 
                                  onClick={()=> {setOpenDrawer(false); setValue(0)}}
                                  selected={Value === 0 }
                        >
                              <ListItemText className={Value === 0 ? [classes.drawerItemSelected, classes.drawerItem] : classes.drawerItem} disableTypography>Home</ListItemText>
                        </ListItem>
                        <ListItem divider component={Link} to="/revolution" 
                                onClick={()=> {setOpenDrawer(false); setValue(1)}}
                                selected={Value === 1 }
                          >
                              <ListItemText className={Value === 1 ? [classes.drawerItemSelected, classes.drawerItem] : classes.drawerItem} divider disableTypography>The revolution</ListItemText>
                            </ListItem>
                            <ListItem divider component={Link} to="/about" 
                                      onClick={()=> {setOpenDrawer(false); setValue(2)}}
                                      selected={Value === 2} 
                            >
                              <ListItemText className={Value === 2 ? [classes.drawerItemSelected, classes.drawerItem] : classes.drawerItem} disableTypography>About Us</ListItemText>
                            </ListItem>
                            <ListItem divider component={Link} to="/services"
                                     onClick={()=> {setOpenDrawer(false); setValue(3)}}
                                     selected= {Value === 3}
                                     
                            >
                              <ListItemText className={Value === 3 ? [classes.drawerItemSelected, classes.drawerItem] : classes.drawerItem} disableTypography>Services</ListItemText>
                            </ListItem>  
                            <ListItem divider component={Link} to="/contact" 
                                      onClick={()=> {setOpenDrawer(false); setValue(4)}}
                                      selected= {Value === 4}
                            >
                              <ListItemText className={Value === 4 ? [classes.drawerItemSelected, classes.drawerItem] : classes.drawerItem} disableTypography>Contact Us</ListItemText>
                            </ListItem>   
                            <ListItem className={classes.drawerItemEstimate} divider 
                                      component={Link} to="/estimate" 
                                      onClick={()=> {setOpenDrawer(false); setValue(5)}}
                                      selected={Value === 5} 
                            > 
                              <ListItemText className={Value === 5? [classes.drawerItemSelected, classes.drawerItem] : classes.drawerItem} disableTypography>Free Estimate</ListItemText>
                            </ListItem>   
                        </List>
                    </SwipeableDrawer>
                    <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                      <MenuIcon className={classes.drawerIcon}/>
                    </IconButton>
     </React.Fragment>
   )
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
              disableRipple
            >
              <img alt="logo" src={logo} className={classes.logo} />
            </Button>
            {matches ? drawer : tabs}
            
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
