import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {login, logout, updateProfile} from "../../actions/loginActions";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from '@material-ui/core/Paper';
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
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
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
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
  form_element: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


// react function component Profile
function Profile(props) {
  // setup redux functionality
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.loggedIn);

  // setup material UI styles
  const classes = useStyles();

  // setup component state using the data from redux state
  const [username, setUsername] = useState(loggedIn.userInfo.username);
  const [email, setEmail] = useState(loggedIn.userInfo.email);
  const [password, setPassword] = useState(loggedIn.userInfo.password);
  const [phoneNumber, setPhoneNumber] = useState(loggedIn.userInfo.phone_number);
  const [firstName, setFirstName] = useState(loggedIn.userInfo.first_name);
  const [lastName, setLastName] = useState(loggedIn.userInfo.last_name);
  const [country, setCountry] = useState(loggedIn.userInfo.country);
  const [streetAddress, setStreetAddress] = useState(loggedIn.userInfo.street_address);
  const [suburb, setSuburb] = useState(loggedIn.userInfo.suburb);
  const [state, setState] = useState(loggedIn.userInfo.state);
  const [postCode, setPostCode] = useState(loggedIn.userInfo.post_code);
  const [shoppingCart, setShoppingCart] = useState(loggedIn.userInfo.shopping_cart);
  const [orderHistory, setOrderHistory] = useState(loggedIn.userInfo.order_history);
  const [alertOnce, setAlertOnce] = useState(false);

  // function to handle logout button click
  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/login");
  };

  // function to update user profile through DB operations
  const handleProfileUpdate = () => {
    const user = {
      username: username,
      email: email,
      password: password,
      phone_number: phoneNumber,
      first_name: firstName,
      last_name: lastName,
      country: country,
      street_address: streetAddress,
      suburb: suburb,
      state: state,
      post_code: postCode,
    };

    //console.log(user);
    axios
        .post("http://localhost:5000/users/update", user)
        .then((res) => {
          //console.log(res.data);
          dispatch(updateProfile(res.data));
          alert("Profile updated successfully")
        })
        .catch(err => {
          console.log(err);
        });
  };

  const selectCountry = (val) => {
    setCountry(val);
  };

  const selectRegion = (val) => {
    setState(val);
  };

  const changeUsername = (val) => {
    setUsername(val);
  };

  // user is not allowed to change email
  /*
  const changeEmail = (val) => {
    setEmail(val);
  };
  */

  const changePhoneNumber = (val) => {
    setPhoneNumber(val);
  };

  const changeFirstName = (val) => {
    setFirstName(val);
  };

  const changeLastName = (val) => {
    setLastName(val);
  };

  const changeAddress = (val) => {
    setStreetAddress(val);
  };

  const changePostCode = (val) => {
    setPostCode(val);
  };

  const changeSuburb = (val) => {
    setSuburb(val);
  };

  const changePassword = (val) => {
    setPassword(val);
  };

  const passwordOnFocus = (e) => {
    if(!alertOnce) {
      alert('Modify Password field only if you want to change your current password!');
      setAlertOnce(true);
      e.target.blur();
    }
  };

  return (
      <Fragment>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
              <Typography component="h1" variant="h5">
              User Profile
              </Typography>
              <form className={classes.form}>

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    defaultValue={username}
                    onChange={(e) => changeUsername(e.target.value)}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email (read only)"
                    name="email"
                    defaultValue={email}
                    InputProps={{
                      readOnly: true,
                    }}
                    //onChange={(e) => changeEmail(e.target.value)}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    defaultValue={password}
                    onChange={(e) => changePassword(e.target.value)}
                    onFocus={passwordOnFocus}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="phoneNumber"
                    label="Phone Number"
                    name="phoneNumber"
                    defaultValue={phoneNumber}
                    onChange={(e) => changePhoneNumber(e.target.value)}
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  defaultValue={firstName}
                  onChange={(e) => changeFirstName(e.target.value)}
              />

                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    defaultValue={lastName}
                    onChange={(e) => changeLastName(e.target.value)}
                />

                <CountryDropdown
                    value={country}
                    className={classes.form_element}
                    style={{
                      fontSize: 15
                    }}
                    onChange={(val) => selectCountry(val)} />

                <RegionDropdown
                    country={country}
                    className={classes.form_element}
                    value={state}
                    style={{
                      fontSize: 15
                    }}
                    showDefaultOption={true}
                    defaultOptionLabel={"select region"}
                    onChange={(val) => selectRegion(val)} />

                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="suburb"
                    label="Suburb"
                    name="suburb"
                    defaultValue={suburb}
                    onChange={(e) => changeSuburb(e.target.value)}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="streetAddress"
                    label="Address"
                    name="streetAddress"
                    defaultValue={streetAddress}
                    onChange={(e) => changeAddress(e.target.value)}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="postCode"
                    label="Postal Code / Zip code"
                    name="postCode"
                    defaultValue={postCode}
                    onChange={(e) => changePostCode(e.target.value)}
                />

                <Button
                    fullWidth
                    margin="normal"
                    className={classes.form_element}
                    variant="contained"
                    color="primary"
                    onClick={handleProfileUpdate}>
                  Update Profile
                </Button>

                <Button
                    fullWidth
                    margin="normal"
                    className={classes.form_element}
                    variant="contained"
                    color="secondary"
                    onClick={handleLogout}>
                  Log Out
                </Button>

                <Link href="/orderHistory">
                  {//todo add order history page
                } View your Order History </Link>
              </form>
          </div>
        </Container>
      </Fragment>
  );
}

export default Profile;
