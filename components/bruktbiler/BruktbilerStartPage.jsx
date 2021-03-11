import React from 'react';
import { makeStyles } from '@material-ui/core';
import HeaderBackground from '../common-components/HeaderBackground';
import HeaderComponent from '../common-components/HeaderComponent';
import TextOnHeader from '../common-components/TextOnHeader';

const useStyles = makeStyles((theme) => ({}));
const BruktbilerStartPage = ({ setTitle }) => {
  const classes = useStyles();
  return (
    <div>
      <HeaderBackground
        bgImage='linear-gradient(#000000,rgba(9, 1, 1, .8),rgba(10, 10, 20, .2), rgba(16, 25, 53, .2)), url("https://images.unsplash.com/photo-1578411573484-aee15366825b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80")'
        backgroundPositionXL="calc(100% - 0px) calc(100% - 290px)"
        backgroundPosition1999="calc(100% - 0px) calc(100% - 190px)"
        backgroundPositionLG="calc(100% - 0px) calc(100% - 130px)"
        bgImageMobile='linear-gradient(rgba(16, 14, 55, 0.8), rgba(15, 5, 25, .6)), url("https://images.unsplash.com/photo-1578411573484-aee15366825b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80")'
        backgroundPositionMobile="0"
        height="40vh"
      >
        <HeaderComponent setTitle={setTitle} />
        <TextOnHeader header1="BRUKT" header2="BILER" />
      </HeaderBackground>
    </div>
  );
};

export default BruktbilerStartPage;
