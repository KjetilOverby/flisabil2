import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  '@keyframes slideIn1': {
    '0%': {
      transform: 'translate(-250px, -280px)',
      opacity: 0,
    },
    '50%': {
      transform: 'translate(0px, 0px)',
      animationTimingFunction: 'ease-in-out',
    },
  },
  '@keyframes slideIn2': {
    '0%': {
      transform: 'translate(250px, 280px)',
      opacity: 0,
    },
    '50%': {
      transform: 'translate(0px, 0px)',
      animationTimingFunction: 'ease-in-out',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3rem',
    [theme.breakpoints.down('xs')]: {
      marginTop: '0',
    },
  },
  header: {
    color: '#fff',
    fontWeight: '400',
    [theme.breakpoints.down([1999])]: {
      fontSize: '4rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
    },
  },
  header1: {
    animation: '$slideIn1 3s',
  },
  header2: {
    animation: '$slideIn2 3s',
  },
}));
const TextOnHeader = ({ header1, header2 }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item>
        <Typography
          className={`${classes.header} ${classes.header1}`}
          variant="h1"
        >
          {header1}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          className={`${classes.header} ${classes.header2}`}
          variant="h1"
        >
          {header2}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TextOnHeader;
