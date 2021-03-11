import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      marginTop: '-3rem',
    },
  },
  logo: {
    height: '5rem',
    marginLeft: '10rem',
    [theme.breakpoints.down([1600])]: {
      marginLeft: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '3rem',
    },
  },
  logo2: {
    height: '4rem',
    marginTop: '-1.3rem',
    marginLeft: '-.4rem',
  },
}));

const Logo2 = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item>
        <img
          className={classes.logo}
          src="https://lh3.googleusercontent.com/pw/ACtC-3fpZgF-maBHdFMXlTZVczrVHV8d4pEGvUnVA9mgNa7yOL1ZPmHdfO0Ts_ZRFxlpWsi64UFNHDA8JM4zdTnOgpLNLWMiOAAAFhUAhy67_6z6G8B9Hgp4mZ7FfRV7bAWDXcqUORNg4QAyzKBlYOkVndgV=w887-h400-no?authuser=0"
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

export default Logo2;
