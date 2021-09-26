import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/login/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          {" "}
          <Login />{" "}
        </Route>
        <Route path="/" exact>
          {" "}
          <HomePage />{" "}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
