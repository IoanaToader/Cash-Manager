import React from "react";
import { withRouter } from "react-router";
import "./HomePage.css";
import Navbar from "./navbarItems/Navbar";

const HomePage = () => {
  return (
    <div className="main-home-page">
      <Navbar />
    </div>
  );
};

export default withRouter(HomePage);
