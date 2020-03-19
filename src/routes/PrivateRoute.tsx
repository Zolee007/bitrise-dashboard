import React from "react";
import { RouteProps, Redirect, Route } from "react-router-dom";
import { isSignedIn } from "services/AuthService";

const PrivateRoute = ({ component: Component, ...rest }: RouteProps): JSX.Element => (
  <Route
    {...rest}
    render={(props): JSX.Element =>
      isSignedIn() && Component ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

export default PrivateRoute;
