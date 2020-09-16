import React, { Component } from "react";
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

class Header extends Component {
  render() {
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
            <NavUserItem href="/login">Log in</NavUserItem>
            <NavUserItem href="/cart">Cart</NavUserItem>
            <NavUserItem href="/signUp">Sign Up</NavUserItem>
          </UserNav>
        </NavWrapper>
      </HeaderWrapper>
    );
  }
}

export default Header;
