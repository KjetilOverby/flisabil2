import React from 'react';
import { makeStyles } from '@material-ui/core';
import BruktbilerStartPage from '../components/bruktbiler/BruktbilerStartPage';
import FooterComponent from '../components/common-components/FooterComponent';
import SectionBruktbiler from '../components/bruktbiler/SectionBruktbiler';

const useStyles = makeStyles((theme) => ({}));
const bruktbiler = ({ setTitle }) => {
  const classes = useStyles();
  return (
    <div>
      <BruktbilerStartPage setTitle={setTitle} />
      <SectionBruktbiler />
      <FooterComponent />
    </div>
  );
};

export default bruktbiler;
