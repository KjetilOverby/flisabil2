import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import BildelerStartPage from '../components/bildeler/BildelerStartPage';
import SectionBildeler from '../components/bildeler/SectionBildeler';
import FooterComponent from '../components/common-components/FooterComponent';
import ReactGA from 'react-ga';
const useStyles = makeStyles((theme) => ({}));
const bildeler = ({ setTitle }) => {
  const classes = useStyles();
  useEffect(() => {
    ReactGA.initialize('UA-192063702-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <BildelerStartPage setTitle={setTitle} />
      <SectionBildeler />
      <FooterComponent />
    </div>
  );
};

export default bildeler;
