import {AppBar, Tab, Tabs, Toolbar, useScrollTrigger}  from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles'
import Button from '@material-ui/core/Button';
import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Menu} from '@material-ui/core';
import {MenuItem} from '@material-ui/core';
import logo from '../assets/logo.svg';
import {useMediaQuery} from '@material-ui/core'
import {SwipeableDrawer} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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

const useStyles = makeStyles(theme => ({
  toolbarMargin : {
    ...theme.mixins.toolbar,
    marginBottom : '1em',
    [theme.breakpoints.down('sm')] : {
      marginBottom : '0.5em'
    },
    [theme.breakpoints.down('xs')] : {
      marginBottom : '0.5em'
    }
  },
  logo : {
    height : "5em",
    [theme.breakpoints.down('sm')] : {
      height : '4.5em'
    },
    [theme.breakpoints.down('xs')] : {
      height : '4em'
    }
  },
  logoContainer : {
    padding : 0
  },
  tabContainer : {
    marginLeft : 'auto'
  },
  tab : {
    ...theme.typography.tab,
    minWidth : 10,
    marginLeft : '20px',
    color : 'white',
    "&:hover" : {
      color : 'white',
      textDecoration : 'none'
    }
  },
  button : {
    ...theme.typography.estimate,
    borderRadius : '50px',
    marginRight : '20px',
    marginLeft : '20px',
    height : '40px'
  },
  menu : {
    backgroundColor : theme.palette.common.blue,
    color : 'white',
    borderRadius :'0px'
  },
  menuItem : {
    ...theme.typography.tab,
    opacity : 0.7,
    "&:hover" :{
      color : 'white',
      opacity : 1
    }
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawerIcon: {
    height: "30px",
    width: "30px"
  },
  drawer: {
    backgroundColor: theme.palette.common.blue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange
  },
  drawerItemSelected: {
    "& .MuiListItemText-root" : {
      opacity : 1
    }
  },
  appbar : {
    zIndex : theme.zIndex.modal + 1
  }
}))
  
    function Header(props) {
      const classes = useStyles();
      const theme = useTheme();
      const matches = useMediaQuery(theme.breakpoints.down('sm'));
      const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

      const [openDrawer, setOpenDrawer] = useState(false);
      const [value, setValue] = useState(0);
      const [anchorEl, setAnchorEl] = useState(null);
      const [openMenu, setOpenMenu] = useState(false);
      const[selectedIndex, setSelectedIndex] = useState(0);
      
      let handleChange = (e, newValue) => {
        setValue(newValue)
      }

      const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
      }

      const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        setSelectedIndex(i)
      }
      const handleClose = () => {
        setAnchorEl(null);
        setOpenMenu(false);
      }
      const menuOptions = [{name:'Services', link:'/services'}, {name:'Custom Software Development', link:'/customsoftware'}, 
                          {name:'ios/Android App Development', link:'/mobileapps'},
                            {name:'Website Development', link:'/websites'}]
      useEffect(() => {
        if(window.location.pathname === "/" && value !== 0) {
          setValue(0);
        } else if(window.location.pathname === "/services" && value !== 1){
          setValue(1);
        } else if (window.location.pathname === "/revolution" && value !== 2) {
          setValue(2);
        }else if(window.location.pathname === "/about" && value !== 3) {
          setValue(3);
        }else if(window.location.pathname === "/contact" && value !== 4) {
          setValue(4);
        }else if(window.location.pathname === "/estimate" && value !== 5) {
          setValue(5);
        }

        switch(window.location.pathname){
          case "/" :
            if(value !== 0) {
              setValue(0)
            }
            break;
          case "/services" :
            if(value !== 1) {
              setValue(1)
              setSelectedIndex(0)
            }
            break;
          case "/customsoftware" :
            if(value !== 1) {
              setValue(1)
              setSelectedIndex(1)
            }
            break;
          case "/mobileapps" :
            if(value !== 1) {
              setValue(1)
              setSelectedIndex(2)
            }
            break;
          case "/websites" :
            if(value !==1) {
              setValue(1)
              setSelectedIndex(3)
            }
            break;
          case "/revolution" : 
            if(value !== 2){
              setValue(2)
            }
            break;
          case "/about" :
            if(value !== 3) {
              setValue(3)
            }
            break;
          case "/contact" :
            if(value !== 4) {
              setValue(4)
            }
            break;
          case "/estimate" :
            if(value !== 5){
              setValue(5)
            }
            break;
          default : 
            break;
        }
      }, [value])

    const tabs =(
      <React.Fragment>
          <Tabs value={value} onChange={handleChange} 
                      className={classes.tabContainer} indicatorColor="primary" > 
                  <Tab className={classes.tab} component={Link}
                      to="/" label="Home" />
                  <Tab 
                        aria-owns = {anchorEl ? "simple-menu" : undefined}
                        aria-haspopup = {anchorEl ? "true" : undefined}
                        className={classes.tab} 
                        component={Link}
                        onMouseOver={event =>handleClick(event) }
                        to="/services" 
                        label="Services"
                  />
                  <Tab className={classes.tab} component={Link}
                      to="/revolution" label="The Revolution" />
                  <Tab className={classes.tab} component={Link}
                      to="/about" label="About Us" />
                  <Tab className={classes.tab} component={Link}
                      to='/contact' label='Contact Us' />
                </Tabs>
                <Button variant="contained" color="secondary" className={classes.button}>
                  Free Estimate
                </Button>
                <Menu id="simple-menu" 
                      open={openMenu} 
                      anchorEl={anchorEl} 
                      onClose={handleClose}
                      elevation= {0}
                      style={{zIndex:1302}}
                      classes = {{paper : classes.menu}}
                      MenuListProps= {{onMouseLeave : handleClose}}>
                        {menuOptions.map((option, i) => (
                          <MenuItem
                            key={`$(option)$(i)`}
                            component={Link}
                            to={option.link}
                            classes={{ root: classes.menuItem }}
                            onClick={event => {
                              handleMenuItemClick(event, i);
                              setValue(1);
                              handleClose();
                            }}
                            selected={i === props.selectedIndex && value === 1}
                          >
                            {option.name}
                </MenuItem>
              ))}
                </Menu>
      </React.Fragment>
    )

    const drawer = (
      <React.Fragment>
        <SwipeableDrawer
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          onOpen={() => setOpenDrawer(true)}
          classes={{ paper: classes.drawer }}
        >
          <div className={classes.toolbarMargin} />
          <List disablePadding>
            <ListItem
                divider button component={Link} to='/'
                onClick={() => {setOpenDrawer(false) ;setValue(0)}} selected={value===0}
                classes = {{selected:classes.drawerItemSelected}} >
                  <ListItemText 
                      className={classes.drawerItem} 
                      disableTypography>Home</ListItemText>
            </ListItem>
            <ListItem
                divider button component={Link} to='/services'
                onClick={() => {setOpenDrawer(false); setValue(1)}} selected={value===1}
                classes = {{selected:classes.drawerItemSelected}}>
                  <ListItemText 
                      className={classes.drawerItem} 
                      disableTypography>Services</ListItemText>
            </ListItem>
            <ListItem
                divider button component={Link} to='/revolution'
                onClick={() => {setOpenDrawer(false); setValue(2)}} selected={value===2}
                classes = {{selected:classes.drawerItemSelected}}>
                  <ListItemText 
                      className={classes.drawerItem} 
                      disableTypography>The Revolution</ListItemText>
            </ListItem>
            <ListItem
                divider button component={Link} to='/about'
                onClick={() => {setOpenDrawer(false); setValue(3)}} selected={value===3}
                classes = {{selected:classes.drawerItemSelected}}>
                  <ListItemText 
                      className={classes.drawerItem} 
                      disableTypography>About Us</ListItemText>
            </ListItem>
            <ListItem
                divider button component={Link} to='/contact'
                onClick={() => {setOpenDrawer(false); setValue(4)}} selected={value===4}
                classes = {{selected:classes.drawerItemSelected}}>
                  <ListItemText 
                      className={classes.drawerItem} 
                      disableTypography>Contact Us</ListItemText>
            </ListItem>
            <ListItem
                divider button component={Link} to='/estimate'
                onClick={() => {setOpenDrawer(false); setValue(5)}}
                classes={{root: classes.drawerItemEstimate, selected:classes.drawerItemSelected}} 
                selected={value===5}>
                  <ListItemText 
                      className={classes.drawerItem} 
                      disableTypography>Free Estimate</ListItemText>
            </ListItem>
          </List>
        </SwipeableDrawer>
        <IconButton
                className={classes.drawerIconContainer}
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple>
          <MenuIcon className={classes.drawerIcon} />
        </IconButton>
      </React.Fragment>
    )

    return (
        <div>
            <ElevationScroll>
            <AppBar position="fixed" className={classes.appbar}>
                <Toolbar disableGutters>
                <Button component={Link} to="/" className={classes.logoContainer} disableRipple onClick={()=>setValue(0)}>
                  <img alt="logo" className={classes.logo} src={logo} />
                </Button>
                {matches ? drawer : tabs}
                </Toolbar>  
            </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </div>
    )
}

export default Header; 