import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../Home";
import ProductDetails from "../Product/Details";
import NotFound from "../NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/produto/:id" component={ProductDetails} />
      <Route path="/not-found" component={NotFound} />
      <Route path="*">
        <Redirect to="/not-found" />
      </Route>
    </Switch>
  );
};
export default Routes;
