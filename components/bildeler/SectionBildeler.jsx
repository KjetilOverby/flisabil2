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
    [theme.breakpoints.down('xs')]: {
      margin: '2rem 0 2rem 0',
    },
    [theme.breakpoints.down('md')]: {},
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
    [theme.breakpoints.down('xs')]: {
      marginTop: '3rem',
    },
  },
  textContainer: {},
}));
const SectionBildeler = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:800px)');
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
                det siste innen diagnoseverktøy, spesialverktøy og
                verkstedutstyr slik at din bil får 100 % oppfølging og pleie når
                den er på vårt verksted.
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