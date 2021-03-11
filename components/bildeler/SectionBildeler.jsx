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
    margin: '8rem 0 5rem 0',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {},
    [theme.breakpoints.down('xs')]: {
      margin: '2rem 0 2rem 0',
    },
  },
  containerTag: {
    flexGrow: 1,
  },
  header: {
    margin: '0rem 0 3rem 0',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
      margin: '2rem 0',
    },
  },
  img: {
    maxHeight: '100%',
    maxWidth: '100%',
    [theme.breakpoints.down([1300])]: {
      marginLeft: '1rem',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '3rem',
      marginLeft: 0,
    },
  },
  textContainer: {},
}));
const SectionBildeler = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:1300px)');
  return (
    <Container maxWidth="lg" className={classes.containerTag}>
      <Grid container className={classes.container} spacing={isMobile ? 8 : 0}>
        <Grid item lg={6}>
          <Grid container>
            <Grid item>
              <Typography className={classes.header} variant="h4">
                Trenger du deler til bilen din?
              </Typography>
            </Grid>
            <Grid item className={classes.textContainer}>
              <ul>
                <li>
                  <Typography variant="body1">
                    Vi lagerfører Bremseklosser, filtre, reimer, termostater,
                    vannpumper, forstillingsdeler, hjullager, drivledd, eksos,
                    plugger, drivstoffslanger og batterier
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    I tillegg kan i levere alt av originaldeler, Amerikanske
                    bildeler, og andre slitedeler fra 1-4 virkedager.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Vi har samme pris i butikk som på{' '}
                    <a target="_blank" href="https://bilxtra.no/bildelernav">
                      nett
                    </a>
                  </Typography>
                </li>
              </ul>
            </Grid>
            <Grid item>
              <Typography
                className={classes.header}
                variant="h4"
                style={{ marginTop: '1rem' }}
              >
                Verksted
              </Typography>
              <Typography variant="body1">
                Flisa bil tilbyr reparasjon og service på alle type biler.Vi har
                diagnoseverktøy, spesialverktøy og verkstedutstyr slik at din
                bil får god oppfølging og pleie når den er på vårt verksted.
              </Typography>
              <br />
              <Typography variant="body1">
                Vi tilbyr også finansiering/delbetaling rentefritt i 12 mnd. med
                <a
                  style={{ marginLeft: '.5rem' }}
                  href="https://bilxtra.no/bilxtra-konto-brosjyre/"
                  target="_blank"
                >
                  Bilxtra konto.
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6}>
          <img
            className={classes.img}
            src="https://images.unsplash.com/photo-1580402427914-a6cc60d7d44f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1357&q=80"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionBildeler;
