import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginRight: '5rem',
    display: 'flex',
    flexDirection: 'column',
  },
  LogoHeaderContainer: {
    marginBottom: '-1.1rem',
  },
  logoType: {
    fontFamily: 'Ruda',
    fontStyle: 'italic',
    fontSize: '2rem',
    fontWeight: 900,
    letterSpacing: '1.3px',
    color: '#ffffff',
  },
  logoTypeFlisa: {
    marginRight: '.5rem',
    color: '#fff',
    letterSpacing: '1.5px',
  },
  underTextLogo: {
    fontSize: '.7rem',
    fontFamily: 'Ruda',
    fontStyle: 'italic',
    letterSpacing: -0.6,
    color: 'white',
  },
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.LogoHeaderContainer}>
        <Typography className={`${classes.logoType} ${classes.logoTypeFlisa}`}>
          Flisa Bil
        </Typography>
      </Grid>

      <Grid item>
        <typography className={classes.underTextLogo}>
          62 95 19 10 - www.flisabil.no
        </typography>
      </Grid>
    </Grid>
  );
};

export default Logo;
