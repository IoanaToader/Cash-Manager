import React from "react";
import { withRouter } from "react-router";
import "./HomePage.css";
import AccountsItem from "./accounts/AccountsItem";
import OverviewItem from "./overview/OverviewItem";

const HomePage = () => {
  return (
    <div className="main-home-page">
      <AccountsItem />
      <OverviewItem />
    </div>
  );
};

export default withRouter(HomePage);
