import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay>
    <div>
      <img alt="" src={process.env.PUBLIC_URL + "/images/banner.jpg"} />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt="" src={process.env.PUBLIC_URL + "/images/banner2.jpg"} />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img alt="" src={process.env.PUBLIC_URL + "/images/banner.jpg"} />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img alt="" src={process.env.PUBLIC_URL + "/images/banner2.jpg"} />
      <p className="legend">Legend 4</p>
    </div>
  </Carousel>
);
