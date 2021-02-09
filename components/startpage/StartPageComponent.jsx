import React from 'react';
import { makeStyles } from '@material-ui/core';
import HeaderBackground from '../common-components/HeaderBackground';
import HeaderComponent from '../common-components/HeaderComponent';
import TextOnHeaderComponent from './TextOnHeaderComponent';
import TextBox from './TextBox';

// https://images.unsplash.com/photo-1495435229349-e86db7bfa013?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2129&q=80

// https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80

// https://images.unsplash.com/photo-1603553219987-fff0d6b01479?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1612&q=80

// https://images.unsplash.com/photo-1585503418537-88331351ad99?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80

const useStyles = makeStyles((theme) => ({}));
const StartPageComponent = () => {
  const classes = useStyles();
  return (
    <HeaderBackground
      bgImage='linear-gradient(#000000,rgba(40, 1, 1, .6),rgba(90, 100, 203, .5), rgba(260, 150, 233, .1)), url("https://images.unsplash.com/photo-1611088136159-d074182f2ca6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80")'
      backgroundPositionXL="calc(100% - 0px) calc(100% - 130px)"
      backgroundPosition1999="calc(100% - 0px) calc(100%  - 55px)"
      backgroundPositionLG="calc(100% - 0px) calc(100%  - 55px)"
      bgImageMobile='linear-gradient(rgba(16, 14, 255, 0.6), rgba(1, 5, 2, .4)), url("https://images.unsplash.com/photo-1611088136159-d074182f2ca6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80")'
      backgroundPositionMobile="0"
      height="70vh"
    >
      <HeaderComponent />
      <TextOnHeaderComponent />
    </HeaderBackground>
  );
};

export default StartPageComponent;
