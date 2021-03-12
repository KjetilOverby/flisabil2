import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import KontaktPage from '../components/kontakt/KontaktPage';
import FooterComponent from '../components/common-components/FooterComponent';
import ReactGA from 'react-ga';
const useStyles = makeStyles((theme) => ({
  container: {
    display: ' flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));
const kontakt = ({ setTitle }) => {
  const classes = useStyles();
  useEffect(() => {
    ReactGA.initialize('UA-192063702-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className={classes.container}>
      <KontaktPage setTitle={setTitle} />
      <FooterComponent />
    </div>
  );
};

export default kontakt;
