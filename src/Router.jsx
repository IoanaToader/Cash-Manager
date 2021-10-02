import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import AccountsItem from "./pages/home/navbarItems/AccountsItem";
import CategoriesItem from "./pages/home/navbarItems/CategoriesItem";
import OverviewItem from "./pages/home/navbarItems/OverviewItem";
import AddExpenseItem from "./pages/home/navbarItems/OverviewItem";

const Router = () => {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>

      <Route path="/sign-up">
        <SignUp />
      </Route>

      <Route path="/forgot-password">
        <ForgotPassword />
      </Route>

      <Route path="/accounts">
        <AccountsItem />
      </Route>

      <Route path="/categories">
        <CategoriesItem />
      </Route>

      <Route path="/overview">
        <OverviewItem />
      </Route>

      <Route path="/add-expense">
        <AddExpenseItem />
      </Route>

      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
  );
};

export default Router;
