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
              <NavItem href="/faq">Shipping And Delivery</NavItem>
              <NavItem href="/faq">SHop Policy</NavItem>
              <NavItem href="/faq">FAQ</NavItem>
            </FooterNavWrapper>
            <SocialWrapper>
              <SocialItem href="/contact">Contact Us</SocialItem>
              <SocialItem href={"mailto:makecistore@gmail.com"} target="_blank">
                makecistore@gamil.com
              </SocialItem>
              <SocialPicWrapper>
                <SocialItem
                  href={"mailto:makecistore@gmail.com"}
                  target="_blank"
                >
                  <SocialPic
                    src={process.env.PUBLIC_URL + "/images/mail.jpg"}
                  ></SocialPic>
                </SocialItem>
                <SocialItem
                  href="https://www.facebook.com/makecistore/"
                  target="_blank"
                >
                  <SocialPic
                    src={process.env.PUBLIC_URL + "/images/facebook.jpg"}
                  ></SocialPic>
                </SocialItem>
                <SocialItem
                  href="https://www.instagram.com/makeci_store/"
                  target="_blank"
                >
                  <SocialPic
                    src={process.env.PUBLIC_URL + "/images/insta.jpg"}
                  ></SocialPic>
                </SocialItem>
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
