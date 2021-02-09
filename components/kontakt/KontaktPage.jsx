import React from 'react';
import { makeStyles } from '@material-ui/core';
import HeaderBackground from '../common-components/HeaderBackground';
import TextOnHeader from '../common-components/TextOnHeader';
import HeaderComponent from '../common-components/HeaderComponent';

const useStyles = makeStyles((theme) => ({}));
const KontaktPage = () => {
  const classes = useStyles();
  return (
    <div>
      <HeaderBackground
        bgImage='linear-gradient(rgba(9, 1, 1, 1),rgba(10, 1, 1, .6), rgba(16, 125, 53, .7)), url("https://images.unsplash.com/photo-1567188484330-b018e2f15e3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'
        backgroundPositionXL="calc(100% - 0px) calc(100% - 350px)"
        backgroundPosition1999="calc(100% - 0px) calc(100% - 250px)"
        bgImageMobile='linear-gradient(rgba(16, 19, 25, 0.7), rgba(15, 5, 23, .6)), url("https://images.unsplash.com/photo-1567188484330-b018e2f15e3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'
        backgroundPositionMobile="0"
        height="40vh"
      >
        <HeaderComponent />
        <TextOnHeader header1="KON" header2="TAKT" />
      </HeaderBackground>
    </div>
  );
};

export default KontaktPage;
