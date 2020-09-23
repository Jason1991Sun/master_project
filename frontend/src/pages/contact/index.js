import React, { Component, Fragment } from "react";
import { Container } from "@material-ui/core";

import {
  Contactush1,
  Contactush2,
  InfoHeading,
  ContentWrapper1,
  PicWrapper,
  InfoWrapper,
  InfoContent,
} from "./style";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Container maxWidth="lg">
          <Contactush1> Get in Touch </Contactush1>
          <Contactush2>
            <span>
              If you have any question or feedback, please do not hesitate to
              contact us on any of the below platforms.
            </span>
          </Contactush2>
          <ContentWrapper1>
            <PicWrapper>
              <img
                alt=""
                src={process.env.PUBLIC_URL + "/images/contact_us.jpg"}
              />
            </PicWrapper>
            <InfoWrapper>
              <InfoHeading> Email:</InfoHeading>
              <InfoContent
                href={"mailto:makecistore@gmail.com"}
                target="_blank"
              >
                {" "}
                makecistore@gmail.com
              </InfoContent>
              <InfoHeading> Instagram:</InfoHeading>
              <InfoContent
                href="https://www.instagram.com/makeci_store/"
                target="_blank"
              >
                {" "}
                @makeci_store
              </InfoContent>
              <InfoHeading> Facebook:</InfoHeading>
              <InfoContent
                href="https://www.facebook.com/makecistore/"
                target="_blank"
              >
                {" "}
                makecistore
              </InfoContent>
              <InfoHeading>Linkedin:</InfoHeading>
              <InfoContent
                href="https://www.linkedin.com/company/makeci"
                target="_blank"
              >
                {" "}
                Makeci
              </InfoContent>
              <InfoHeading> Etsy:</InfoHeading>
              <InfoContent
                href="https://www.etsy.com/au/shop/Makeci"
                target="_blank"
              >
                {" "}
                Makeci
              </InfoContent>
            </InfoWrapper>
          </ContentWrapper1>
        </Container>
      </Fragment>
    );
  }
}

export default Contact;
