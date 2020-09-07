import React, { Fragment } from "react";
import InstaGrid from "./Ins";
import { GalleryWrapper, GalleryHeading } from "./style";
import { Container } from "@material-ui/core";

export default () => (
  <Fragment>
    <GalleryHeading>explore our instagram</GalleryHeading>
    <GalleryWrapper>
      <Container>
        <InstaGrid account="makeci_store" numberOfMediaElements={12} />
      </Container>
    </GalleryWrapper>
  </Fragment>
);
