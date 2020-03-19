import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import DashboardPage from "./DashboardPage/DashboardPage";
import LoginPage from "./LoginPage/LoginPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import PrivateRoute from "./PrivateRoute";

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={DashboardPage} />
        <PrivateRoute path="/slug/:slug" component={DashboardPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
