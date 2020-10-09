import * as React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
    fontSize: "20px",
  },
});

export default function Deposits() {
  const classes = useStyles();
  let currentDateTime =
    new Date().getDate() +
    "-" +
    new Date().getMonth() +
    "-" +
    new Date().getFullYear();
  return (
    <React.Fragment>
      <Title>Recent Sell</Title>
      <Typography component="p" variant="h4">
        $30.66
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {currentDateTime}
      </Typography>
    </React.Fragment>
  );
}
