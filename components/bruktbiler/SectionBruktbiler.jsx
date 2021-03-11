import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import Finn from './Finn';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: '8rem 0',

    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '2rem 0',
    },
  },
  header: {
    marginBottom: '3rem',
  },
  header2: {
    marginTop: '5rem',
    marginBottom: '3rem',
  },
}));
const SectionBruktbiler = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Grid container className={classes.container}>
        <Grid item>
          <Typography className={classes.header} variant="h4">
            Kjøpe bruktbil?
          </Typography>
        </Grid>
        <Grid item className={classes.textContainer}>
          <Typography variant="body1">
            Flisa Bil har drevet bilsalg siden 1985. Vi har biler i alle
            prisklasser og selges med garanti med mindre noe annet er tydelig
            opplyst.
          </Typography>
          <br />
          <Typography variant="body1">
            Vi er godkjent som autoreg forhandler av Statens Vegevesen, dette
            gjør at vi kan omregistrere og levere biler umiddelbart.
          </Typography>
          <br />
          <Typography variant="body1">
            Vi er fleksible, serviceinnstilte og kan være behjelpelige med «alt»
            i forbindelse med ditt bilkjøp. Finansiering, forsikring, innbytte,
            verkstedtjenester, ruteskift, soting, dekkhotell, frakt av bil,
            takstativ, skibokser og annet ekstrautstyr til bilen.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4" className={classes.header2}>
            Våre bruktbiler
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Vi har for det meste mange flere biler enn de som er annonsert, vi
            rekker ikke alltid å legge ut. Har du et spesielt ønske så ta
            kontakt.
          </Typography>
        </Grid>
        <Grid item>
          <Finn />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionBruktbiler;
