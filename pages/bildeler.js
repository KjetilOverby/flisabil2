import React from 'react';
import { makeStyles } from '@material-ui/core';
import BildelerStartPage from '../components/bildeler/BildelerStartPage';
import SectionBildeler from '../components/bildeler/SectionBildeler';
import FooterComponent from '../components/common-components/FooterComponent';

const useStyles = makeStyles((theme) => ({}));
const bildeler = ({ setTitle }) => {
  const classes = useStyles();
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
