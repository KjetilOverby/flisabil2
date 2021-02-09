import React from 'react';
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTag: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20rem',
    marginBottom: '10rem',
    [theme.breakpoints.down([1999])]: {
      marginTop: '25rem',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '25rem',
      marginBottom: '5rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      marginBottom: 0,
    },
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
    },
  },
  img: {
    [theme.breakpoints.down('md')]: {
      width: '40vw',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
    },
  },
}));
const SectionStartPage = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:800px)');
  return (
    <Container className={classes.containerTag}>
      <Grid container className={classes.container} spacing={isMobile ? 6 : 0}>
        <Grid item>
          <img
            className={classes.img}
            src={require('../../assets/flisabil1.jpg')}
            alt=""
          />
        </Grid>
        <Grid item>
          <img
            className={classes.img}
            src={require('../../assets/flisabil2.jpg')}
            alt="building"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionStartPage;
