import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '5rem 0',
    display: 'flex',
    justifyContent: 'space-around',
  },
  containerTag: {
    flexGrow: 1,
  },
  img: {
    minHeight: '100%',
    minWidth: '100%',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '5rem',
  },
}));
const KontaktSection = () => {
  const classes = useStyles();
  return (
    <Container className={classes.containerTag}>
      <Grid container className={classes.container}>
        <Grid item>
          <Grid container className={classes.textContainer}>
            <Grid item>
              <Typography variant="h5">Sentralbord</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ marginBottom: '3rem' }} variant="body1">
                Tel: 62 95 19 10
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">Arild Nygård</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">daglig leder</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ marginBottom: '3rem' }} variant="body1">
                Tel: 45454545
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">Email</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ marginBottom: '3rem' }} variant="body1">
                flisabil@online.no
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">Besøksadresse</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Negardsveien 8</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">2270 Flisa</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <img
            className={classes.img}
            src={require('../../assets/kart.png')}
            alt="map"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default KontaktSection;
