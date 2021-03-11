import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '20rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.down([1999])]: {
      marginTop: '25rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '4rem',
      flexDirection: 'column',
      height: '25rem',
    },
  },
  bilxtraLogo: {
    height: '2rem',
  },
  bransjeLogo: {
    height: '6rem',
  },
  vegvesenLogo: {
    height: '5rem',
  },
}));
const LogoSection = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container className={classes.container}>
        <Grid item>
          <img
            className={classes.bilxtraLogo}
            src="https://lh3.googleusercontent.com/pw/ACtC-3d6HxnacznQioFhcaub3YOLVKVy_hgLjG3bzbL4x6yYaTXpiPs8OoA-aO-JJVdJTsHB81mM_aNa5-S8CCUomjOxzyhZODo9MmtwhTlVq2F3yohp7TuRXdd5F270_Bbx-WNLdCcmiZovgGJMZHTcCID8=w501-h100-no?authuser=0"
            alt="Bilxtra logo"
          />
        </Grid>
        <Grid item>
          <img
            className={classes.vegvesenLogo}
            src="https://www.vegvesen.no/_attachment/1390959/binary/1113943?fast_title=Statens+vegvesens+logo+i+farger+%28positiv%29.png"
            alt="statens vegvesen logo"
          />
        </Grid>
        <Grid item>
          <img
            className={classes.bransjeLogo}
            src="https://kommunikasjon.ntb.no/data/images/00288/2a3df2c2-4cc2-42ab-b365-8bb95da50c70.jpg/social"
            alt="Norges bilbransjeforbund logo"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default LogoSection;
