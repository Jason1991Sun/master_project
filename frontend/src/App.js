import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./common/header";
import Footer from "./common/footer";
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from "./pages/about";
import Contact from "./pages/contact";
import Item from "./pages/item";
// change this later to real login page, for now we are testing signup
import Login from "./pages/signup";

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
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Fragment>
      <Footer />
    </Router>
  );
}
