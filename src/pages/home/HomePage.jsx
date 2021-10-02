import React from "react";
import { withRouter } from "react-router";
import "./HomePage.css";
import Navbar from "./navbarItems/Navbar";

const HomePage = () => {
  return <Navbar />;
};

export default withRouter(HomePage);
