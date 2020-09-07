import React, { Component, Fragment } from "react";
import { Container } from "@material-ui/core";
import { AboutHeading, AboutImport, AboutContent } from "./style";

class about extends Component {
  render() {
    return (
      <Fragment>
        <Container maxWidth="lg">
          <AboutHeading>Our Mission</AboutHeading>
          <AboutImport>
            We source the most unique and highly quality sewing and craft
            accessories globally brought directly to you, at an affordable
            price.
          </AboutImport>
          <AboutContent>
            hello, welcome to Makeci! We are Diana and Yanny, a dynamic duo of
            designers based in Sydney. After studying fashion design and working
            for designer labels, we felt there was a lack of fun and unique
            trims available. What was available was either expensive, poor
            quality, limited or lackluster...
          </AboutContent>

          <AboutContent>
            So MAKECI was born! We source globally, bringing a diverse range of
            sewing notions and craft items with the utmost value on quality.
            Find everything from basics, trims, elastics, ribbon and closures.
            Westock large quantities so you will not have to worry about your
            favourite trim running out!
          </AboutContent>

          <AboutContent>
            As creative ourselves, we are inspired by the global makers movement
            and wanted to source the most unique products to empower creative
            minds and hands all over the world.
          </AboutContent>

          <AboutContent>
            We hope our beautiful trims can inspire new ideas for new projects
            or to embellish old ones. Please share with us your creations on
            social media as we would love to see them! If you have any questions
            or suggestions please don't hesitate to conatct us.
          </AboutContent>

          <AboutContent> We hope you enjoy making with MAKECI.</AboutContent>
        </Container>
      </Fragment>
    );
  }
}

export default about;
