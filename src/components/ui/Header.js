import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/logo.svg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";




function ElevationScroll(props) {
    const { children } = props;
   
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0
    });
  }

const useStyles = makeStyles( theme => ({
        toolbarMargin: {
            ...theme.mixins.toolbar,
            marginBottom: "3em"
        },
        logo: {
            height: "8em"
        },
        logoContainer: {
            padding: 0,
            "&:hover": {
                backgroundColor: "transparent"
            }
        },
        tabsContainer: {
            marginLeft: "auto"
        },
        tab: {
            ...theme.typography.tab,
            minWidth: "10px",
            marginLeft: "25px" 
        },
        button: {
            ...theme.typography.estimate,
            borderRadius: "50px",
            marginLeft: "50px",
            marginRight: "25px",
            height: "45px",

        }
}))
  

const Header = () => {
    const [Value, setValue] = useState(0);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleChange = (e,value) => {
        setValue(value);
    };

    const handleClick = (e) => {
        console.log(e.currentTarget);
        setAnchorEl(e.currentTarget);
        setOpen(true);
    }

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpen(false);
    }

    useEffect(()=> {
        if(window.location.pathname === "/" && Value !== 0){
            setValue(0);
        } else if(window.location.pathname === "/revolution" && Value !== 1) {
            setValue(1);
        } else if(window.location.pathname === "/about" && Value !== 2){
            setValue(2);
        }else if(window.location.pathname === "/services" && Value !== 3) {
            setValue(3);
        }else if(window.location.pathname === "/contact" && Value !== 4) {
            setValue(4);
        } else if(window.location.pathname === "/estimate" &&  Value !== 5){
            setValue(5)
        }


    })
    return(
        <React.Fragment>
        <ElevationScroll>
        <AppBar position="fixed" color="primary">
            <Toolbar disableGutters>
                <Button component={Link} to="/" 
                        className={classes.logoContainer}
                        onClick={()=> setValue(0)} 
                        disableRipple
                >
                    <img alt="logo" src={logo} className={classes.logo}  />
                </Button>
                <Tabs value={Value} className={classes.tabsContainer} onChange={handleChange}>
                    <Tab className={classes.tab} label="Home" component={Link} to="/" />
                    <Tab className={classes.tab} label="The revolution" component={Link} to="/revolution" />
                    <Tab className={classes.tab} label="About Us" component={Link} to="/about" />
                    <Tab 
                            aria-owns={anchorEl ? "simple-menu" : undefined}
                            aria-haspopup={anchorEl ? "true" : undefined}
                            onMouseOver={event => handleClick(event)}
                            className={classes.tab} 
                            label="Services" 
                            component={Link} 
                            to="/services" 

                    />
                    <Tab className={classes.tab} label="Contact Us" component={Link} to="/contact" />
                </Tabs>
                <Button variant="contained" color="secondary"
                        className={classes.button} component={Link} 
                        to="/estimate"
                        onClick={()=> setValue(5)}
                >
                        Free Estimate
                </Button>

                    <Menu id="simple-menu" 
                        anchorEl={anchorEl} 
                        open={open} 
                        onClose={handleClose}
                        MenuListProps={{onMouseLeave: handleClose}}
                    >
                    
                        <MenuItem onClick={()=>{handleClose(); setValue(3)}} component={Link} to="customsoftware">Custom Software Development</MenuItem>
                        <MenuItem onClick={()=>{handleClose(); setValue(3)}} component={Link} to="mobileapps">Mobile App Development</MenuItem>
                        <MenuItem onClick={()=>{handleClose(); setValue(3)}} component={Link} to="websites">Website Development</MenuItem>

                    </Menu>
            </Toolbar>


        </AppBar>
    </ElevationScroll>
        <div className={classes.toolbarMargin} />
        
    </React.Fragment>


    )
}

export default Header;