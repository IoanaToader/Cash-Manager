import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { UserContext } from "../../../contexts/UserContext";
import "./Navbar.css";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Navbar = (props) => {
  const userContext = useContext(UserContext);
  const [mobileClick, setMobileClick] = useState(false);
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setTitle(`Hello, ${userContext.data?.userDetails?.username ?? ""}`);
        break;
      case "/accounts":
        setTitle("Accounts");
        break;
      case "/categories":
        setTitle("Categories");
        break;
      // case "/overview":
      //   setTitle("Overview");
      //   break;
      case "/add-expense":
        setTitle("Add expense");
        break;
      default:
        break;
    }
  }, [location, userContext.data.userDetails.username]);

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

          <a className="navbar-brand" href="/">
            <img id="navbar-logo" src="/img/logo/logo_piggy.png" />{" "}
          </a>
          <span id="navbar-title">{title}</span>

          {/* ----------------Navigation for mobile--------------------- */}

          <div id="add-expense">
            <a href="/add-expense">
              <img src="/img/phone img/add-expense.png" />
            </a>
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
