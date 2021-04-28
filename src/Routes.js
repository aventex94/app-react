import React, { useCallback, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./components/Product";

const Routes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/product">
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
