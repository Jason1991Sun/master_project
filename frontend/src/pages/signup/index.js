import React, { Component } from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangephoneNumber = this.onChangephoneNumber.bind(this);
    this.onChangefirstName = this.onChangefirstName.bind(this);
    this.onChangelastName = this.onChangelastName.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeStreetAddress = this.onChangeStreetAddress.bind(this);
    this.onChangeSuburb = this.onChangeSuburb.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangePostCode = this.onChangePostCode.bind(this);

    this.state = {
      username: null,
      email: null,
      password: null,
      phoneNumber: null,
      firstName: null,
      lastName: null,
      country: null,
      streetAddress: null,
      suburb: null,
      state: null,
      postCode: null,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangephoneNumber(e) {
    this.setState({
      phoneNumber: e.target.value,
    });
  }
  onChangefirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }
  onChangelastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }
  onChangeCountry(e) {
    this.setState({
      country: e.target.value,
    });
  }
  onChangeStreetAddress(e) {
    this.setState({
      streetAddress: e.target.value,
    });
  }
  onChangeSuburb(e) {
    this.setState({
      suburb: e.target.value,
    });
  }
  onChangeState(e) {
    this.setState({
      state: e.target.value,
    });
  }
  onChangePostCode(e) {
    this.setState({
      postCode: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      phone_number: this.state.phoneNumber,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      country: this.state.country,
      street_address: this.state.streetAddress,
      suburb: this.state.suburb,
      state: this.state.state,
      post_code: this.state.postCode,
    };

    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));

    this.setState({
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
      firstName: "",
      lastName: "",
      country: "",
      streetAddress: "",
      suburb: "",
      state: "",
      postCode: "",
    });
  }

  render() {
    const classes = makeStyles((theme) => ({
      paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <br />
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <br />
          <form className={classes.form} onSubmit={this.onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="username"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  onChange={this.onChangeUsername}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={this.onChangeEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.onChangePassword}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  type="phoneNumber"
                  id="phoneNumber"
                  autoComplete="phoneNumber"
                  onChange={this.onChangephoneNumber}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="firstName"
                  label="First Name"
                  type="firstName"
                  id="firstName"
                  autoComplete="firstName"
                  onChange={this.onChangefirstName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="lastName"
                  label="Last Name"
                  type="lastName"
                  id="lastName"
                  autoComplete="lastName"
                  onChange={this.onChangelastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="country"
                  label="Country"
                  type="country"
                  id="country"
                  autoComplete="country"
                  onChange={this.onChangeCountry}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="StreetAddress"
                  label="Street Address"
                  type="StreetAddress"
                  id="StreetAddress"
                  autoComplete="StreetAddress"
                  onChange={this.onChangeStreetAddress}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="Suburb"
                  label="Suburb"
                  type="Suburb"
                  id="Suburb"
                  autoComplete="Suburb"
                  onChange={this.onChangeSuburb}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="State"
                  label="State"
                  type="State"
                  id="State"
                  autoComplete="State"
                  onChange={this.onChangeState}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="PostCode"
                  label="Post Code"
                  type="PostCode"
                  id="PostCode"
                  autoComplete="PostCode"
                  onChange={this.onChangePostCode}
                />
              </Grid>
            </Grid>
            <br />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <br />
      </Container>
    );
  }
}
