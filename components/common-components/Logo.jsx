import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      marginTop: '-3rem',
    },
  },
  logo: {
    height: '2rem',
    marginRight: '10rem',
    [theme.breakpoints.down([1600])]: {
      marginRight: '3rem',
    },
    [theme.breakpoints.down([1400])]: {
      marginRight: '1rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '1.5rem',
    },
    [theme.breakpoints.down([350])]: {
      height: '1rem',
    },
  },
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item>
        <img
          className={classes.logo}
          src="https://lh3.googleusercontent.com/pw/ACtC-3ciOjsXUiLhykYRyHY60jTVfPMsvPsoPrXG0I_cwe6BVF5cnKTdwXvXi9Lbn3aYt8vUuSAK_RSWKA02TSaS5lUGocPkNqM94aTO7_bn4jENDRUCiaO_lho7Inmo0iPoYaTyslW3yREN3Nn7lqkR2E0a=w837-h183-no?authuser=0"
          alt=""
        />
      </Grid>
      {/* <Grid container className={classes.container}>
      <Grid item>
        <img
          className={classes.logo}
          src={require('../../assets/Flisabil_bilxtra_logo.png')}
          alt=""
        />
      </Grid> */}
      {/* <Grid item>
        <img
          className={classes.logo2}
          src={require('../../assets/bilxtra.png')}
          alt=""
        />
      </Grid> */}
    </Grid>
  );
};

export default Logo;
