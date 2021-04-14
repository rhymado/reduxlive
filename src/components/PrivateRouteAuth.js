import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ Component, isLogin, onClickAuth, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLogin ? (
          <Component {...props} isLogin={isLogin} onClickAuth={onClickAuth} />
        ) : (
          <Redirect
            to={{
              pathname: "/private",
              state: {
                msg: "Anda sudah login",
              },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
