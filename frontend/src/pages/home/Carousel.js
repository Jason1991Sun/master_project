import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay>
    <div>
      <img alt="" src={process.env.PUBLIC_URL + "/images/banner.jpg"} />
      <p className="legend"></p>
    </div>
    <div>
      <img alt="" src={process.env.PUBLIC_URL + "/images/banner2.jpg"} />
      <p className="legend"></p>
    </div>
    <div>
      <img alt="" src={process.env.PUBLIC_URL + "/images/banner3.jpg"} />
      <p className="legend"></p>
    </div>
    <div>
      <img alt="" src={process.env.PUBLIC_URL + "/images/banner4.jpg"} />
      <p className="legend"></p>
    </div>
  </Carousel>
);
