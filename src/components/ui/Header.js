import React, {useState} from 'react';
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
            height: "7em"
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

    const handleChange = (e,value) => {
        setValue(value);
    }
    return(
        <React.Fragment>
        <ElevationScroll>
        <AppBar position="fixed" color="primary">
            <Toolbar disableGutters>
                <img alt="logo" src={logo} className={classes.logo}  />
                <Tabs value={Value} className={classes.tabsContainer} onChange={handleChange}>
                    <Tab className={classes.tab} label="Home" component={Link} to="/" />
                    <Tab className={classes.tab} label="The revolution" component={Link} to="/revolution" />
                    <Tab className={classes.tab} label="About Us" component={Link} to="/about" />
                    <Tab className={classes.tab} label="Services" component={Link} to="/services" />
                    <Tab className={classes.tab} label="Contact Us" component={Link} to="/contact" />
                </Tabs>
                <Button variant="contained" color="secondary" className={classes.button}>
                        Free Estimate
                </Button>
            </Toolbar>


        </AppBar>
    </ElevationScroll>
        <div className={classes.toolbarMargin} />
        
    </React.Fragment>


    )
}

export default Header;