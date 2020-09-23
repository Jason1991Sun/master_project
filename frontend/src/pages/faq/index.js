import React, { Component, Fragment } from "react";
import { Container } from "@material-ui/core";
import { FaqContent, FaqHeading1, FaqHeading2, FaqHeading3 } from "./style";

class Faq extends Component {
  render() {
    return (
      <Fragment>
        <Container maxWidth="lg">
          <FaqHeading1>Have a question? We would love to help!</FaqHeading1>
          <FaqHeading2>DELIVERY</FaqHeading2>
          <FaqHeading3>Processing Time</FaqHeading3>
          <FaqContent>
            We know you may need your item promptly so we aim to dispatch orders
            within 1-2 buisness days including Saturday.
          </FaqContent>
          <FaqHeading3>Delivery Estimates</FaqHeading3>
          <FaqContent>
            We use a combination of courier services including Sendle and
            Australia Post.
            <ul>
              <li>Australia</li>
            </ul>
            <ul>
              <li>. Standard: 1-10 business days</li>
              <li>. Express: 1-3 business days</li>
            </ul>
            New Zealand
            <ul>
              <li>. Standard: 4-8 business days</li>
              <li>. Express: 3 business days</li>
            </ul>
            USA
            <ul>
              <li>. Standard: 6-22 business days</li>
              <li>. Express: 5 business days</li>
            </ul>
            UK
            <ul>
              <li>. Standard: 6-19 business days</li>
              <li>. Express: 6 business days</li>
            </ul>
            Canada
            <ul>
              <li>. Standard: 6-24 business days</li>
              <li>. Express: 9 business days</li>
            </ul>
            Everywhere Else
            <ul>
              <li>. Standard: 6-25 business days</li>
              <li>. Express: upto 10 business days</li>
            </ul>
          </FaqContent>
          <FaqHeading3>Return '&' Exchanges </FaqHeading3>
          <FaqContent>
            Please choose carefully as many item that is cut to measure / by the
            metre including bundle deals cannot be returned unless the item is
            faulty. Ay non cut items is eliglibe for a refund or exchange within
            14 days of delivery minus the initial shipping cost. The buyer is
            responsible for the return cost. Please email us at
            makecistore@gmail.com to request a return or exchange.
          </FaqContent>
          <FaqHeading3> Will this suit my project?</FaqHeading3>
          <FaqContent>
            We offer 10cm samples of our trims, elastics and closures. After
            purchase, you can email us your item choices here. This is the
            perfect way to make sure the item is right for your project before
            larger quantity orders. You can find this here.
          </FaqContent>
        </Container>
      </Fragment>
    );
  }
}
export default Faq;
