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
    height: '23rem',
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
            src={
              'https://lh3.googleusercontent.com/pw/ACtC-3eEzqYxalqBQMQ1JRwE7gM2OIw1pI1rISWxroomdNJA_XCS6QilIFzX4EbZoQvkPQHky0FuvhOcnf504DjyYQdelp66P-7tk95thfHgOHs5VzNVRmgqVwL0n91ej-eS03mFvgSnmUxAetyzlpZ_HMcD=w1440-h1080-no?authuser=0'
            }
            alt=""
          />
        </Grid>
        <Grid item>
          <img
            className={classes.img}
            src={
              'https://lh3.googleusercontent.com/yae3taFsi9NIGbfm0EwQPV0HWFJ3EGoYQ2ijGIYMGiyHJ30fzj8c4mj6xz3zMKQ_AB35X75FSNnnqqvEG97NVSiQcw685w1YizRvQdI3k8J50KF3NJP1mIPAn0ooT1v-OswgdT3jPvtwWTVQixTFcCMWPBnT9hRYHbUP-HGoIK7HQ1YaF9TKIvjNUtFD4ytUdO3C7OSrIYLtMgojmF4SjhYdRuQXw82eRKVarFyyT76Jd5bTeKr4fDUhUfxo0GCWYcl-dZOKg8Tfrzyhi-duSOub16Omd_iWMq1ITpXfieZetXoJd161W4C-fqapjDjE-vSSIfZIqVbHqU5T7wbVibkQ5QZzYXDMucIMz3em2ySp48lCJbYY0r8ftgmf-_VEdi_Qb4MF6cqyFmr3nFWQSJeb_8n1Anz-vS_kLOWxDaWHsEvXA-ESjgKS3XIdrVMyjlG85ZuLdEfuUDQurKc0R9cSUYQbOalXZENQjaUvjGI1T17JIM_VXpukhd8JmNPC8-jM4_WzdMPGZbEE1w87hw8Ssi7wvZU4vvdVPKehEjcm1VLGhLk-x4pNhDoOCIN5XmEYqgQA9t47fQY8pW-dplzhygVSdsbSZiug4vlSPUfdQL_qG5wRqV-9LDkgZjRipaWB9SFe2lwU2CgkLcvVFVI5FwW0wsO21OaLonlqYTN1Comn9-eHgiJKiJ70=w3840-h2880-no?authuser=0'
            }
            alt="building"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionStartPage;
