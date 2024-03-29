import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Slide,
  useScrollTrigger,
  Menu,
  MenuItem,
  Hidden,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import Logo from "./Logo";
import Logo2 from "./Logo2";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const HeaderComponent = (props) => {
  const [home, setHome] = useState();
  const [bruktbiler, setBruktbiler] = useState();
  const [verksted, setVerksted] = useState();
  const [kontakt, setKontakt] = useState();
  const [tabcolor, setTabcolor] = useState("#fff");
  const useStyles = makeStyles((theme) => ({
    header: {
      height: "10rem",
      [theme.breakpoints.down([1990])]: {
        height: "7rem",
      },

      [theme.breakpoints.down("md")]: {
        height: "8em",
        width: "100vw",
      },
      [theme.breakpoints.down("xs")]: {
        height: "8em",
      },
    },
    appbar: {
      zIndex: 1,
      boxShadow: "none",
      backgroundColor: "transparent",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        alignItems: "space-evenly",
      },
    },
    tabContainer: {
      display: "flex",
      justifyContent: "center",
      position: "relative",

      "&:last-child": {
        marginRight: "2rem",
      },
    },
    tab: {
      color: tabcolor,
      ...theme.typography.tab,
      [theme.breakpoints.down("lg")]: {
        marginLeft: "1px",
        fontSize: "0.9rem",
      },
    },
    drawerIcon: {
      height: "40px",
      width: "60px;",
      color: theme.palette.secondary.main,
      [theme.breakpoints.down("xs")]: {
        marginTop: "-3rem",
      },
    },
    logo: {
      height: "4rem",
      paddingLeft: "4rem",
      [theme.breakpoints.down("lg")]: {
        height: "3em",
        paddingLeft: "4rem",
      },
      [theme.breakpoints.down("md")]: {
        height: "3em",
        paddingLeft: "1rem",
      },
      [theme.breakpoints.down("xs")]: {
        height: "3em",
        paddingLeft: "1rem",
      },
    },
    drawerIconContainer: {
      width: "1rem",
      margin: "0 2rem 0 2rem",
      "&:hover": {
        background: "transparent",
      },
    },
    drawer: {
      background: theme.palette.secondary.main,
      width: "12rem",
    },
    drawerItem: {
      ...theme.typography.tab,
      color: "#333",
      fontSize: "1rem",
      padding: ".7rem 0",
      fontStyle: "italic",
    },
    home: {
      color: home,
    },
    bruktbiler: {
      color: bruktbiler,
    },
    verksted: {
      color: verksted,
    },
    kontakt: {
      color: kontakt,
    },
  }));
  const classes = useStyles();
  const themes = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(themes.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);

  const [activeTab, setActiveTab] = useState(0);

  const changeActiveTab = (e, value) => {
    setActiveTab(value);
  };
  const tabColors = "rgb(143, 143, 143)";
  useEffect(() => {
    if (window.location.pathname === "/") {
      props.setTitle("Forside | FLISA BIL AS");
      setHome(tabColors);
    } else if (window.location.pathname === "/bruktbiler") {
      props.setTitle("Bruktbiler | FLISA BIL AS");
      setBruktbiler(tabColors);
    } else if (window.location.pathname === "/bildeler") {
      props.setTitle("Verksted | FLISA BIL AS");
      setVerksted(tabColors);
    } else if (window.location.pathname === "/kontakt") {
      props.setTitle("Kontakt | FLISA BIL AS");
      setKontakt(tabColors);
    }
  }, [activeTab]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const tabs = (
    <Tabs
      value={activeTab}
      className={classes.tabContainer}
      onChange={changeActiveTab}
      indicatorColor="transparent"
    >
      <a href="/">
        <Logo />
      </a>

      <Link href="/">
        <Tab className={`${classes.tab} ${classes.home}`} label="hjem" />
      </Link>

      <Link href="/bruktbiler">
        <Tab
          className={`${classes.tab} ${classes.bruktbiler}`}
          label="bruktbiler"
        />
      </Link>
      <Link href="/bildeler">
        <Tab
          className={`${classes.tab} ${classes.verksted}`}
          label="verksted"
        />
      </Link>
      <Link href="https://bilxtra.no">
        <Tab className={`${classes.tab}`} label="Bilxtra" />
      </Link>
      <Link href="/kontakt">
        <Tab
          className={`${classes.tab} ${classes.kontakt}`}
          label="Kontakt oss"
        />
      </Link>
      <a href="https://bilxtra.no/">
        <Logo2 />
      </a>

      {/* <Tab
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.tab}
        label="Aktuelt"
      /> */}

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ zIndex: 1500 }}
      >
        <Link href="/stilling">
          <MenuItem onClick={handleClose}>Jobbe hos oss</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <Link href="/salgsbetingelser">
          <MenuItem onClick={handleClose}>Salgsbetingelser</MenuItem>
        </Link>
      </Menu>
    </Tabs>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        classes={{ paper: classes.drawer }}
      >
        {/*  <div className={classes.toolbarContainer} /> */}
        <List disablePadding>
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <Link href="/">
              <ListItemText className={classes.drawerItem} disableTypography>
                HJEM
              </ListItemText>
            </Link>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <Link href="/bruktbiler">
              <ListItemText className={classes.drawerItem} disableTypography>
                BRUKTBILER
              </ListItemText>
            </Link>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <Link href="/bildeler">
              <ListItemText className={classes.drawerItem} disableTypography>
                VERKSTED
              </ListItemText>
            </Link>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <Link href="https://bilxtra.no">
              <ListItemText className={classes.drawerItem} disableTypography>
                BILXTRA
              </ListItemText>
            </Link>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <Link href="kontakt">
              <ListItemText className={classes.drawerItem} disableTypography>
                KONTAKT OSS
              </ListItemText>
            </Link>
          </ListItem>

          {/* <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <ListItemText
              aria-controls="simple-menu"
              aria-haspopup="true"
              onMouseOver={handleClick}
              className={classes.drawerItem}
              disableTypography
            >
              AKTUELT
            </ListItemText>
          </ListItem> */}

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{ zIndex: 1500 }}
          >
            <Link href="/stilling">
              <MenuItem onClick={handleClose}>Jobbe hos oss</MenuItem>
            </Link>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <Link href="/salgsbetingelser">
              <MenuItem onClick={handleClose}>Salgsbetingelser</MenuItem>
            </Link>
          </Menu>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.header}>
            <Hidden lgUp>
              <Logo />
              <Logo2 />
            </Hidden>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default HeaderComponent;
