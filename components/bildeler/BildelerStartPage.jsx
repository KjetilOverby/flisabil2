import React from 'react';
import { makeStyles } from '@material-ui/core';
import HeaderBackground from '../common-components/HeaderBackground';
import HeaderComponent from '../common-components/HeaderComponent';
import TextOnHeader from '../common-components/TextOnHeader';

const useStyles = makeStyles((theme) => ({}));
const BildelerStartPage = ({ setTitle }) => {
  const classes = useStyles();
  return (
    <div>
      <HeaderBackground
        bgImage='linear-gradient(rgba(9, 1, 1, 1),rgba(9, 1, 1, .8), rgba(16, 125, 153, .4)), url("https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1778&q=80")'
        backgroundPositionXL="calc(100% - 0px) calc(100% - 550px)"
        backgroundPosition1999="calc(100% - 0px) calc(100% - 450px)"
        backgroundPositionLG="calc(100% - 0px) calc(100% - 350px)"
        bgImageMobile='linear-gradient(rgba(9, 10, 11, .7), rgba(10, 10, 10, .6)), url("https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1778&q=80")'
        backgroundPositionMobile="calc(100% - 0px) calc(100% - 0px)"
        height="40vh"
      >
        <HeaderComponent setTitle={setTitle} />
        <TextOnHeader header1="VERK" header2="STED" />
      </HeaderBackground>
    </div>
  );
};

export default BildelerStartPage;
