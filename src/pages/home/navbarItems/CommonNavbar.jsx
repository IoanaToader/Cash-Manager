import React, { useState, useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

const CommonNavbar = () => {
  const userContext = useContext(UserContext);

  return (
    <>
      <nav className=" navbar navbar-expand-lg" id="home-navbar">
        <div className="container-fluid">
          {/* ----------------Navigation for mobile--------------------- */}
          <div
            onClick={userContext.methods.togggleMobileNavbar}
            id="hamburger-meniu-icon"
          >
            <img src="/img/phone img/hamburger-meniu.png" />
          </div>

          {/* --------------------------------------------------- */}

          <a className="navbar-brand" id="navbar-admin" href="#">
            <img id="navbar-logo" src="/img/logo/logo_piggy.png" />
          </a>

          {/* ----------------Navigation for mobile--------------------- */}

          <div id="add-expense">
            <img src="/img/phone img/add-expense.png" />
          </div>

          {/* --------------------------------------------------- */}

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              id="navbar-ul "
            ></ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default CommonNavbar;
