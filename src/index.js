import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import Auth from "./pages/Auth";
import Private from "./pages/Private";
import Public from "./pages/Public";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import PrivateRouteAuth from "./components/PrivateRouteAuth";

import reduxStore from "./Redux/store";

class AppWithRouter extends React.Component {
  state = {
    isLogin: false,
  };
  onClickAuth = () => {
    this.setState((state) => ({
      isLogin: !state.isLogin,
    }));
  };
  render() {
    const { isLogin } = this.state;
    return (
      <>
        <Router>
          <Switch>
            <PrivateRoute
              path="/private"
              isLogin={isLogin}
              Component={Private}
            />
            <Route path="/public" component={Public} />
            <PrivateRouteAuth
              path="/"
              exact
              Component={Auth}
              isLogin={isLogin}
              onClickAuth={this.onClickAuth}
            />
            <Route path="/" component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <AppWithRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
