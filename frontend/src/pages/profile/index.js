import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/loginAction";

function Profile(props) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/signUp");
  };
  return (
    <Fragment>
      <button onClick={handleLogout}>Log Out</button>
    </Fragment>
  );
}

export default Profile;
