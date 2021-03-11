import React from 'react';
import { makeStyles } from '@material-ui/core';
import KontaktPage from '../components/kontakt/KontaktPage';
import KontaktSection from '../components/kontakt/KontaktSection';
import FooterComponent from '../components/common-components/FooterComponent';

const useStyles = makeStyles((theme) => ({
  container: {
    display: ' flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));
const kontakt = ({ setTitle }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <KontaktPage setTitle={setTitle} />
      <FooterComponent />
    </div>
  );
};

export default kontakt;
