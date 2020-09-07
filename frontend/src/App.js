import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./common/header";
import Footer from "./common/footer";
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from "./pages/about";
import Contact from "./pages/contact";
import Item from "./pages/item";

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
          <Route
            path="/items/:id"
            render={({ match }) => <Item match={match} />}
          />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Fragment>
      <Footer />
    </Router>
  );
}
