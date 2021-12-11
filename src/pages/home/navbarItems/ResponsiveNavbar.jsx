import React from "react";
import "./ResponsiveNavbar.css";

const ResponsiveNavbar = (props) => {
  const exitNavbar = () => {
    props.onHandleNavbar();
  };
  return (
    <>
      <div className="mobile-navbar-full-page">
        <div className="mobile-elements">
          <div className="mobile-navbar">
            <img
              className="mobile-navbar-logo"
              src="/img/logo/logo_piggy.png"
              alt="logo"
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
                    src="/img/phone-img/home-icon.png"
                    alt="home"
                  />
                  Home
                </a>
              </li>
              <li className="mobile-item">
                <a className="mobile-link" href="/add-expense">
                  <img
                    className="mobile-img"
                    src="/img/phone-img/expense-icon.png"
                    alt="accounts"
                  />
                  Add expense
                </a>
              </li>
              <li className="mobile-item">
                <a className="mobile-link" href="/accounts">
                  <img
                    className="mobile-img"
                    src="/img/phone-img/accounts-icon.png"
                    alt="accounts"
                  />
                  Accounts
                </a>
              </li>
              <li className="mobile-item">
                <a className="mobile-link" href="/categories">
                  <img
                    className="mobile-img"
                    src="/img/phone-img/categories-icon.png"
                    alt="categories"
                  />
                  Categories
                </a>
              </li>
              <li className="mobile-item">
                <a className="mobile-link" href="/overview">
                  <img
                    className="mobile-img"
                    src="/img/phone-img/overview-icon.png"
                    alt="overview"
                  />
                  Overview
                </a>
              </li>

              <li className="mobile-item">
                <a className="mobile-link" href="/overview">
                  <img
                    className="mobile-img"
                    src="/img/phone-img/exchange-icon.png"
                    alt="convertor"
                  />
                  Currency Convertor
                </a>
              </li>

              <li className="mobile-item">
                <a className="mobile-link" href="/login">
                  <img
                    className="mobile-img"
                    src="/img/phone-img/logout-icon.png"
                    alt="log out"
                  />
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div onClick={exitNavbar} id="overlay"></div>)
    </>
  );
};

export default ResponsiveNavbar;
