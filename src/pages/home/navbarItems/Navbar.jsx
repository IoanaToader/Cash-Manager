import React, { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import "./Navbar.css";

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

          <a className="navbar-brand" id="navbar-admin" href="#">
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

      {mobileClick && (
        <>
          <div className="mobile-navbar-full-page">
            <div className="mobile-elements">
              <div class="mobile-navbar">
                <img
                  className="mobile-navbar-logo"
                  src="/img/logo/logo_piggy.png"
                />
                <span className="mobile-navbar-user">Ioana</span>
                <div className="mobile-navbar-title-app">My Wallet</div>
              </div>
              <div className="mobile-home-full-page">
                <ul className="mobile-ul">
                  <li className="mobile-item">
                    <a className="mobile-link" href="/">
                      <img
                        className="mobile-img"
                        src="/img/phone img/home-icon.png"
                      />
                      Home
                    </a>
                    <hr className="hr-mobile-navbar" />
                  </li>
                  <li className="mobile-item">
                    <a className="mobile-link" href="/accounts">
                      <img
                        className="mobile-img"
                        src="/img/phone img/accounts-icon.png"
                      />
                      Accounts
                    </a>
                    <hr className="hr-mobile-navbar" />
                  </li>
                  <li className="mobile-item">
                    <a className="mobile-link" href="/categories">
                      <img
                        className="mobile-img"
                        src="/img/phone img/categories-icon.png"
                      />
                      Categories
                    </a>
                    <hr className="hr-mobile-navbar" />
                  </li>
                  <li className="mobile-item">
                    <a className="mobile-link" href="/overview">
                      <img
                        className="mobile-img"
                        src="/img/phone img/overview-icon.png"
                      />
                      Overview
                    </a>
                    <hr className="hr-mobile-navbar" />
                  </li>
                  <li className="mobile-item">
                    <a className="mobile-link" href="/overview">
                      <img
                        className="mobile-img"
                        src="/img/phone img/liability-icon.png"
                      />
                      Liability
                    </a>
                    <hr className="hr-mobile-navbar" />
                  </li>
                  <li className="mobile-item">
                    <a className="mobile-link" href="/overview">
                      <img
                        className="mobile-img"
                        src="/img/phone img/exchange-icon.png"
                      />
                      Currency Convertor
                    </a>
                    <hr className="hr-mobile-navbar" />
                  </li>
                  <li className="mobile-item">
                    <a className="mobile-link" href="/overview">
                      <img
                        className="mobile-img"
                        src="/img/phone img/follow-icon.png"
                      />
                      Follow us!
                    </a>
                    <hr className="hr-mobile-navbar" />
                  </li>
                  <li className="mobile-item">
                    <a className="mobile-link" href="/login">
                      <img
                        className="mobile-img"
                        src="/img/phone img/logout-icon.png"
                      />
                      Log Out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div onClick={showMobileNavbar} id="overlay"></div>
        </>
      )}
    </>
  );
};

export default Navbar;
