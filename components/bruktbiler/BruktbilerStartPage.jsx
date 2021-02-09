import React from 'react';
import { makeStyles } from '@material-ui/core';
import HeaderBackground from '../common-components/HeaderBackground';
import HeaderComponent from '../common-components/HeaderComponent';
import TextOnHeader from '../common-components/TextOnHeader';

const useStyles = makeStyles((theme) => ({}));
const BruktbilerStartPage = () => {
  const classes = useStyles();
  return (
    <div>
      <HeaderBackground
        bgImage='linear-gradient(#000000,rgba(9, 1, 1, .7),rgba(122, 100, 200, .4), rgba(16, 125, 253, .8)), url("https://images.unsplash.com/photo-1549556889-cba541c33c0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80")'
        backgroundPositionXL="calc(100% - 0px) calc(100% - 230px)"
        backgroundPosition1999="calc(100% - 0px) calc(100% - 150px)"
        backgroundPositionLG="calc(100% - 0px) calc(100% - 120px)"
        bgImageMobile='linear-gradient(rgba(16, 14, 55, 0.8), rgba(15, 55, 25, .6)), url("https://images.unsplash.com/photo-1549556889-cba541c33c0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80")'
        backgroundPositionMobile="0"
        height="40vh"
      >
        <HeaderComponent />
        <TextOnHeader header1="BRUKT" header2="BILER" />
      </HeaderBackground>
    </div>
  );
};

export default BruktbilerStartPage;
