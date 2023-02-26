import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  SwipeableDrawer,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.arcBlue,
    color: "#fff",
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIcon: {
    [theme.breakpoints.down("md")]: {
      height: "50px",
      width: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "40px",
      width: "40px",
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.arcBlue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "#fff",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.arcOrange,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

const Header = (props) => {
  const { value, setValue, selectedIndex, setSelectedIndex } = props;
  const theme = useTheme();
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (e, newvalue) => {
    setValue(newvalue);
  };

  // dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuOptions = [
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "Custome Software Development",
      link: "/customesoftware",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: " ios/android App Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Service",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariacontrol: "simple - menu",
      ariaPopup: anchorEl ? "true" : undefined,
      onmouseOver: handleClick,
    },
    {
      name: "The Revolution",
      link: "/revolution",
      activeIndex: 2,
    },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setSelectedIndex(i);
  };

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/estimate":
          setValue(5);
        default:
          break;
      }
    });

    // if (window.location.pathname === "/" && value !== 0) {
    //   setValue(0);
    // } else if (window.location.pathname === "/services" && value !== 1) {
    //   setValue(1);
    // } else if (window.location.pathname === "/revolution" && value !== 2) {
    //   setValue(2);
    // } else if (window.location.pathname === "/about" && value !== 3) {
    //   setValue(3);
    // } else if (window.location.pathname === "/contact" && value !== 4) {
    //   setValue(4);
    // }

    // switch (window.location.pathname) {
    //   case "/": {
    //     if (value !== 0) {
    //       setValue(0);
    //     }
    //     break;
    //   }
    //   case "/services": {
    //     if (value !== 1) {
    //       setValue(1);
    //       setSelectedIndex(0);
    //     }
    //     break;
    //   }
    //   case "/customesoftware": {
    //     if (value !== 1) {
    //       setValue(1);
    //       setSelectedIndex(1);
    //     }
    //     break;
    //   }
    //   case "/websites": {
    //     if (value !== 1) {
    //       setValue(1);
    //       setSelectedIndex(2);
    //     }
    //     break;
    //   }
    //   case "/mobileapps": {
    //     if (value !== 1) {
    //       setValue(1);
    //       setSelectedIndex(3);
    //     }
    //     break;
    //   }
    //   case "/revolution": {
    //     if (value !== 2) {
    //       setValue(2);
    //     }
    //     break;
    //   }
    //   case "/about": {
    //     if (value !== 3) {
    //       setValue(3);
    //     }
    //     break;
    //   }
    //   case "/contact": {
    //     if (value !== 4) {
    //       setValue(4);
    //     }
    //     break;
    //   }
    //   default:
    //     break;
    // }
  }, [value, menuOptions, selectedIndex, routes]);

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {/* {routes.map((route, index) => {
          <Tab
          key={`${route}${index}`}
            component={Link}
            className={classes.tab}
            to={route.link}
            label={route.name}
            // aria-owns={route.ariaOwns}
            // aria-controls={route.ariacontrol}
            // aria-haspopup={route.ariaPopup}
            // onMouseOver={route.onmouseOver}
            // disableRipple
          />;
        })} */}
        <Tab
          component={Link}
          to="/"
          className={classes.tab}
          label="Home"
          disableRipple
        />
        <Tab
          component={Link}
          to="/services"
          className={classes.tab}
          label="Service"
          disableRipple
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-controls="simple-menu"
          aria-haspopup={anchorEl ? "true" : undefined}
          onMouseOver={handleClick}
        />
        <Tab
          component={Link}
          to="/revolution"
          className={classes.tab}
          label="The Revolution"
          disableRipple
        />
        <Tab
          component={Link}
          to="/about"
          className={classes.tab}
          label="About Us"
          disableRipple
        />
        <Tab
          component={Link}
          to="/contact"
          className={classes.tab}
          label="Contact Us"
          disableRipple
        />
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        disableRipple
        component={Link}
        to="/estimate"
        className={classes.button}
        component={Link}
        to="/estimate"
        onClick={() => setValue(5)}
      >
        Free Estimate
      </Button>
      {/* dropdown  */}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              setValue(1);
              handleClose();
            }}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
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
          {/* {routes.map((route) => {
            <ListItem
                      key={`${route}${route.activeIndex}`}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              divider
              button
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
            >
              <ListItemText
                disableTypography
                className={
                  value === 0
                    ? [classes.drawerItem, classes.drawerItemSelected]
                    : classes.drawerItem
                }
              >
                {route.name}
              </ListItemText>
            </ListItem>;
          })} */}

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            divider
            button
            component={Link}
            to="/"
            selected={value === 0}
            className={{ selected: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem}>Home</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            divider
            button
            component={Link}
            to="/services"
            selected={value === 1}
            className={{ selected: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem}>Services</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            divider
            button
            component={Link}
            to="/revolution"
            selected={value === 2}
            className={{ selected: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem}>
              The Revolution
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            divider
            button
            component={Link}
            to="/about"
            selected={value === 3}
            className={{ selected: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem}>About Us</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            divider
            button
            component={Link}
            to="/contact"
            selected={value === 4}
            className={{ selected: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem}>
              Contact Us
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            button
            component={Link}
            to="/estimate"
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            selected={value === 5}
          >
            <ListItemText className={classes.drawerItem}>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        disableRipple
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
  return (
    <>
      <ElevationScroll>
        <AppBar color="primary" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              className={classes.logoContainer}
              onClick={() => setValue(0)}
              component={Link}
              to="/"
              disableRipple
            >
              <img src={logo} className={classes.logo} alt="company logo" />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
