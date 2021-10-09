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
      <div onClick={exitNavbar} id="overlay"></div>)
    </>
  );
};

export default ResponsiveNavbar;
