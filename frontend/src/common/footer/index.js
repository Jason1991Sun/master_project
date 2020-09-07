import React, { Component, Fragment } from "react";
import {
  FooterWrapper,
  ContentWrapper,
  Logo,
  FooterNavWrapper,
  NavItem,
  SocialWrapper,
  SocialItem,
  SocialPic,
  SocialPicWrapper,
  CopyRightWrapper,
} from "./style";
class Footer extends Component {
  render() {
    return (
      <Fragment>
        <FooterWrapper>
          <ContentWrapper>
            <Logo href="/"></Logo>
            <FooterNavWrapper>
              <NavItem href="/about">About</NavItem>
              <NavItem href="/">Shipping And Delivery</NavItem>
              <NavItem href="/">SHop Policy</NavItem>
              <NavItem href="/faq">FAQ</NavItem>
            </FooterNavWrapper>
            <SocialWrapper>
              <SocialItem href="/contact">Contact Us</SocialItem>
              <SocialItem href="/">makecistore@gamil.com</SocialItem>
              <SocialPicWrapper>
                <SocialPic
                  src={process.env.PUBLIC_URL + "/images/mail.jpg"}
                ></SocialPic>
                <SocialPic
                  src={process.env.PUBLIC_URL + "/images/facebook.jpg"}
                ></SocialPic>
                <SocialPic
                  src={process.env.PUBLIC_URL + "/images/insta.jpg"}
                ></SocialPic>
              </SocialPicWrapper>
            </SocialWrapper>
          </ContentWrapper>
          <CopyRightWrapper>Copyright 2020</CopyRightWrapper>
        </FooterWrapper>
      </Fragment>
    );
  }
}

export default Footer;
