import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import BruktbilerStartPage from '../components/bruktbiler/BruktbilerStartPage';
import FooterComponent from '../components/common-components/FooterComponent';
import SectionBruktbiler from '../components/bruktbiler/SectionBruktbiler';
import ReactGA from 'react-ga';
const useStyles = makeStyles((theme) => ({}));
const bruktbiler = ({ setTitle }) => {
  const classes = useStyles();
  useEffect(() => {
    ReactGA.initialize('UA-192063702-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div>
      <BruktbilerStartPage setTitle={setTitle} />
      <SectionBruktbiler />
      <FooterComponent />
    </div>
  );
};

export default bruktbiler;
