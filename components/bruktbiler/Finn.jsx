import React from 'react';
import { makeStyles } from '@material-ui/core';
import Iframe from 'react-iframe';

const useStyles = makeStyles((theme) => ({
  iframe: {
    width: '50vw',
    minHeight: '100vh',
    border: 'none',
    marginTop: '5rem',
    [theme.breakpoints.down('md')]: {
      width: '80vw',
    },
    [theme.breakpoints.down('xs')]: {
      width: '95vw',
    },
  },
}));
const Finn = () => {
  const classes = useStyles();
  return (
    <div>
      <Iframe
        url="https://www.finn.no/pw/search/car-norway?orgId=1180510454"
        id="myId"
        className={classes.iframe}
        display="initial"
        position="relative"
      />
    </div>
  );
};

export default Finn;
