import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "35vh",
    flexDirection: "column",
    marginTop: "2rem",

    [theme.breakpoints.down("xs")]: {},
  },
  header: {
    color: "#d6d6d6",
    fontWeight: "400",
    marginRight: "1.5rem",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: "5.5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "4.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
      marginRight: ".6rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
      marginRight: ".5rem",
      color: "#ffffff",
      marginTop: "5rem",
    },
  },
  header1: {},
  header2: {},
  header3: {},
  header4: {},

  headerContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5rem",
    [theme.breakpoints.down("lg")]: {
      marginTop: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
    },
  },
  text: {
    color: "#fff",
    fontWeight: "100",
  },
}));
const TextOnHeaderComponent = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid item>
        <Grid container className={classes.headerContainer} style={{}}>
          <Grid item>
            <Typography
              variant="h1"
              className={`${classes.header} ${classes.header1}`}
            >
              Velkommen
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h1"
              className={`${classes.header} ${classes.header2}`}
            >
              til
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h1"
              className={`${classes.header} ${classes.header3}`}
            >
              Flisa
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h1"
              className={`${classes.header} ${classes.header4}`}
            >
              Bil
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.container}>
        {/*   <Grid
          item
          style={{
            width: '35rem',
            marginTop: '1rem',
          }}
        >
          <Typography variant="h6" className={classes.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            repellendus beatae esse, placeat excepturi doloribus voluptatibus
            at. Doloribus suscipit eaque pariatur, voluptates officiis fugit
            accusantium id temporibus at odio ea.
          </Typography>
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default TextOnHeaderComponent;
