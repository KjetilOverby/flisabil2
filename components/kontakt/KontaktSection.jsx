import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import Link from 'next/link';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
  contactInfoContainer: {
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
    },
  },
  container: {
    margin: '5rem 0',
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
    },
  },
  containerTag: {
    flexGrow: 1,
  },
  headers: {
    fontWeight: 'bold',
  },

  img: {
    width: '100%',
    cursor: 'pointer',
    marginTop: '2.5rem',
    boxShadow: '5px 5px 20px #bababa',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  icon: {
    marginRight: '.5rem',
    fontSize: '1.2rem',
  },
  iconFacebook: {
    fontSize: '2rem',
    marginRight: '.5rem',
  },
  mapContainer: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      width: '50vw',
    },
    [theme.breakpoints.down([500])]: {
      width: '100vw',
    },
  },
  italicText: {
    fontStyle: 'italic',
    display: 'flex',
    alignItems: 'center',
    margin: '.2rem 0',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '5rem',
    background: 'rgba(256,256,256,.7)',
    padding: '2rem 6rem 2rem 2rem',
    borderRadius: '10px',
  },
}));
const KontaktSection = () => {
  const classes = useStyles();
  return (
    <Container className={classes.containerTag}>
      <Grid container className={classes.container}>
        <Grid item md={4} className={classes.contactInfoContainer}>
          <Grid container className={classes.textContainer}>
            <Grid item style={{ marginBottom: '2rem' }}>
              <Typography variant="h6" className={classes.headers}>
                Flisa Bil AS
              </Typography>
              <Typography variant="body1" className={classes.italicText}>
                Negardsveien 8, 2270 Flisa
              </Typography>

              <Typography variant="body1" className={classes.italicText}>
                <PhoneIcon className={classes.icon} /> 62 95 19 10
              </Typography>
              <Typography variant="body1" className={classes.italicText}>
                <MailIcon className={classes.icon} />
                <a href="mailto:flisabil@online.no">flisabil@online.no</a>
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="h6" className={classes.headers}>
                Arild Nygaard
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" className={classes.italicText}>
                Daglig leder/bilsalg
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                style={{ marginBottom: '2rem' }}
                variant="body1"
                className={classes.italicText}
              >
                <PhoneIcon className={classes.icon} /> 91 80 84 62
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" className={classes.headers}>
                Harald Hegge
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" className={classes.italicText}>
                Butikkansvarlig/verksted
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                style={{ marginBottom: '2rem' }}
                variant="body1"
                className={classes.italicText}
              >
                <PhoneIcon className={classes.icon} /> 94 00 56 23
              </Typography>
            </Grid>
            <a
              target="_blank"
              href="https://nb-no.facebook.com/pages/category/Motor-Vehicle-Company/Flisa-Bil-As-Bilxtra-Flisa-294696983928901/"
            >
              <Grid item>
                <Typography className={classes.italicText} variant="body1">
                  <FacebookIcon
                    className={classes.iconFacebook}
                    style={{ color: '#6175c2' }}
                  />
                  Følg oss på facebook
                </Typography>
              </Grid>
            </a>
          </Grid>
        </Grid>
        <Grid item lg={6} md={7} className={classes.mapContainer}>
          <a
            target="_blank"
            href="https://www.google.no/maps/place/BilXtra+Flisa/@60.6126764,12.0092837,16z/data=!4m5!3m4!1s0x46420ded8597ce55:0x24f124e7cc1ce0aa!8m2!3d60.6136998!4d12.0069341"
          >
            <img
              className={classes.img}
              src="https://lh3.googleusercontent.com/pw/ACtC-3cM_uF7i-ziYKh54tWS08QnbcoEvd40KixroEQVajWWeREIeUJ_Z_QlDkxp415Kxm1-mwBcDrkddonxGITmJmTwCK3HuYV8UypWfcjU4vtGO0Bf3ntDt_pgf4sqMKf11CouO2B0LZEuGdm3dMJJgGiq=w1696-h1080-no?authuser=0"
              alt="map"
            />
          </a>
          <a
            target="_blank"
            src="https://lh3.googleusercontent.com/pw/ACtC-3cM_uF7i-ziYKh54tWS08QnbcoEvd40KixroEQVajWWeREIeUJ_Z_QlDkxp415Kxm1-mwBcDrkddonxGITmJmTwCK3HuYV8UypWfcjU4vtGO0Bf3ntDt_pgf4sqMKf11CouO2B0LZEuGdm3dMJJgGiq=w1696-h1080-no?authuser=0"
          >
            Klikk på kartet for å gå til Google Maps
          </a>
        </Grid>
      </Grid>
    </Container>
  );
};

export default KontaktSection;
