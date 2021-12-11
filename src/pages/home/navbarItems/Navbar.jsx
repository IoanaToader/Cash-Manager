import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import AddComponent from "./AddComponent";
import "./Navbar.css";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Navbar = (props) => {
  const userContext = useContext(UserContext);
  const [mobileClick, setMobileClick] = useState(false);
  const location = useLocation();
  const [displayAddComponent, setDisplayAddComponent] = useState(false);
  let title = "";

  switch (location.pathname) {
    case "/":
      title = `Hello, ${userContext.data?.userDetails?.username ?? ""}`;
      break;
    case "/accounts":
      title = "Accounts";
      break;
    case "/categories":
      title = "Categories";
      break;
    case "/overview":
      title = "Overview";
      break;
    case "/add-expense":
      title = "Add expense";
      break;
    default:
      break;
  }

  const showMobileNavbar = () => {
    setMobileClick(!mobileClick);
  };

  const showAddComponents = () => {
    setDisplayAddComponent(!displayAddComponent);
  };
  return (
    <div>
      <nav className=" navbar navbar-expand-lg" id="home-navbar">
        <div className="container-fluid">
          {/* ----------------Navigation for mobile--------------------- */}
          <div onClick={showMobileNavbar} id="hamburger-meniu-icon">
            <img src="/img/phone-img/hamburger-meniu.png" alt="meniu" />
          </div>

          {/* --------------------------------------------------- */}

          <a className="navbar-brand" href="/">
            <img id="navbar-logo" src="/img/logo/logo_piggy.png" alt="logo" />{" "}
          </a>
          <span id="navbar-title">{title}</span>

          {/* ----------------Navigation for mobile--------------------- */}

          <div id="add-expense">
            <button onClick={showAddComponents} id="add-expense-button">
              +{" "}
            </button>
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
      {displayAddComponent && (
        <AddComponent showAddComponents={showAddComponents} />
      )}
    </div>
  );
};

export default Navbar;
