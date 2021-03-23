import React from "react";
import { useSelector } from "react-redux";
import { Route, Router, Switch } from "react-router";
import RepositoryPage from "../Pages/RepositoryPage";
import ResetPasswordPage from "../Pages/ResetPasswordPage";
import SignIn from "../Pages/SignIn";
import Signup from "../Pages/Signup";
import { default as history } from "./History";

function RouteWrapper() {
  const {
    RX_AUTH: { role, isAuthenticated },
  } = useSelector((state) => state);

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/forgot-password" component={ResetPasswordPage} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/repository/:name" component={RepositoryPage} />
      </Switch>
    </Router>
  );
}

export default RouteWrapper;
