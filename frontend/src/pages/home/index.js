import React, { Component, Fragment } from "react";
import Carousel from "./Carousel";
import Content from "./Content";
import Gallery from "./Gallery";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Carousel />
        <Content />
        <Gallery />
      </Fragment>
    );
  }
}

export default Home;
