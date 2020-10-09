import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import SearchIcon from "@material-ui/icons/Search";
import {
  HeaderWrapper,
  TopNotice,
  Logo,
  NavWrapper,
  MainNav,
  NavItem,
  UserNav,
  NavUserItem,
} from "./style";

function Header() {
  const userSignin = useSelector((state) => state.loggedIn);
  const { userInfo } = userSignin;
  let isAdmin = false;

  if (userInfo) {
    const userEmail = userInfo.email;
    const adminEmail = "jason@test.com";

    if (userEmail === adminEmail) {
      isAdmin = true;
    }
  }

  return (
    <HeaderWrapper>
      <TopNotice>free domestic shipping for orders over $45 AUD</TopNotice>
      <Logo href="/"></Logo>
      <NavWrapper>
        <MainNav>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/shop">Shop+</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/contact">Contact</NavItem>
          <SearchIcon></SearchIcon>
        </MainNav>
        <UserNav>
          {userInfo ? (
            <Fragment>
              {isAdmin ? (
                <Fragment>
                  <NavUserItem href="/dashboard">
                    {userInfo.username}
                  </NavUserItem>
                  <NavUserItem href="/content">Manage Content</NavUserItem>
                </Fragment>
              ) : (
                <Fragment>
                  <NavUserItem href="/profile">{userInfo.username}</NavUserItem>
                  <NavUserItem href="/cart">Cart</NavUserItem>
                </Fragment>
              )}
            </Fragment>
          ) : (
            <Fragment>
              <NavUserItem href="/login">Log in</NavUserItem>
              <NavUserItem href="/signUp">Sign Up</NavUserItem>
            </Fragment>
          )}
        </UserNav>
      </NavWrapper>
    </HeaderWrapper>
  );
}

export default Header;
