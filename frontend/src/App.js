import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./common/header";
import Footer from "./common/footer";
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from "./pages/about";
import Contact from "./pages/contact";
import Item from "./pages/item";
import Cart from "./pages/cart";
// change this later to real login page, for now we are testing signup
import Login from "./pages/login";
import Signup from "./pages/signup";
import Profile from "./pages/profile";
import Checkout from "./pages/checkout";
import Faq from "./pages/faq";

export default function App() {
  return (
    <Router>
      <Header />
      <Fragment>
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/faq" component={Faq} />
          <Route path="/items/:id" component={Item} />
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/cart/:id?" component={Cart} />
        </Switch>
      </Fragment>
      <Footer />
    </Router>
  );
}
