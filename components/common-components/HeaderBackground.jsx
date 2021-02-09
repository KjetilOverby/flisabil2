import React from 'react';
import { makeStyles } from '@material-ui/core';

const BackgroundHeaderCompnent = ({
  children,
  bgImage,
  backgroundPositionXL,
  backgroundPosition1999,
  bgImageMobile,
  backgroundPositionMobile,
  height,
  backgroundPositionLG,
}) => {
  const useStyles = makeStyles((theme) => ({
    container: {
      background: bgImage,
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      backgroundSize: 'cover',
      backgroundPosition: backgroundPositionXL,
      backgroundAttachment: 'fixed',
      height: height,
      display: 'flex',
      flexDirection: 'column',
      //backgroundBlendMode: 'darken',
      [theme.breakpoints.down(1999)]: {
        backgroundPosition: backgroundPosition1999,
      },
      [theme.breakpoints.down('lg')]: {
        backgroundPosition: backgroundPositionLG,
      },
      [theme.breakpoints.down('md')]: {
        backgroundAttachment: 'initial',
        backgroundPosition: backgroundPositionMobile,
      },
      [theme.breakpoints.down('sm')]: {
        backgroundPosition: 'calc(100% - 0) calc(100% - 50px)',
      },
      [theme.breakpoints.down('xs')]: {
        background: bgImageMobile,
        backgroundAttachment: 'initial',
        height: '20vh',
        backgroundPosition: backgroundPositionMobile,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      },
    },
  }));
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};

export default BackgroundHeaderCompnent;
