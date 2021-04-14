import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ Component, isLogin, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
export default PrivateRoute;
