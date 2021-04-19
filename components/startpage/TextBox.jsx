import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#f1f1f1",
    padding: "3rem",
    marginTop: "10rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "65rem",
    transform: "translateX(-50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      marginTop: "5rem",
    },
    [theme.breakpoints.down("md")]: {
      width: "70vw",
      top: "55%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      marginTop: 0,
      position: "initial",
      left: 0,
      top: 0,
      transform: "translateX(0)",
      padding: "1rem",
    },
  },
  text: {
    fontStyle: "italic",
    color: "#6e6e6e",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9rem",
    },
  },
}));
const TextBox = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item>
        <Typography className={classes.text} variant="body1">
          Midt mellom Kongsvinger og Elverum ligger Flisa Bil AS i Negardsvn 8 i
          Flisa sentrum.
        </Typography>
        <br />
        <ul>
          <li>
            <Typography className={classes.text} variant="body1">
              Kjøp og salg av alle typer bruktbiler
            </Typography>
            <Typography className={classes.text} variant="body1">
              (Vi er godkjent som autoreg forhandler av Statens Vegevesen, dette
              gjør at vi kan omregistrere og levere biler umiddelbart.)
            </Typography>
          </li>
          <li>
            <Typography className={classes.text} variant="body1">
              Bilxtra verksted
            </Typography>
          </li>
          <li>
            <Typography className={classes.text} variant="body1">
              Bilxtra butikk
            </Typography>
          </li>
          <li>
            <Typography className={classes.text} variant="body1">
              Periodisk kjøretøykontroll/EU kontroll
            </Typography>
          </li>
          <li>
            <Typography className={classes.text} variant="body1">
              Godkjent av Statens Vegevesen
            </Typography>
          </li>
          <li>
            <Typography className={classes.text} variant="body1">
              Medlem av Norges bilbransjeforbund
            </Typography>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default TextBox;
