import React, { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import "./Navbar.css";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Navbar = (props) => {
  const userContext = useContext(UserContext);

  const [mobileClick, setMobileClick] = useState(false);

  const showMobileNavbar = () => {
    setMobileClick(!mobileClick);
  };

  return (
    <>
      <nav className=" navbar navbar-expand-lg" id="home-navbar">
        <div className="container-fluid">
          {/* ----------------Navigation for mobile--------------------- */}
          <div onClick={showMobileNavbar} id="hamburger-meniu-icon">
            <img src="/img/phone img/hamburger-meniu.png" />
          </div>

          {/* --------------------------------------------------- */}

          <a className="navbar-brand" id="navbar-admin" href="/">
            <img id="navbar-logo" src="/img/logo/logo_piggy.png" />
            Hello, {userContext.data.userDetails.username}
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
            >
              <li className="nav-item" id="navbar-item">
                <a
                  className="nav-link active"
                  id="navbar-link"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="navbar-li nav-item" id="navbar-item">
                <a
                  className="navbar-link nav-link"
                  id="navbar-link"
                  href="/accounts"
                >
                  Accounts
                </a>
              </li>
              <li className="nav-item" id="navbar-item">
                <a className="nav-link" id="navbar-link" href="/categories">
                  Categories
                </a>
              </li>
              <li className="nav-item" id="navbar-item">
                <a className="nav-link" id="navbar-link" href="overview">
                  Overview
                </a>
              </li>
              <li className="nav-item" id="navbar-item">
                <a className="nav-link" id="navbar-link" href="add-expense">
                  Add Expense
                </a>
              </li>
              <li className="nav-item" id="navbar-item">
                <a className="nav-link" id="navbar-link" href="login">
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {mobileClick && <ResponsiveNavbar onHandleNavbar={showMobileNavbar} />}
    </>
  );
};

export default Navbar;
